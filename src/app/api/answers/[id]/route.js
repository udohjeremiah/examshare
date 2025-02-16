import connectClient from "@/db/client";
import { ObjectId } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  try {
    const id = params?.id;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const client = await connectClient();
    const db = client.db(process.env.MONGODB_DATABSE);
    const collection = db.collection(process.env.MONGODB_COLLECTION_ANSWERS);

    const answers = await collection.find({ questionId: id }).toArray();

    return NextResponse.json(
      {
        success: true,
        message: "Answers have been successfully fetched",
        answers,
      },
      { status: 200, statusText: "OK" },
    );
  } catch (e) {
    console.error(e);
    return NextResponse(
      { success: false, error: e },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

export async function POST(request, { params }) {
  try {
    const id = params?.id;
    const { userId, userName, userImage, htmlContent } = await request.json();

    if (!id || !userId || !userName || !userImage || !htmlContent) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const client = await connectClient();
    const db = client.db(process.env.MONGODB_DATABSE);
    const answersCollection = db.collection(
      process.env.MONGODB_COLLECTION_ANSWERS,
    );
    const usersCollection = db.collection(process.env.MONGODB_COLLECTION_USERS);

    // Check if the user has already answered this question
    if (
      await answersCollection.findOne({
        questionId: id,
        userId,
      })
    ) {
      return NextResponse.json(
        {
          success: false,
          message: "User has already answered this question",
        },
        { status: 409, statusText: "Conflict" },
      );
    }

    const result = await answersCollection.insertOne({
      questionId: id,
      userId,
      userName,
      userImage,
      createdAt: new Date().toUTCString(),
      answer: htmlContent,
      edited: false,
      upvotes: 0,
      upvotesHistory: [],
    });

    await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $inc: { providedAnswers: 1 } },
    );

    return NextResponse.json(
      {
        success: true,
        message: `Answer with id ${result.insertedId} has been successfully created`,
      },
      { status: 201, statusText: "Created" },
    );
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: e },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

export async function PATCH(request, { params }) {
  try {
    const id = params?.id;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const client = await connectClient();
    const db = client.db(process.env.MONGODB_DATABSE);
    const answersCollection = db.collection(
      process.env.MONGODB_COLLECTION_ANSWERS,
    );
    const usersCollection = db.collection(process.env.MONGODB_COLLECTION_USERS);

    const { questionUserId, userId, htmlContent, upvotes, upvotesDirection } =
      await request.json();

    if (!questionUserId || !userId) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const updateFields = {};

    if (htmlContent !== undefined) {
      updateFields.answer = htmlContent;
      updateFields.edited = true;
    }

    if (upvotes !== undefined) {
      if (!upvotesDirection) {
        return NextResponse.json(
          { success: false, message: "Bad request" },
          { status: 400 },
        );
      }

      const upvotesHistory = (
        await answersCollection.findOne({
          questionId: id,
          userId: questionUserId,
        })
      ).upvotesHistory;

      if (
        upvotesHistory.some(
          (item) =>
            JSON.stringify(item) ===
            JSON.stringify({ id: userId, direction: upvotesDirection }),
        )
      ) {
        return NextResponse.json(
          {
            success: false,
            message: `User with id ${userId} has already ${
              upvotesDirection === "up" ? "upvoted" : "downvoted"
            } this answer before`,
          },
          { status: 409, statusText: "Conflict" },
        );
      }

      const existingVote = upvotesHistory.find((item) => item.id === userId);
      if (existingVote) {
        // user has upvoted or downvoted before
        updateFields.upvotes =
          upvotesDirection === "up" ? upvotes - 1 : upvotes + 1;

        updateFields.upvotesHistory = upvotesHistory.map((item) =>
          item.id === userId
            ? { id: userId, direction: upvotesDirection }
            : item,
        );
      } else {
        // user has not upvoted or downvoted before
        updateFields.upvotes =
          upvotesDirection === "up" ? upvotes + 1 : upvotes - 1;

        updateFields.upvotesHistory = [
          ...upvotesHistory,
          { id: userId, direction: upvotesDirection },
        ];
      }
    }

    if (Object.keys(updateFields).length === 0) {
      return NextResponse.json(
        {
          success: false,
          message: "No valid fields provided for update",
        },
        { status: 400, statusText: "Bad Request" },
      );
    }

    const result = await answersCollection.updateOne(
      { questionId: id, userId: questionUserId },
      { $set: updateFields },
    );

    console.log(updateFields.upvotes);
    await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $inc: { totalUpvotesReceived: updateFields.upvotes } },
    );

    if (result.modifiedCount === 1) {
      return NextResponse.json(
        {
          success: true,
          message: `Answer with id: ${id} successfully updated`,
        },
        { status: 200, statusText: "OK" },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `No answer found for this question with id: ${id} provided by user with id: ${userId}`,
        },
        { status: 404, statusText: "Not Found" },
      );
    }
  } catch (e) {
    console.error(e);
    return NextResponse.json(
      { success: false, error: e },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

export async function DELETE(request, { params }) {
  try {
    const id = params?.id;
    const { userId } = await request.json();

    if (!id || !userId) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const client = await connectClient();
    const db = client.db(process.env.MONGODB_DATABSE);
    const answersCollection = db.collection(
      process.env.MONGODB_COLLECTION_ANSWERS,
    );
    const usersCollection = db.collection(process.env.MONGODB_COLLECTION_USERS);

    const result = await answersCollection.deleteOne({
      questionId: id,
      userId,
    });

    await usersCollection.findOneAndUpdate(
      { _id: new ObjectId(userId) },
      { $inc: { providedAnswers: -1 } },
    );

    if (result.deletedCount === 1) {
      return NextResponse.json(
        {
          success: true,
          message: `Answer with id ${id} from user with id ${userId} has been successfully deleted`,
        },
        { status: 200, statusText: "OK" },
      );
    } else {
      return NextResponse.json(
        {
          success: false,
          message: `No answer was found for the question with id ${id} provided by the user with id ${userId}`,
        },
        { status: 404, statusText: "Not Found" },
      );
    }
  } catch (e) {
    return NextResponse.json(
      { success: false, error: e },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

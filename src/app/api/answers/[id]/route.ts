import { dbClient } from "@/lib/db-client";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const collection = dbClient
      .db(process.env.MONGODB_DATABASE)
      .collection(process.env.MONGODB_COLLECTION_ANSWERS);

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
    return NextResponse.json(
      { success: false, error: e },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

export async function POST(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { userId, userName, userImage, htmlContent } = await request.json();

    if (!id || !userId || !userName || !userImage || !htmlContent) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const answersCollection = dbClient
      .db(process.env.MONGODB_DATABASE)
      .collection(process.env.MONGODB_COLLECTION_ANSWERS);

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

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const answersCollection = dbClient
      .db(process.env.MONGODB_DATABASE)
      .collection(process.env.MONGODB_COLLECTION_ANSWERS);

    const { userId, htmlContent } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    if (htmlContent === undefined) {
      return NextResponse.json(
        {
          success: false,
          message: "No valid fields provided for update",
        },
        { status: 400, statusText: "Bad Request" },
      );
    }

    const result = await answersCollection.updateOne(
      { questionId: id, userId },
      { $set: { answer: htmlContent, edited: true } },
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

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { userId } = await request.json();

    if (!id || !userId) {
      return NextResponse.json(
        { success: false, message: "Bad request" },
        { status: 400 },
      );
    }

    const answersCollection = dbClient
      .db(process.env.MONGODB_DATABASE)
      .collection(process.env.MONGODB_COLLECTION_ANSWERS);

    const result = await answersCollection.deleteOne({
      questionId: id,
      userId,
    });

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

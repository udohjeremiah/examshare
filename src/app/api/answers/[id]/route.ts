import { NextRequest, NextResponse } from "next/server";

import { env } from "@/env/server";
import { databaseClient } from "@/lib/database-client";

export async function DELETE(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;
    const { userId } = await request.json();

    if (!id || !userId) {
      return NextResponse.json(
        { message: "Bad request", success: false },
        { status: 400 },
      );
    }

    const answersCollection = databaseClient
      .db(env.MONGODB_DATABASE)
      .collection(env.MONGODB_COLLECTION_ANSWERS);

    const result = await answersCollection.deleteOne({
      questionId: id,
      userId,
    });

    return result.deletedCount === 1
      ? NextResponse.json(
          {
            message: `Answer with id ${id} from user with id ${userId} has been successfully deleted`,
            success: true,
          },
          { status: 200, statusText: "OK" },
        )
      : NextResponse.json(
          {
            message: `No answer was found for the question with id ${id} provided by the user with id ${userId}`,
            success: false,
          },
          { status: 404, statusText: "Not Found" },
        );
  } catch (error) {
    return NextResponse.json(
      { error: error, success: false },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> },
) {
  try {
    const { id } = await params;

    if (!id) {
      return NextResponse.json(
        { message: "Bad request", success: false },
        { status: 400 },
      );
    }

    const collection = databaseClient
      .db(env.MONGODB_DATABASE)
      .collection(env.MONGODB_COLLECTION_ANSWERS);

    const answers = await collection.find({ questionId: id }).toArray();

    return NextResponse.json(
      {
        answers,
        message: "Answers have been successfully fetched",
        success: true,
      },
      { status: 200, statusText: "OK" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error, success: false },
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
        { message: "Bad request", success: false },
        { status: 400 },
      );
    }

    const answersCollection = databaseClient
      .db(env.MONGODB_DATABASE)
      .collection(env.MONGODB_COLLECTION_ANSWERS);

    const { htmlContent, userId } = await request.json();

    if (!userId) {
      return NextResponse.json(
        { message: "Bad request", success: false },
        { status: 400 },
      );
    }

    if (htmlContent === undefined) {
      return NextResponse.json(
        {
          message: "No valid fields provided for update",
          success: false,
        },
        { status: 400, statusText: "Bad Request" },
      );
    }

    const result = await answersCollection.updateOne(
      { questionId: id, userId },
      { $set: { answer: htmlContent, edited: true } },
    );
    return result.modifiedCount === 1
      ? NextResponse.json(
          {
            message: `Answer with id: ${id} successfully updated`,
            success: true,
          },
          { status: 200, statusText: "OK" },
        )
      : NextResponse.json(
          {
            message: `No answer found for this question with id: ${id} provided by user with id: ${userId}`,
            success: false,
          },
          { status: 404, statusText: "Not Found" },
        );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error, success: false },
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
    const { htmlContent, userId, userImage, userName } = await request.json();

    if (!id || !userId || !userName || !userImage || !htmlContent) {
      return NextResponse.json(
        { message: "Bad request", success: false },
        { status: 400 },
      );
    }

    const answersCollection = databaseClient
      .db(env.MONGODB_DATABASE)
      .collection(env.MONGODB_COLLECTION_ANSWERS);

    // Check if the user has already answered this question
    if (
      await answersCollection.findOne({
        questionId: id,
        userId,
      })
    ) {
      return NextResponse.json(
        {
          message: "User has already answered this question",
          success: false,
        },
        { status: 409, statusText: "Conflict" },
      );
    }

    const result = await answersCollection.insertOne({
      answer: htmlContent,
      createdAt: new Date().toUTCString(),
      edited: false,
      questionId: id,
      upvotes: 0,
      upvotesHistory: [],
      userId,
      userImage,
      userName,
    });

    return NextResponse.json(
      {
        message: `Answer with id ${result.insertedId} has been successfully created`,
        success: true,
      },
      { status: 201, statusText: "Created" },
    );
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { error: error, success: false },
      { status: 500, statusText: "Internal Server Error" },
    );
  }
}

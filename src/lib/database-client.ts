import { MongoClient, ServerApiVersion } from "mongodb";

import { env } from "@/env/server";

const uri = env.MONGODB_URI;
const options = {
  serverApi: {
    deprecationErrors: true,
    strict: true,
    version: ServerApiVersion.v1,
  },
};

async function connectWithRetry(
  client: MongoClient,
  attempt = 1,
  maxAttempts = 5,
): Promise<MongoClient> {
  const delay = Math.pow(5, attempt) * 1000;

  try {
    await client.connect();
    return client;
  } catch (error) {
    console.error(
      `Error connecting to MongoDB (Attempt ${attempt}/${maxAttempts}):`,
      error,
    );

    if (attempt < maxAttempts) {
      console.log(`Retrying in ${delay / 1000} seconds...`);
      await new Promise((resolve) => setTimeout(resolve, delay));
      return connectWithRetry(client, attempt + 1, maxAttempts);
    }

    console.error(
      `Maximum retry attempts (${maxAttempts}) reached. Connection failed.`,
    );
    throw error;
  }
}

const client = new MongoClient(uri, options);

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = globalThis as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  globalWithMongo._mongoClientPromise ??= connectWithRetry(client);

  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  clientPromise = connectWithRetry(client);
}

export const databaseClient = await clientPromise;

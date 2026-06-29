import { MongoClient, ServerApiVersion } from "mongodb";

if (!process.env.MONGODB_URI) {
  throw new Error('Invalid/Missing environment variable: "MONGODB_URI"');
}

const uri = process.env.MONGODB_URI;
const options = {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
};

async function connectWithRetry(
  client: MongoClient,
  attempt = 1,
  maxAttempts = 5,
): Promise<MongoClient> {
  const delay = Math.pow(5, attempt) * 1000;

  return client.connect().catch((error) => {
    console.error(
      `Error connecting to MongoDB (Attempt ${attempt}/${maxAttempts}):`,
      error,
    );

    if (attempt < maxAttempts) {
      console.log(`Retrying in ${delay / 1000} seconds...`);
      return new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
        connectWithRetry(client, attempt + 1, maxAttempts),
      );
    }

    console.error(
      `Maximum retry attempts (${maxAttempts}) reached. Connection failed.`,
    );
    throw error;
  });
}

async function createClient(): Promise<MongoClient> {
  const client = new MongoClient(uri, options);
  return connectWithRetry(client);
}

let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  const globalWithMongo = global as typeof globalThis & {
    _mongoClientPromise?: Promise<MongoClient>;
  };

  if (!globalWithMongo._mongoClientPromise) {
    globalWithMongo._mongoClientPromise = createClient();
  }

  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  clientPromise = createClient();
}

export const dbClient = await clientPromise;

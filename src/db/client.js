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

let clientPromise;

if (process.env.NODE_ENV === "development") {
  // In development mode, use a global variable so that the value
  // is preserved across module reloads caused by HMR (Hot Module Replacement).
  let globalWithMongo = global;

  if (!globalWithMongo._mongoClientPromise) {
    const client = new MongoClient(uri, options);
    globalWithMongo._mongoClientPromise = client.connect();
  }

  clientPromise = globalWithMongo._mongoClientPromise;
} else {
  // In production mode, it's best to not use a global variable.
  const client = new MongoClient(uri, options);

  // Recursive function attempting MongoDB connection with exponential backoff.
  // Retries until successful, handling errors along the way.
  const connectWithRetry = (attempt = 1, maxAttempts = 5) => {
    const delay = Math.pow(5, attempt) * 1000; // Exponential backoff formula

    return client.connect().catch((error) => {
      console.error(
        `Error connecting to MongoDB (Attempt ${attempt}/${maxAttempts}):`,
        error,
      );

      if (attempt < maxAttempts) {
        console.log(`Retrying in ${delay / 1000} seconds...`);
        // Resolves a Promise after the calculated delay, then retries
        return new Promise((resolve) => setTimeout(resolve, delay)).then(() =>
          connectWithRetry(attempt + 1, maxAttempts),
        );
      } else {
        console.error(
          `Maximum retry attempts (${maxAttempts}) reached. Connection failed.`,
        );
        throw error; // Propagate the error after maximum attempts
      }
    });
  };

  clientPromise = connectWithRetry();
}

async function connectClient() {
  // Connect the client to the server	(optional starting in v4.7)
  const client = await clientPromise;

  // Send a ping to confirm a successful connection
  await client.db("admin").command({ ping: 1 });
  console.log("Pinged your deployment. You successfully connected to MongoDB!");

  // return the connected client
  return client;
}

// Export a module-scoped function to connect a MongoClient everytime its called.
// By doing this in a separate module, the client can be shared across functions.
export default connectClient;

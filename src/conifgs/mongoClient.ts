import { MongoClient } from "mongodb";

const url =
  process.env.MONGODB_URI ||
  "mongodb+srv://amalgenfinity:LPshbbL1U0IS6zQm@cluster0.gwygt.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const dbName = "ai-summit";

let db: any;

export async function connectToDatabase() {
  try {
    if (!db) {
      const client = new MongoClient(url);
      await client.connect();
      db = client.db(dbName);
    }
    console.log("DB Connected sucessfully");
    return db;
  } catch (error) {
    console.log("error", error);
  }
}

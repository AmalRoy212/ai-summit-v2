import { MongoClient } from "mongodb";

const url = process.env.MONGODB_CONNECTION_URI || "";
const dbName = "ai-summit";

let db: any;

export async function connectToDatabase() {
  try {
    if(!url || url === "") return console.log("connection url seems empty please check the env");
    
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

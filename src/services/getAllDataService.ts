import { connectToDatabase } from "../conifgs/mongoClient";

export async function getData(collectionName : string) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection(collectionName); // Name of the collection where data is stored    

    // Retrieve all documents from the MongoDB collection
    const documents = await collection.find().toArray();  // Convert the cursor to an array of documents
    
    return {
      message: `${collectionName} data collected`,
      data: documents // Return the array of documents
    };
  } catch (error) {
    console.error('Error getting data:', error);
    throw new Error('Error getting data');
  }
}

import { connectToDatabase } from "../conifgs/mongoClient";
import { DelegateForm } from "../models/delegateModel";

export async function saveDelegateForm(formData: DelegateForm) {
  try {
    const db = await connectToDatabase();
    const collection = db.collection("delegates"); // Name of the collection where data is stored

    // Insert form data into MongoDB collection
    const result = await collection.insertOne(formData);
    return {
      message: "Form data saved successfully",
      insertedId: result.insertedId,
    };
  } catch (error) {
    console.error("Error saving form data:", error);
    throw new Error("Failed to save form data");
  }
}

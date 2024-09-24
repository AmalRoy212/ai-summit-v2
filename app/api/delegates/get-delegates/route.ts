import { getData } from "@/src/services/getAllDataService";
import { NextResponse } from "next/server";

export async function GET() {
  // Optional: You could implement a GET request to retrieve all users or a specific user.
  try {
    console.log("reached here");
    
    const result = await getData("delegates");
    return NextResponse.json(
      { message: "All data collected", data: result },
      { status: 200 }
    );
  } catch (error) {
    throw new Error("Cannot retrive the delegates data at this movement");
  }
}

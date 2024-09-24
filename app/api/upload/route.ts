import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
  

   console.log(request.body);
   


    // Return a successful response
    return NextResponse.json(
      {
        message: "Form data saved successfully",
        insertedId: "added",
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    // Return an error response if something goes wrong
    return NextResponse.json(
      { error: "Failed to save form data" },
      { status: 500 }
    );
  }
}
import { saveSponsorsForm } from "@/src/services/sponsorsFormService";
import { validateSponsorsFormData } from "@/src/utils/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    // Parse the request body to get form data
    const formData = await request.json();

    // You can validate the data here (Optional)
    // For example, if you have a validation utility
    if (!validateSponsorsFormData(formData)) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    // Call the service to save form data to the database
    const result = await saveSponsorsForm(formData);

    // Return a successful response
    return NextResponse.json(
      {
        message: "Form data saved successfully",
        insertedId: result.insertedId,
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

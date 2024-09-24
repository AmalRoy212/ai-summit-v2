import { saveSpeakersForm } from "@/src/services/speakersFormService";
import { validateSponsorsFormData } from "@/src/utils/validators";
import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    const formData = await request.json();

    if (!validateSponsorsFormData(formData)) {
      return NextResponse.json({ error: 'Invalid data' }, { status: 400 });
    }

    const result = await saveSpeakersForm(formData);

    return NextResponse.json(
      {
        message: "Form data saved successfully",
        insertedId: result.insertedId,
      },
      { status: 201 }
    );
  } catch (error) {
    console.error("Error saving form data:", error);
    return NextResponse.json(
      { error: "Failed to save form data" },
      { status: 500 }
    );
  }
}

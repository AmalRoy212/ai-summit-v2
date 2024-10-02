// pages/api/upload.js
import { storage } from "@/utils/firebaseConfig";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { NextApiRequest, NextApiResponse } from "next";

export const config = {
  api: {
    bodyParser: false, // Disable body parsing to handle raw file uploads
  },
};

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    try {
      console.log(req.body);
      const imageURL = req.body.formData;
      const filename = Date.now().toString() + ".jpg";
      const response = await fetch(imageURL);

      if (!response.ok) {
        return res.status(400).json({ message: "Failed to fetch image from URL" });
      }

      const blob = await response.blob();
      const imageRef = ref(storage, "uploads/" + filename);

      await uploadBytes(imageRef, blob);
      const downloadUrl = await getDownloadURL(imageRef);

      return res.status(200).json({ url: downloadUrl });
    } catch (error : any) {
      console.error("Error uploading file:", error);
      return res.status(500).json({ message: "File upload failed", error: error.message });
    }
  } else {
    return res.status(405).json({ message: "Only POST requests are allowed" });
  }
}

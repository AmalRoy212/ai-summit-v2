// pages/api/test.js
import { connectToDatabase } from '@/src/conifgs/mongoClient';
import { getData } from '@/src/services/getAllDataService';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req : NextApiRequest, res : NextApiResponse) {
  await connectToDatabase();

  // Disable caching
  res.setHeader('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');

  if (req.method === 'GET') {
    try {
      const data = await getData('speakers'); // Fetch the latest data from DB
      res.status(200).json({ success: true, data });
    } catch (error : any) {
      res.status(500).json({ success: false, message: error.message });
    }
  } else {
    res.status(405).json({ success: false, message: 'Method Not Allowed' });
  }
}

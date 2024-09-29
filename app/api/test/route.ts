import { getData } from '@/src/services/getAllDataService';
import type { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    const result = await getData('sample');
    res.setHeader('Cache-Control', 'no-cache, no-store, must-revalidate');
    return res.status(200).json({ message: "All data collected", data: result });
  } catch (error) {
    return res.status(500).json({ error: "Cannot retrieve the data" });
  }
}

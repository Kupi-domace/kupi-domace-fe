import serverAxiosInstance from "config/serverAxiosInstance";
import { NextApiRequest, NextApiResponse } from "next";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    if (req.method === "GET") {
      // Fetch translations from your backend API
      const translations = await serverAxiosInstance.get(
        `translations?language=${req.query.locale}`
      );
      // Send the translations as JSON response
      res.status(200).json(translations.data);
    } else {
      // Handle any other HTTP method
      res.setHeader("Allow", ["GET"]);
      res.status(405).json({ message: `Method ${req.method} Not Allowed` });
    }
  } catch (error) {
    console.error("Error fetching translations:", error);
    res.status(500).json({ error: "Error fetching translations" });
  }
};

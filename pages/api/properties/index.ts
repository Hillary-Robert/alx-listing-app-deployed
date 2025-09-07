// pages/api/properties/index.ts
import type { NextApiRequest, NextApiResponse } from "next";
import {PROPERTYLISTINGSAMPLE} from "@/constants/index"

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "GET") {
    return res.status(200).json(PROPERTYLISTINGSAMPLE);
  }

  res.setHeader("Allow", ["GET"]);
  res.status(405).end(`Method ${req.method} Not Allowed`);
}

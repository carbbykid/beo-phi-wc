import Email from "models/Email";
import { NextApiRequest, NextApiResponse } from "next";
import db from "../../util/mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;
  db.connect();
  if (method === "GET") {
    try {
      const emails = await Email.find();
      res.status(200).json(emails);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const email = await Email.create(body);
      res.status(201).json(email);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

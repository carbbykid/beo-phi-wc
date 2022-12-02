import Setting from "models/Setting";
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
      const setting = await Setting.find();
      res.status(200).json(setting);
    } catch (error) {
      res.status(500).json(error);
    }
  }
  if (method === "POST") {
    try {
      const setting = await Setting.create(body);
      res.status(201).json(setting);
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

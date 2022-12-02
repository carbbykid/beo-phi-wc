import ResultMatch from "models/ResultMatch";
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
      const resultsMatch = await ResultMatch.find().sort({ id: -1 });
      res.status(200).json(resultsMatch);
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "POST") {
    try {
      const haveBattle = await ResultMatch.find({ id: body.id });
      if (haveBattle.length !== 0) {
        res.status(500).json({ message: "Đã tạo rồi nhé!" });
        return;
      } else {
        const resultMatch = await ResultMatch.create(body);
        console.log("id:", resultMatch._id);
        res.status(201).json(resultMatch);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }

  if (method === "DELETE") {
    console.log("call delete");
    try {
      console.log("id:", body._id);
      const idDeleted = await ResultMatch.deleteOne({ _id: body._id });
      console.log("ideleted", idDeleted);
      res.status(201).json(idDeleted);
    } catch (error) {
      console.log("error");
      res.status(500).json(error);
    }
  }
}

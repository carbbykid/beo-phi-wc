import ResultMatch from "models/ResultMatch";
import { NextApiRequest, NextApiResponse } from "next";
import dbConnect from "../../util/mongodb";
export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse,
) {
  const { method, body } = req;
  dbConnect();
  if (method === "GET") {
    try {
      res.status(200).json({ hello: "helloo" });
      // const resultsMatch = await ResultMatch.find();
      // res.status(200).json(resultsMatch);
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
        res.status(201).json(resultMatch);
      }
    } catch (error) {
      res.status(500).json(error);
    }
  }
}

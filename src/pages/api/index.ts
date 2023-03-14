// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  title: string;
  promo: string;
};

const text = {
  title: "SPORTS NEW CUSTOMER OFFER",
  promo: "Get up to \u00A310 in free bets",
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json(text);
}

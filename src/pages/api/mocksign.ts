// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  username: string;
  password: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  const info: Data = req.body;
  try {
    const response = await fetch(
      "https://fn-uks-dev-eng-fe-mock-svc.azurewebsites.net/api/sign-in"
    );
    const details = await response.json();
    return res.end(JSON.stringify(details));
  } catch (error) {
    console.log(error);
  }
}

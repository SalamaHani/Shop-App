import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  message: string;
  token?: string;
};

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method not allowed" });
  }

  const { email, password } = req.body;

  // Fake check (replace with DB lookup or Prisma)
  if (email === "test@example.com" && password === "123456") {
    const token = "fake-jwt-token"; // Replace with real JWT
    return res.status(200).json({ message: "Login successful", token });
  } else {
    return res.status(401).json({ message: "Invalid credentials" });
  }
}

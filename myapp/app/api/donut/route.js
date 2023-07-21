// api/donut/index.js
import db from "@/lib/db";
import { verifyJwtToken, verifyToken } from "@/lib/jwt";
import Donut from "@/models/Donut";

export async function POST(req) {
  await db.connect();

  const accessToken = req.headers.get("authorization");
  const token = accessToken.split(" ")[1];

  const decodedToken = verifyJwtToken(token);

  if (!accessToken || !decodedToken) {
    return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 });
  }

  try {
    const newDonut = await Donut.create({ ...req.body });


    return new Response(JSON.stringify(newDonut), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

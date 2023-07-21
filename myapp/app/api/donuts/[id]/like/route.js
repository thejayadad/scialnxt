import db from "@/lib/db";
import Users from "@/models/Users";
import Donuts from "@/models/Donuts";
import { verifyJwtToken, verifyToken } from "@/lib/jwt";

export async function PUT(req) {
  await db.connect();

  const accessToken = req.headers.get("authorization");
  if (!accessToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (missing authorization header)" }),
      { status: 403 }
    );
  }

  const token = accessToken.split(" ")[1];
  const decodedToken = verifyJwtToken(token);

  if (!decodedToken) {
    return new Response(
      JSON.stringify({ error: "unauthorized (wrong or expired token)" }),
      { status: 403 }
    );
  }

  try {
    const id = req.params;
    const userId = req.body
    const donut = await Donuts.findById(id)
    const isLiked = donut.likes.get(userId)

    if (isLiked) {
        donut.likes.delete(userId);
      } else {
        donut.likes.set(userId, true);
      }
  
      const updatedDonut = await Donuts.findByIdAndUpdate(
        id,
        { likes: donut.likes },
        { new: true }
      );


    return new Response(JSON.stringify(updatedDonut), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

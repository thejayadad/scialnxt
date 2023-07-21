import db from "@/lib/db";
import Users from "@/models/Users";
import Donuts from "@/models/Donuts";
import { verifyJwtToken, verifyToken } from "@/lib/jwt";

export async function POST(req) {
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
    // const body = await req.json()
    // const newBlog = await Blog.create(body)

    const { userId, description, picturePath } = req.body;
    const user = await Users.findById(userId);
    const newDonut = new Donuts({
      userId,
      firstName: user.firstName,
      lastName: user.lastName,
      location: user.location,
      description,
      userPicturePath: user.picturePath,
      picturePath,
      likes: {},
      comments: [],
    });
    await newDonut.save();

    const donut = await Donuts.find();

    return new Response(JSON.stringify(donut), { status: 201 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

import db from "@/lib/db";
import User from "@/models/User";

export async function GET(req, ctx) {
  await db.connect();

  const id = ctx.params.id;

  try {
    const user = await User.findById(id);

    if (!user) {
      // If the user is not found, return a 404 response
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }

    const { password, ...userDetails } = user._doc;
    return new Response(JSON.stringify(userDetails), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify(null), { status: 500 });
  }
}

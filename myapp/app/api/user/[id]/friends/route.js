import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import User from "@/models/User";

export async function GET(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    try {

        const user = await User.findById(id)

        const userFriends = await Promise.all(
            user.followings.map((friendId) => {
              return User.findById(friendId).select("-password");
            })
          );

          if (userFriends.length > 0) {
            return new Response(JSON.stringify(userFriends), { status: 200 })
        } else {
            throw new Error("You have no friends");
          }
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}


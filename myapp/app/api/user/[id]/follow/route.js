import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import User from "@/models/User";

export async function PUT(req, ctx) {
    await db.connect();
  
    const id = ctx.params.id;
  
    const accessToken = req.headers.get("authorization");
    const token = accessToken.split(" ")[1];
  
    console.log(token);
  
    const decodedToken = verifyJwtToken(token);
  
    if (!accessToken || !decodedToken) {
      return new Response(
        JSON.stringify({ error: "unauthorized (wrong or expired token)" }),
        { status: 403 }
      );
    }
  
    try {
      const currentUser = await User.findById(decodedToken._id);
      const friend = await User.findById(id);
  
      if (!friend) {
        return new Response(JSON.stringify({ error: "Friend not found" }), {
          status: 404,
        });
      }
  
      // Check if the current user is already following the friend
      const isFollowing = currentUser.followings.includes(friend._id);
  
      if (isFollowing) {
        // Unfollow the friend
        currentUser.followings = currentUser.followings.filter(
          (id) => id.toString() !== friend._id.toString()
        );
      } else {
        // Follow the friend
        currentUser.followings.push(friend._id);
      }
  
      await currentUser.save();
  
      return new Response(JSON.stringify({ msg: "Updated!" }), { status: 200 });
    } catch (error) {
      return new Response(
        JSON.stringify({ error: "Something went wrong" }),
        { status: 500 }
      );
    }
  }
  
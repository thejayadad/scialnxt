

import db from "@/lib/db";
import Users from "@/models/Users";

export async function GET(req, ctx) {
    await db.connect()
    const  id  = ctx.params.id;
    const friendId = ctx.params.id;

    try {
        const user = await Users.findById(id)
        const friend = await Users.findById(friendId)

        if (user.friends.includes(friendId)) {
            user.friends = user.friends.filter((id) => id !== friendId);
            friend.friends = friend.friends.filter((id) => id !== id);
          } else {
            user.friends.push(friendId);
            friend.friends.push(id);
          }
          await user.save();
          await friend.save();
      
          const friends = await Promise.all(
            user.friends.map((id) => Users.findById(id))
          );
          const formattedFriends = friends.map(
            ({ _id, firstName, lastName, occupation, location, picturePath }) => {
              return { _id, firstName, lastName, occupation, location, picturePath };
            }
          );


        return new Response(JSON.stringify(formattedFriends), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
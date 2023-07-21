

import db from "@/lib/db";
import Users from "@/models/Users";

export async function GET(req, ctx) {
    await db.connect()
    const  id  = ctx.params.id;

    try {
        const user = await Users.findById(id)
        return new Response(JSON.stringify(user), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
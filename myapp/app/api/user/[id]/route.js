import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import User from "@/models/User";


export async function GET(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    try {
        const user = await User.findById(id)
        const {password, ...others} = user._doc;
        return new Response(JSON.stringify(others), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}

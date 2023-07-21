

import db from "@/lib/db";
import Donuts from "@/models/Donuts";

export async function GET(req) {
    await db.connect()
    const  userId  = req.params;

    try {

        const donuts = await Donuts.find({userId})

        return new Response(JSON.stringify(donuts), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
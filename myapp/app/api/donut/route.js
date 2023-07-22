import db from "@/lib/db";
import { verifyJwtToken, verifyToken } from '@/lib/jwt'
import Donuts from "@/models/Donuts";
import Users from "@/models/Users";


export async function POST(req) {
    await db.connect()

    const accessToken = req.headers.get("authorization")
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const { userId, description, picturePath } = req.body;
        const user = await Users.findById(userId);
        const newBlog = await Donuts.create({
            userId,
            firstName: user.firstName,
            lastName: user.lastName,
            location: user.location,
            description,
            userPicturePath: user.picturePath,
            picturePath,
            likes: {},
            comments: [],
        })
        await newBlog.save();

        const post = await Donuts.find();

        return new Response(JSON.stringify(post), { status: 201 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }
}
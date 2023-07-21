import db from "@/lib/db";
import { verifyJwtToken } from "@/lib/jwt";
import User from "@/models/User";


export async function GET(req, res) {
    await db.connect()


    try {
        const user = await User.findById(req.params.id)
        const {password, ...others} = user._doc;
        return res.status(200).json(others);
    } catch (error) {
        return res.status(500).json(error.message);
    }
}

export async function PUT(req, ctx) {
    await db.connect()

    const id = ctx.params.id
    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(" ")[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const body = await req.json()
        const user = await User.findById(id)

        if (user?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only author can update their profile' }), { status: 403 })
        }

        const updatedUser = await User.findByIdAndUpdate(id, { $set: { ...body } }, { new: true })

        return new Response(JSON.stringify(updatedUser), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 })
    }

}

export async function DELETE(req, ctx) {
    await db.connect()

    const id = ctx.params.id

    const accessToken = req.headers.get('authorization')
    const token = accessToken.split(' ')[1]

    const decodedToken = verifyJwtToken(token)

    if (!accessToken || !decodedToken) {
        return new Response(JSON.stringify({ error: "unauthorized (wrong or expired token)" }), { status: 403 })
    }

    try {
        const user = await User.findById(id)
        if (user?._id.toString() !== decodedToken._id.toString()) {
            return new Response(JSON.stringify({ msg: 'Only author can delete their profile' }), { status: 403 })
        }

        await User.findByIdAndDelete(id)

        return new Response(JSON.stringify({msg: 'Successfully deleted user'}), {status: 200})
    } catch (error) {
        return new Response(JSON.stringify(null), { status: 500 }) 
    }
}


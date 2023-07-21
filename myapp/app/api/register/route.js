import db from "@/lib/db"
import bcrypt from 'bcrypt'
import Users from "@/models/Users"


export async function POST(req){
    try {
        await db.connect()

        const {firstName, lastName, picturePath, friends, location, occupation, email, password: pass} = await req.json()

        const isExisting = await Users.findOne({email})

        if(isExisting){
            throw new Error("User already exists")
        }

        const hashedPassword = await bcrypt.hash(pass, 10)

        const newUser = await Users.create({
            
            firstName, lastName, email, password: hashedPassword, picturePath,
            friends,
            location,
            occupation})

        const {password, ...user} = newUser._doc

        return new Response(JSON.stringify(user), {status: 201})
    } catch (error) {
        return new Response(JSON.stringify(error.message), {status: 500})
    }
}
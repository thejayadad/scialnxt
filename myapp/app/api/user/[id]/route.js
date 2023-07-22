import Donuts from "@/models/Donuts";
import db from "@/lib/db";

export const GET = async (request, { params }) => {
    try {
      await db.connect()
  
      const userDonuts = await Donuts.find({ userId: params.id })
  
      return new Response(JSON.stringify(userDonuts), { status: 200 });
    } catch (error) {
      return new Response("Failed to fetch all prompts", { status: 500 });
    }
  };
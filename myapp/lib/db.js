import mongoose from 'mongoose';
import Users from '@/models/Users';
import Donuts from '@/models/Donuts';
import {users, donuts} from "../lib/data"


const connection = {};



async function connect() {
    if (connection.isConnected) {
        return;
    }
    if (mongoose.connections.length > 0) {
        connection.isConnected = mongoose.connections[0].readyState;
        if (connection.isConnected === 1) {
            // Users.insertMany(users)
            // console.log("db going")
            // Donuts.insertMany(donuts)
 
            return;
        }
        await mongoose.disconnect();
    }
    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readyState;
}

async function disconnect() {
    if (connection.isConnected) {
        if (process.env.NODE_ENV === 'production') {
            await mongoose.disconnect();
            connection.isConnected = false;
        }
    }
}


  
const db = { connect, disconnect };
export default db;
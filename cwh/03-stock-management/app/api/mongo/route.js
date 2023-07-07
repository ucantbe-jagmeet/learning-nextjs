import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request){
    
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri)
        try {
            const database = client.db('03-stock-management');
            const movies = database.collection('inventory');
            
            const query = {}
            const movie = await movies.find(query).toArray();
            console.log(movie);
            return NextResponse.json({ "a":34, movie})
        } finally  {
            await client.close()
        }
}
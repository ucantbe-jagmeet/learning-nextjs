import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request){
    
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri)
        try {
            const database = client.db('stock');
            const inventary = database.collection('inventory');
            const query = {}
            const allProducts = await inventary.find(query).toArray();
            return NextResponse.json({ allProducts})
        } finally  {
            await client.close()
        }

}

export async function POST(request){
    let body = await request.json()
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri)
        try {
            const database = client.db('03-stock');
            const inventary = database.collection('inventory');
            const product = await inventary.insertOne(body);
            return NextResponse.json({ product , ok:true})
        } finally  {
            await client.close()
        }

}
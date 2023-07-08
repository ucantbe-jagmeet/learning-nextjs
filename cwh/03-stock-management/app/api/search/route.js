import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function GET(request){
    const query = request.nextUrl.searchParams.get('query')
    const uri = process.env.MONGO_URI;
    const client = new MongoClient(uri)
        try {
            const database = client.db('03-stock');
            const inventory = database.collection('inventory');

            const products = await inventory.aggregate([{
                $match:{
                    $or:[
                        {slug: {$regex: query, $options:'i'}},
                    ]
                }
            }]).toArray();
            return NextResponse.json({ products, success:true})
        } finally  {
            await client.close()
        }

}

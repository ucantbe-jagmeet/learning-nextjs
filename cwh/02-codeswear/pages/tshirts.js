/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Product from '../models/Product'
import mongoose from "mongoose";

const Tshirts = ({ products}) => {
  return (
    <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center">
             { products.map((product)=>{
                  const { img, _id, price,  title , category, slug,color, size} = product
              return <>
              <Link href={`/product/${slug}`} className="lg:w-1/4 md:w-1/2 p-4 w-full" key={_id}>
                    <div className='m-3 shadow-md p-3' >
                      <div className="block relative rounded overflow-hidden">
                        <img alt="ecommerce" className="h-[30vh] mx-auto md:h-[36vh] block" src={img} />
                      </div>
                      <div className="mt-4">
                        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                        <h2 className="text-gray-900 title-font text-lg font-medium">{title} </h2>
                        <p className="mt-1">₹{price}</p>
                        <p className="mt-1 uppercase">{size} ({color})</p>
                      </div>
                    </div>
              </Link> 
              </>
             })}
            </div>
          </div>
    </section>

    </div>
  )
}

export default Tshirts

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  
  // let products = await Product.find({category:'tshirt'})  will do after some time
  let products = await Product.find()

  return {
    props: {products : JSON.parse(JSON.stringify(products))}
  }
}
/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import Product from '../models/Product'
import mongoose from "mongoose";

const Stickers = ({ products}) => {
  return (
    <div>
        <section className="text-gray-600 body-font">
          <div className="container px-5 py-24 mx-auto">
            <div className="flex flex-wrap justify-center">
              { Object.keys(products).length === 0 && <p className='font-semibold'> Sorry all the stickers Are out of Stock, Stay Tuned...!!!!!<span className='text-3xl'>🥲</span></p> }
             { Object.keys(products).map((item)=>{
                  const { img, _id, price,  title , category, slug, color, size} = products[item]
              
              return <Link href={`/product/${slug}`} className="lg:w-1/4 md:w-1/2 p-4 w-full" key={_id}>
                      <div className='m-3 shadow-md p-3 hover:shadow-lg' >
                          <div className="block relative rounded overflow-hidden">
                            <img alt="ecommerce" className="h-[30vh] mx-auto md:h-[36vh] block" src={img} />
                          </div>
                          <div className="mt-4">
                            <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{category}</h3>
                            <h2 className="text-gray-900 title-font text-lg font-medium">{title} </h2>
                            <p className="mt-1">₹{price}</p>
                            <div className="mt-1 ">
                              { products[item].size.includes('S') && <span className='border border-gray-300 px-2 mx-1'>S</span>}
                              { products[item].size.includes('M') && <span className='border border-gray-300 px-2 mx-1'>M</span>}
                              { products[item].size.includes('L') && <span className='border border-gray-300 px-2 mx-1'>L</span>}
                              { products[item].size.includes('XL') && <span className='border border-gray-300 px-2 mx-1'>XL</span>}
                              { products[item].size.includes('XXL') && <span className='border border-gray-300 px-2 mx-1'>XXL</span>}
                            </div>
                            <div className="mt-1 ">
                              { products[item].color.includes('red') &&<button className="border-2 border-gray-300 ml-1 bg-red-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                              { products[item].color.includes('blue') &&<button className="border-2 border-gray-300 ml-1 bg-blue-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                              { products[item].color.includes('black') &&<button className="border-2 border-gray-300 ml-1 bg-black rounded-full w-6 h-6 focus:outline-none"></button>}
                              { products[item].color.includes('white') &&<button className="border-2 border-gray-300 ml-1 bg-white rounded-full w-6 h-6 focus:outline-none"></button>}
                              { products[item].color.includes('green') &&<button className="border-2 border-gray-300 ml-1 bg-green-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                              { products[item].color.includes('yellow') &&<button className="border-2 border-gray-300 ml-1 bg-yellow-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                              { products[item].color.includes('purple') &&<button className="border-2 border-gray-300 ml-1 bg-purple-500 rounded-full w-6 h-6 focus:outline-none"></button>}
                            </div>

                          </div>
                      </div>
                 </Link> 
               })}
            </div>
          </div>
    </section>

    </div>
  )
}

export default Stickers

export async function getServerSideProps(context){
  if(!mongoose.connections[0].readyState){
    await mongoose.connect(process.env.MONGO_URI)
  }
  
  let products = await Product.find({category:'sticker'})
  let stickers = {}
  for( let item of products){
      if (item.title in stickers){
              if(!stickers[item.title].color.includes(item.color) && item.availableQty > 0){
                  stickers[item.title].color.push(item.color)
              }
              if(!stickers[item.title].size.includes(item.size) && item.availableQty > 0){
                  stickers[item.title].size.push(item.size)
              }
      }
      else{
          stickers[item.title] = JSON.parse(JSON.stringify(item))
          if( item.availableQty > 0){
              stickers[item.title].color =  [item.color]
              stickers[item.title].size =  [item.size]
          }
      }
  }
  

  return {
    props: {products : JSON.parse(JSON.stringify(stickers))}
  }
}
import React from 'react'
import Link from 'next/link'
import { AiFillCloseCircle , AiFillPlusCircle , AiFillMinusCircle} from "react-icons/ai"

const Checkout = ({ cart, addToCart, removeFromCart, clearCart, subTotal}) => {
  return (
        <div className='container px-10 flex flex-col'>
        <h1 className='font-bold text-2xl my-8 text-center'>Checkout</h1>
        <h2 className='font-semibold text-xl'>1. Delivery Details</h2>
            <div className='flex my-4'>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                      <label htmlFor="name" className="leading-7 text-sm text-gray-600">Name</label>
                      <input type="text" id="name" name="name" className="w-full bg-white rounded border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                      <label htmlFor="email" className="leading-7 text-sm text-gray-600">Email</label>
                      <input type="email" id="email" name="email" className="w-full bg-white rounded border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
            </div>


            <div className="px-2 w-full">
                <div className=" mb-4">
                  <label htmlFor="address" className="leading-7 text-sm text-gray-600">Address</label>
                  
                  <textarea name="address" id="address" cols="30" rows="2" className="w-full bg-white rounded border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"></textarea>
                </div>
            </div>


              <div className='flex my-4'>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                      <label htmlFor="phone" className="leading-7 text-sm text-gray-600">Phone</label>
                      <input type="phone" id="phone" name="phone" className="w-full bg-white rounded border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
                <div className="px-2 w-1/2">
                    <div className=" mb-4">
                      <label htmlFor="city" className="leading-7 text-sm text-gray-600">City</label>
                      <input type="text" id="city" name="city" className="w-full bg-white rounded border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                    </div>
                </div>
            </div>


            <div className='flex my-5'>
              <div className="px-2 w-1/2">
                  <div className=" mb-4">
                    <label htmlFor="state" className="leading-7 text-sm text-gray-600">State</label>
                    <input type="text" id="state" name="state" className="w-full bg-white rounded border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
              </div>
              <div className="px-2 w-1/2">
                  <div className=" mb-4">
                    <label htmlFor="pincode" className="leading-7 text-sm text-gray-600">Pincode</label>
                    <input type="text" id="pincode" name="pincode" className="w-full bg-white rounded border border-pink-300 focus:border-pink-500 focus:ring-2 focus:ring-pink-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
                  </div>
              </div>
          </div>


          <h2 className='font-semibold text-xl'>2. Review Cart Items</h2>

          <div className="sideCart h-auto bg-pink-100 py-5 mt-5 px-8 ">
             <ol className='list-decimal font-semibold'>
              { (Object.keys(cart).length ==0 )&& <div className='my-4'> No Items present in the cart</div>}
                  {Object.keys(cart).map((k)=>{
                    return <li key={k}>
                          <div className='flex my-5 items-center '>
                            <div className='font-semibold capitalize text-md'>
                                {cart[k].name}
                            </div>
                            <div className=' font-semibold flex text-lg  items-center justify-center ml-4 '>
                              <AiFillMinusCircle className='mx-1  text-pink-500 cursor-pointer' onClick={()=>{
                                removeFromCart(k, 1, cart[k].price, cart[k].name , cart[k].size, cart[k].variant )
                              }}/>
                              {cart[k].qty}
                              <AiFillPlusCircle className='mx-1  text-pink-500 cursor-pointer' onClick={()=>{
                                addToCart(k, 1, cart[k].price, cart[k].name , cart[k].size, cart[k].variant )
                              }}/>
                            </div>
                          </div>
                      </li>
                })}
            </ol>
                <div className='font-semibold mb-4'> Subtotal: ₹{subTotal}</div>
                <Link href="/checkout"><button className="flex mx-auto text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 tracking-wide rounded text-sm" >Pay ₹ {subTotal} </button></Link>

          </div>
    </div>
  )
}

export default Checkout
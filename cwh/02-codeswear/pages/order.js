/* eslint-disable @next/next/no-img-element */
import React from 'react'

const Order = ({subTotal,cart}) => {
  return (
    <section className="text-gray-600 body-font overflow-hidden">
    <div className="container px-5 py-10 mx-auto">
      <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <div className="lg:w-1/2 w-full lg:pr-10 lg:py-6 mb-6 lg:mb-0">
          <h2 className="text-sm title-font text-gray-500 tracking-widest"> CODESWEAR.COM </h2>
          <h1 className="text-gray-900 text-3xl title-font font-medium my-4">Order Id: #006575</h1>
         
          <p className="leading-relaxed mb-4">Your Order has been successfully placed</p>

          <div className="flex mb-4">
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 ">Item Description</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-center">Quantity</a>
          <a className="flex-grow border-b-2 border-gray-300 py-2 text-lg px-1 text-pink-500 text-end">Total</a>
        </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Wear the code (Xl/Black)</span>
            <span className="ml-auto text-gray-900">1</span>
            <span className="ml-auto text-gray-900">499</span>
          </div>
          <div className="flex border-t border-gray-200 py-2">
            <span className="text-gray-500">Wear the code (Xl/Black)</span>
            <span className="ml-auto text-gray-900">1</span>
            <span className="ml-auto text-gray-900">499</span>
          </div>
          <div className="flex border-t border-b mb-6 border-gray-200 py-2">
            <span className="text-gray-500">Wear the code (Xl/Black)</span>
            <span className="ml-auto text-gray-900">1</span>
            <span className="ml-auto text-gray-900">499</span>
          </div>
          <div className="flex justify-between flex-col-reverse  sm:flex-row">
            <button className=" text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 rounded">Track Order</button>
            <span className="title-font font-medium text-2xl text-gray-900 ml-auto sm:ml-0 my-2 sm:my-0">Subtotal: ₹{subTotal}</span>
          </div>
        </div>
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-60 object-cover object-center rounded" src="https://dummyimage.com/400x400"/>
      </div>
    </div>
  </section>
  )
}

export default Order

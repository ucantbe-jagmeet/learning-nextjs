import React, { useRef } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle , AiFillPlusCircle , AiFillMinusCircle} from "react-icons/ai"

const Navbar = () => {

const ref = useRef()
  const toggleCart = ()=>{
      if (ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-full')
        ref.current.classList.add('translate-x-0')
      } 
      else if (!ref.current.classList.contains('translate-x-full')){
        ref.current.classList.remove('translate-x-0')
        ref.current.classList.add('translate-x-full')
      } 
  }

  return (
    <div className='flex justify-center flex-col items-center md:flex-row md:justify-start  shadow-md py-2'> 
         <div className="logo mx-5">
            <Link href="/"> 
                <Logo/>
            </Link>
         </div>
         <div className="nav">
            <ul className='flex items-center space-x-5 font-bold text-sm md:text-md'>
                <Link href="/tshirts"><li>Tshirts</li></Link>
                <Link href="/hoodies"><li>Hoodies</li></Link>
                <Link href="/stickers"><li>Stickers</li></Link>
                <Link href="/mugs"><li>Mugs</li></Link>
            </ul>
         </div>
         <div  onClick={toggleCart} className="cart absolute right-5 top-3 cursor-pointer" >
             <AiOutlineShoppingCart className='text-xl md:text-2xl text-pink-600'/>
         </div>

        <div ref={ref} className="sideCart w-72 h-full absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full z-10">
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span onClick={toggleCart} className='absolute top-3 right-3 cursor-pointer text-2xl text-pink-500' >
            <AiFillCloseCircle/>
          </span>
            <ol className='list-decimal font-semibold'>
              <li>
              <div className='flex my-5'>
                  <div className='w-2/3 font-semibold'>Tshirt - Wear the code 
                  </div>
                  <div className='w-1/3 font-semibold flex items-center justify-center '>
                    <AiFillMinusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                      1
                    <AiFillPlusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                  </div>
              </div>
              </li>
              <li>
              <div className='flex my-5'>
                  <div className='w-2/3 font-semibold'>Tshirt - Wear the code 
                  </div>
                  <div className='w-1/3 font-semibold flex items-center justify-center '>
                    <AiFillMinusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                      1
                    <AiFillPlusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                  </div>
              </div>
              </li>
              <li>
              <div className='flex my-5'>
                  <div className='w-2/3 font-semibold'>Tshirt - Wear the code 
                  </div>
                  <div className='w-1/3 font-semibold flex items-center justify-center '>
                    <AiFillMinusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                      1
                    <AiFillPlusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                  </div>
              </div>
              </li>
              <li>
              <div className='flex my-5'>
                  <div className='w-2/3 font-semibold'>Tshirt - Wear the code 
                  </div>
                  <div className='w-1/3 font-semibold flex items-center justify-center '>
                    <AiFillMinusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                      1
                    <AiFillPlusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                  </div>
              </div>
              </li>
              <li>
              <div className='flex my-5'>
                  <div className='w-2/3 font-semibold'>Tshirt - Wear the code 
                  </div>
                  <div className='w-1/3 font-semibold flex items-center justify-center '>
                    <AiFillMinusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                      1
                    <AiFillPlusCircle className='mx-1 text-lg text-pink-500 cursor-pointer'/>
                  </div>
              </div>
              </li>
            </ol>
         <div className="flex">
             <button className="flex mx-auto text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">Checkout</button>
              <button className="flex mx-auto  text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
         </div>
          </div>
    </div>
  )
}

export default Navbar
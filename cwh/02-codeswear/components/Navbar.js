import React from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { AiOutlineShoppingCart} from "react-icons/ai"

const Navbar = () => {
  return (
    <div className='flex justify-center flex-col items-center md:flex-row md:justify-start py-2'> 
         <div className="logo mx-5">
            <Logo/>
         </div>
         <div className="nav">
            <ul className='flex items-center space-x-2 font-bold'>
                <Link href="/tshirts"><li>Tshirts</li></Link>
                <Link href="/hoodies"><li>Hoodies</li></Link>
                <Link href="/stickers"><li>Stickers</li></Link>
                <Link href="/mugs"><li>Mugs</li></Link>
            </ul>
         </div>
         <div className="cart absolute right-5 top-3 ">
             <AiOutlineShoppingCart className='text-xl md:text-2xl text-pink-600'/>
         </div>
    </div>
  )
}

export default Navbar
import React, { useRef } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle , AiFillPlusCircle , AiFillMinusCircle} from "react-icons/ai"
import { MdAccountCircle} from "react-icons/md"

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {

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
    <div className='flex justify-center flex-col items-center md:flex-row md:justify-start  shadow-md py-2 sticky top-0 z-10 bg-white'> 
         <div className="logo mx-5">
            <Link href="/"> 
                <Logo/>
            </Link>
         </div>
         <div className="nav mt-1 tracking-wider">
            <ul className='flex items-center space-x-5 font-bold text-sm md:text-md '>
                <Link href="/tshirts"><li className='hover:text-pink-600'>Tshirts</li></Link>
                <Link href="/hoodies"><li className='hover:text-pink-600'>Hoodies</li></Link>
                <Link href="/stickers"><li className='hover:text-pink-600'>Stickers</li></Link>
                <Link href="/mugs"><li className='hover:text-pink-600'>Mugs</li></Link>
            </ul>
         </div>
         <div className="cart absolute justify-center right-5 top-3 cursor-pointer flex gap-4" >
		 	<Link href="/login">
			 	<MdAccountCircle className='text-xl md:text-2xl ' />
			</Link>
             <AiOutlineShoppingCart className='text-xl md:text-2xl '  onClick={toggleCart} />
         </div>

        <div ref={ref} className="sideCart w-72 h-[100vh] absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full shadow-l-">
          <h2 className='font-bold text-xl text-center'>Shopping Cart</h2>
          <span onClick={toggleCart} className='absolute top-3 right-3 cursor-pointer text-2xl text-pink-500' >
            <AiFillCloseCircle/>
          </span>
            <ol className='list-decimal font-semibold'>
			{ (Object.keys(cart).length ==0 )&& <div className='my-4'> No Items present in the cart</div>}
              {Object.keys(cart).map((k)=>{

				return <li key={k}>
					<div className='flex my-5'>
						<div className='w-2/3 font-semibold'>{cart[k].name} ({cart[k].size}/{cart[k].variant})
						</div>
						<div className='w-1/3 font-semibold flex items-center justify-center '>
							<AiFillMinusCircle className='mx-1 text-lg text-pink-500 cursor-pointer' onClick={()=>{
								removeFromCart(k, 1, cart[k].price, cart[k].name , cart[k].size, cart[k].variant )
							}}/>
							{cart[k].qty}
							<AiFillPlusCircle className='mx-1 text-lg text-pink-500 cursor-pointer' onClick={()=>{
								addToCart(k, 1, cart[k].price, cart[k].name , cart[k].size, cart[k].variant )
							}}/>
						</div>
					</div>
              </li>
			  })}
            </ol>
			  <div className='font-semibold my-2'> Subtotal: ₹{subTotal}</div>
			<div className="flex mt-5">
				<Link href="/checkout"><button className="flex mx-auto text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm" >Checkout</button></Link>
				<button onClick={clearCart} className="flex mx-auto  text-white bg-pink-500 border-0 py-1 px-6 focus:outline-none hover:bg-pink-600 rounded text-sm">Clear Cart</button>
			</div>
          </div>
    </div>
  )
}

export default Navbar
import React, { useRef, useState } from 'react'
import Logo from './Logo'
import Link from 'next/link'
import { AiOutlineShoppingCart, AiFillCloseCircle , AiFillPlusCircle , AiFillMinusCircle} from "react-icons/ai"
import { MdAccountCircle} from "react-icons/md"

const Navbar = ({ user,cart, addToCart, removeFromCart, clearCart, subTotal,logout }) => {

  const [dropdown, setDropdown] = useState(false);

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
         <div className="logo mr-auto md:mx-5 ">
            <Link href="/"> 
                <Logo/>
            </Link>
         </div>
         <div className="nav mt-1 tracking-wider">
            <ul className='flex items-center space-x-5 font-bold text-sm md:text-md '>
                <li className='hover:text-pink-600'> <Link href="/tshirts">Tshirts</Link></li>
                <li className='hover:text-pink-600'> <Link href="/hoodies">Hoodies</Link></li>
                <li className='hover:text-pink-600'> <Link href="/mugs">Mugs</Link></li>
                <li className='hover:text-pink-600'> <Link href="/stickers">Stickers</Link></li>
            </ul>
         </div>
         <div className="cart absolute items-center justify-center right-5 top-3 cursor-pointer flex gap-4" >

         
          <div onClick={()=>setDropdown(!dropdown)}>
          {
              dropdown &&  ( <div className="absolute right-10 bg-pink-100 py-5 top-7 rounded-md px-5 w-32 shadow-xl" >
                  <ul className='font-semibold text-gray-600'>
                    <Link href='/myaccount'>
                      <li className='py-2 text-sm hover:text-pink-500'>My Account</li>
                    </Link>
                    <Link href='/orders'>
                      <li className='py-2 text-sm hover:text-pink-500'>Orders</li>
                    </Link>
                    <a>
                      <li onClick={logout} className='py-2 text-sm hover:text-pink-500'>Logout</li>
                    </a>
                   
                  </ul>
              </div>)

            }
            { user.value &&  <MdAccountCircle className='text-xl md:text-2xl '/>}
          </div>

            { !user.value &&  <Link href="/login">
                  <button className='bg-pink-600 px-3 py-1 rounded-md text-white text-sm' >Login</button>
              </Link>   
            }
             <AiOutlineShoppingCart className='text-xl md:text-2xl ' onClick={toggleCart} />
         </div>
        


        <div ref={ref} className="sideCart w-72 h-[100vh] overflow-y-scrool absolute top-0 right-0 bg-pink-100 py-10 px-8 transform transition-transform translate-x-full">
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
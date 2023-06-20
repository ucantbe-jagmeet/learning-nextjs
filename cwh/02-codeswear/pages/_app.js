import { useEffect, useState } from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import '../styles/globals.css'
import { useRouter } from 'next/router'

function MyApp({ Component, pageProps }) {

  const [cart, setCart] = useState({});
  const [subTotal, setSubTotal] = useState(0);
  const router = useRouter()
  useEffect(()=>{
    try {
      if(localStorage.getItem("cart")){
      setCart(JSON.parse(localStorage.getItem("cart")))
      saveCart(JSON.parse(localStorage.getItem("cart")))
      } 
    } catch (error) {
      console.log(error);
      localStorage.clear()
    }
  },[])
  
  const saveCart = (myCart)=>{
    localStorage.setItem("cart", JSON.stringify(myCart))
    let subt= 0
    let keys = Object.keys(myCart)
    for( let i=0;i< keys.length; i++){

      subt += myCart[keys[i]].price * myCart[keys[i]].qty
    }
    setSubTotal(subt)
  }

  const removeFromCart = (itemCode, qty, price, name, size, variant) =>{
      let newCart= cart
      if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty - qty
      }
      if(newCart[itemCode].qty <= 0){
          delete newCart[itemCode]
      }

      setCart(newCart)
      saveCart(newCart)
    }

  const addToCart = (itemCode, qty, price, name, size, variant) =>{
      let newCart= cart
      if(itemCode in cart){
        newCart[itemCode].qty = cart[itemCode].qty + qty
      }else{
        newCart[itemCode] = {qty:1, price, name, size, variant}
      }
      saveCart(newCart)
      setCart(newCart)
    }
  
  const clearCart = ()=>{
    setCart({})
    saveCart({})
  }

  const buyNow =(itemCode, qty, price, name, size, variant)=>{
    saveCart({})
    let newCart= { itemCode : {qty:1, price, name ,size, variant}}
    setCart(newCart)
    saveCart(newCart)
    router.push('/checkout')
  }
  return <>
    <Navbar cart={cart} addToCart={addToCart}  removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal}   />
      <Component cart={cart} buyNow={buyNow} addToCart={addToCart}  removeFromCart={removeFromCart} clearCart={clearCart} subTotal={subTotal} {...pageProps} />
    <Footer/>
  </>
}

export default MyApp

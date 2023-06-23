import Link from 'next/link'
import React, { useState } from 'react'
import Logo from '../components/Logo'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Signup = () => {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

const handleSubmit = async (e)=>{
  e.preventDefault();

  const data= { name , email, password}

    const res = await fetch('http://localhost:3000/api/signup',  {
      method: 'POST', 
      headers: {
      'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })

    const response = await res.json()
    console.log(response);

    setEmail('')
    setName('')
    setPassword('')

    toast.success('Your account has been created!', {
      autoClose:2000
    })

}

const handleChange = (e)=>{
  if(e.target.name == 'name'){
    setName(e.target.value)
  }
  else if(e.target.name == 'email'){
    setEmail(e.target.value)
  }
  else if(e.target.name == 'password'){
    setPassword(e.target.value)
  }
}
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 my-10 lg:px-8">
    <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
        theme="light"
        />
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <Logo />
        </div>
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up your account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" onSubmit={handleSubmit} method='POST'>
        <div>
          <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input onChange={handleChange} value={name} id="name" name="name" type="text" autoComplete="name" required className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none" />
          </div>
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input onChange={handleChange} value={email} id="email" name="email" type="email" autoComplete="email" required className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none" />
          </div>
        </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2">
              <input onChange={handleChange} value={password} id="password" name="password" type="password" autoComplete="current-password" required className="block w-full pl-4 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none" />
            </div>
          </div>

        <div>
          <button type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Sign up</button>
        </div>
      </form>

      <div className='flex justify-center mt-6 items-center '>
          <p className=" text-sm text-gray-500">
            Already a member? 
          </p>
            <Link href="/login">
                <div  className="font-semibold leading-6 text-blue-600 hover:text-blue-500 text-sm"> Log In</div>
            </Link>
      </div>
    </div>
  </div>
  )
}

export default Signup
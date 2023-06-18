import Link from 'next/link'
import React from 'react'
import Logo from '../components/Logo'
const Signup = () => {
  return (
    <div className="flex min-h-full flex-col justify-center px-6 py-12 my-10 lg:px-8">
    <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <div className="flex justify-center">
          <Logo />
        </div>
      <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Sign up your account</h2>
    </div>

    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
      <form className="space-y-6" action="#" method="POST">
        <div>
          <label for="name" className="block text-sm font-medium leading-6 text-gray-900">Name</label>
          <div className="mt-2">
            <input id="name" name="name" type="text" autocomplete="name" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none" />
          </div>
        </div>

        <div>
          <label for="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
          <div className="mt-2">
            <input id="email" name="email" type="email" autocomplete="email" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none" />
          </div>
        </div>

          <div>
            <label for="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
            <div className="mt-2">
              <input id="password" name="password" type="password" autocomplete="current-password" required className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6 outline-none" />
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
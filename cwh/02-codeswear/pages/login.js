/* eslint-disable @next/next/no-img-element */
import {useState} from 'react'
import Logo from '../components/Logo'
import Link from 'next/link'
import { ToastContainer, toast} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Login = () => {

  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

const handleSubmit = async (e)=>{
  e.preventDefault();

  const data= {email, password}
  fetch('http://localhost:3000/api/login',  {
    method: 'POST', 
    headers: {
    'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then(response => response.text())
		  .then((data) => {
			if(data){
        setEmail('')
        setPassword('')
      } else{
        console.log('Not Success:');
      }
      
		  })
		  .catch((error) => {
			console.error('Error:', error);
     
		  }).finally((data)=>{
       if(data){
        toast.success('User logged in !!!! ✅', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
          });
       }
       else{
        toast.error('No user found', {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          theme: "light",
          });
       }
      })
 
}
const handleChange = (e)=>{
  if(e.target.name == 'email'){
    setEmail(e.target.value)
  }
  else if(e.target.name == 'password'){
    setPassword(e.target.value)
  }
}

  return (
    <div>
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
      <div className="flex min-h-full flex-col justify-center px-6 py-12 my-10 lg:px-8">
          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
              <div className="flex justify-center">
                <Logo />
              </div>
            <h2 className="mt-5 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Log in to your account</h2>
          </div>

          <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit} method="POST">
              <div>
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input id="email" onChange={handleChange} value={email} name="email" type="email" autoComplete="email" required className="block pl-4 outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <div className="flex items-center justify-between">
                  <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Password</label>
                  <div className="text-sm">
                  <Link href="/forgot">
                    <div className="font-semibold text-pink-600 hover:text-pink-500">Forgot password?</div>
                  </Link>
                  </div>
                </div>
                <div className="mt-2">
                  <input id="password" onChange={handleChange} value={password} name="password" type="password" autoComplete="current-password" required className="block pl-4 outline-none w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-pink-600 sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div>
                <button  type="submit" className="flex w-full justify-center rounded-md bg-pink-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-pink-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-pink-600">Log in</button>
              </div>
            </form>

            <div className='flex justify-center mt-6 items-center '>
                <p className=" text-sm text-gray-500">
                  Not a member? 
                </p>
                  <Link href="/signup">
                      <div  className="font-semibold leading-6 text-blue-600 hover:text-blue-500 text-sm"> Sign up</div>
                  </Link>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login

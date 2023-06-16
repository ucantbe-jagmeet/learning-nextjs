import Navbar from '../components/Navbar'
import '../styles/globals.css'
import '../components/Navbar.css'
import { Provider } from 'next-auth/client'

function MyApp({ Component, pageProps }) {
  return (
    <Provider>
      <Navbar />
      <Component {...pageProps} />
    </Provider>
  )
}

export default MyApp

import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

import { AuthProvider } from '../context/AuthContext.jsx'

function MyApp({ Component, pageProps }) {
  return(
    <AuthProvider>
      <content>
        <Navbar />
        <Component {...pageProps} />
        <Footer /> 
      </content>
    </AuthProvider>
  )
}

export default MyApp

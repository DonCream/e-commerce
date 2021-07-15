import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'
import Footer from '../components/Footer'

function MyApp({ Component, pageProps }) {
  return(
    <content>
      <Navbar />
      <Component {...pageProps} />
      <Footer /> 
    </content>
  )
}

export default MyApp

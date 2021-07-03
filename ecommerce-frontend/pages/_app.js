import '../styles/globals.css'
import 'tailwindcss/tailwind.css'
import Navbar from '../components/Navbar'

function MyApp({ Component, pageProps }) {
  return(
    <content>
      <Navbar />
      <Component {...pageProps} />
    </content>
  )
}

export default MyApp

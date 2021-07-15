import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link'

import { fromImageToUrl, API_URL } from './api/url'
import { twoDecimals } from '../utils/format'

export default function Home({products}) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {products.map(product => (
        <div key={product.name} className="">
          <Link href={`/products/${product.slug}`}>
            <a>
              <div className="">
                <div className="flex flex-row w-40 h-40"><img src={fromImageToUrl(product.image)} alt="" /> </div>
                <div className=""> {product.name} ${twoDecimals(product.price)}
                </div>
              </div>
            </a>
          </Link>
        </div>
      ))}
    </div>
  )
}
//Fetch the products as props
export async function getStaticProps(){
  const product_res = await fetch(`${API_URL}/products/`)
  const products = await product_res.json()
//Return the products as props
  return {
    props: {
      products
    }
  }
}

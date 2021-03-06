import { API_URL, fromImageToUrl } from '../api/url'
import Head from 'next/head'
import { twoDecimals } from '../../utils/format'

const Product = ({product}) => {
  return(
    <div>
      <Head>
        {product.meta_title &&
        <title>{product.meta_title}</title>
        }
    {product.meta_description &&
        <meta name="description" content={product.meta_description} />
        }
      </Head>
      <h3>{product.name}</h3>
      <img src={fromImageToUrl(product.image)} />
      <h3>{product.name}</h3>
      <p>${twoDecimals(product.price)}</p>
      <p>{product.content}</p>
    </div>
  )
}
//Get params from context
export async function getStaticProps({params: {slug}}) {
  const product_res = await fetch(`${API_URL}/products/?slug=${slug}`)
  const found = await product_res.json()
//Return as products props
  return {
    props: {
      product: found[0]
    }
  }
}
//Retrieve all teh possible paths
export async function getStaticPaths(){
  const products_res = await fetch (`${API_URL}/products/`)
  const products = await products_res.json()
//Return them to NextJS context
  return {
    paths: products.map(product => ({
      params: { slug: String(product.slug) }
    })),
    fallback: false
  }
}

export default Product;

import Head from 'next/head'
import Layout from '../components/Layout'
import ProductItem from '../components/ProductItem'
import data from '../utils/data'
import react, {useContext, useEffect, useState} from 'react'
import { Store } from '../utils/redux/Store'
//import { addToCartHandler } from '../utils/redux/actions'

export default function Home() {
  const {state} = useContext(Store)

  useEffect(() => {console.log(state.cart.cartItems)},[state.cart.cartItems])
const addToCartHandler=()=>{
}
  return (
    <div>
      <div>
        <Layout itemsInCart={state.cart.cartItems}>
            <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4'>
              { data.products.map(item => <ProductItem product={item} addItemToCart={addToCartHandler} itemsInCart={state.cart.cartItems} />)
                }
            </div>
        </Layout>
      </div>
    </div>
  )
}

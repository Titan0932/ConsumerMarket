import React, {useContext} from 'react'
import Layout from '../components/Layout'
import { Store } from '../utils/redux/Store'
import { LogIn } from '../components/LogIn'

export const Login=()=>{
    const {state,dispatch}= useContext(Store)
    const cart = state.cart.cartItems

    return(
        <Layout itemsInCart={cart}>
            <LogIn />
        </Layout>
    )

}

export default Login
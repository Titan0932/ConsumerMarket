import React from "react";
import Layout from "../components/Layout";
import { Store } from "../utils/redux/Store";
import { useContext } from "react";
import CartItems from "../components/CartItems";
import CartTotal from "../components/CartTotal";

export default function Cart() {
  const { state } = useContext(Store);
  return (
    <Layout itemsInCart={state.cart.cartItems}>
      <h1 className="font-bold mb-4">My Cart</h1>
      {state.cart.cartItems.length > 0 ? (
        <div className="grid lg:grid-cols-11 md:grid-cols-11 gap-7">
          <div className="lg:col-span-7 md:col-span-7">
            {state.cart.cartItems.map((item) => (
              <CartItems product={item} />
            ))}
          </div>
          <div className="lg:col-span-4 md:col-span-4">
            <div className="card">
              <CartTotal products={state.cart.cartItems} />
            </div>
          </div>
        </div>
      ) : (
        <h1> Cart is empty!</h1>
      )}
    </Layout>
  );
}

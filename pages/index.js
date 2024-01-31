import Layout from "../components/Layout";
import ProductItem from "../components/Product/ProductItem";
// import data from "../utils/data";
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../utils/redux/Store";
import { addToCartHandler } from '../utils/redux/actions'
import db from '../modules/db'


export async function getStaticProps() {
  const products = await db.product_Table.findMany({});
  return {
    props: { products },
  };
}


export default function Home({products}) {
  const { state } = useContext(Store);

  // useEffect(() => {
  //   console.log(state.cart.cartItems);
  // }, [state.cart.cartItems]);

  return (
    <div>
      <div>
        <Layout itemsInCart={state.cart.cartItems}>
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {products.map((item) => (
              <ProductItem
                product={item}
                addItemToCart={addToCartHandler}
                itemsInCart={state.cart.cartItems}
              />
            ))}
          </div>
        </Layout>
      </div>
    </div>
  );
}

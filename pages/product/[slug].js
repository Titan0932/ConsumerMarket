import React, { useContext, useEffect, useState } from "react";
import Layout from "../../components/Layout";
import { useRouter } from "next/router";
import data from "../../utils/data";
import Image from "next/image";
import Link from "next/link";
import { Store } from "../../utils/redux/Store";
import { constants } from "../../utils/redux/constants";
import { addToCartHandler } from "../../utils/redux/actions";
import db from '../../modules/db'


export async function getServerSideProps() {
  const products = await db.product_Table.findMany({});
  return {
    props: { products },
  };
}

export default function ProductDetails({products}) {
  const { query } = useRouter();
  const { slug } = query;
  const product = products.find((x) => x.slug === slug);
  const {state,dispatch}= useContext(Store)
  const cart = state.cart.cartItems
  
// console.log(cart?.find((id) => product.id == id)?.quantity)
  return (
    <Layout itemsInCart={cart}>
        <Link href="/">
          <button className="p-1 mb-3 secondary-button">
            Go Back
          </button>
        </Link>

        <ProductDetails product={product} />
      
    </Layout>
  );
}

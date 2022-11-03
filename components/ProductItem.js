import React, { useContext } from "react";
import Link from "next/link";
import { addToCartHandler } from "../utils/redux/actions";
import { Store } from "../utils/redux/Store";

export default function ProductItem({
  product,
}) {
  const {state, dispatch}= useContext(Store)
  return (
    <div className="card">
      <Link href={`/product/${product.slug}`}>
        <a>
          <img
            src={product.image}
            alt={product.name}
            className="rounded shadow item-img"
          />
        </a>
      </Link>
      <div className="flex flex-col items-center justify-center p-5">
        <Link href={`/product/${product.slug}`}>
          <a>
            <h2 className="text-lg">{product.name}</h2>
          </a>
        </Link>
        <p className="text-sm">{product.brand}</p>
        <p className="text-sm mt-2 mb-1">${product.price}</p>
        {product.countInStock > 0 ? (
          <button
            className="primary-button"
            onClick={() => addToCartHandler(state,dispatch,product)}
          >
            Add to Cart
          </button>
        ) : (
          <button className="danger-button" disabled>
            Product Unavailable
          </button>
        )}
      </div>
    </div>
  );
}

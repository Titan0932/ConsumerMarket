import React,{useContext} from "react";
import Image from "next/image";
import { addToCartHandler } from "../../utils/redux/actions";
import { Store } from "../../utils/redux/Store";

export const ProductView = ({ product, cart }) => {
  const {state,dispatch}= useContext(Store)

  return (
    <>
      {product ? (
        <div className="grid grid-cols-1 md:grid-cols-4 md:gap-4 bg-white">
          <div className="md:col-span-2">
            <Image
              src={product.image}
              alt={product.name}
              layout="responsive"
              width={640}
              height={640}
            />{" "}
          </div>
          <div className="flex flex-col md:col-span-2  text-black p-3">
            <ul>
              <div className="border-slate-300 pb-2 border-b-2 mb-4">
                <li>
                  <h1 className="font-bold text-2xl">{product.name}</h1>
                </li>
                <li className="text-lg">{product.description}</li>
                <li className="text-blue-500">
                  {" "}
                  {product.rating} rating | {product.numReviews} reviews
                </li>
                <li>
                  Brand:{" "}
                  <span className="text-blue-500"> {product.brand} </span>
                </li>
                <li>
                  Category:{" "}
                  <span className="text-blue-500"> {product.category}</span>
                </li>
              </div>
              <li>
                <span className="text-3xl text-red-600">
                  {" "}
                  ${product.price}{" "}
                </span>
              </li>
              <li className="text-sm">
                Available in Stock:{" "}
                <span className="text-red-700"> {product.countInStock} </span>
              </li>
              <li>
                {product.countInStock -
                  (cart?.find((cartItem) => product.Id == cartItem.Id)
                    ?.quantity ?? 0) >
                0 ? (
                  <button
                    className="primary-button"
                    onClick={() => addToCartHandler(state, dispatch, product)}
                  >
                    Add to Cart
                  </button>
                ) : (
                  <button className="danger-button" disabled>
                    Product Unavailable
                  </button>
                )}
              </li>
            </ul>
          </div>
        </div>
      ) : (
        <div className="text-lg">Product Details Unavailable</div>
      )}
    </>
  );
};

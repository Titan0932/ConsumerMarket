import React from "react";

export default function CartItems({ product }) {
  return (
    <div className="card px-2 py-3">
      <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row gap-2">
        <div className="basis-1/4">
          <img src={product.image} className="w-96 md:w-28 lg:w-28 h-auto rounded-lg" />
        </div>
        <div className="basis-1/2">{product.description}</div>
        <div className="basis-1/4"><span className="font-bold">Price: </span> <br/>${product.price}</div>
        <div className="basis-1/4"><span className="font-bold">Qtn:</span> <br/>{product.quantity}</div>
      </div>
    </div>
  );
}

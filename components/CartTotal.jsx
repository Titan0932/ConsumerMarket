import React from "react";

export default function CartTotal({ products }) {
  return (
    <div className="p-2">
      <h1 className="font-bold text-lg flex justify-center mb-2">Cart Total</h1>
      {/* <div className="flex gap-2 font-bold">
        <div className="basis-1/4">S.N</div>
        <div className="basis-1/2">Item</div>
        <div className="basis-1/4">Qtn</div>
        <div className="basis-1/4">Price</div>
        <div className="basis-1/4">Total</div>
      </div> */}
      {products.map((item, idx) => (
        <div className="flex gap-2">
          {/* <div className="basis-1/4">{idx + 1}.</div> */}
          <div className="basis-1/2 text-2xl">{item.name} </div>
          <div className="basis-1/4">{item.quantity}</div>
          <div className="basis-1/4">${item.price}</div>
          <div className="font-bold basis-1/4">
            ${item.price * item.quantity}
          </div>
        </div>
      ))}
      <div className="font-bold mt-2 flex gap-2">
        <div  className="basis-1/2">Total Cost</div>
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div className="basis-1/4"></div>
        <div  className="basis-1/4">${products.reduce((a, b) => a + b.quantity * b.price, 0)}</div> 
      </div>
    </div>
  );
}

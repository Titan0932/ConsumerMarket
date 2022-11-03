import React from "react";
import Link from "next/link";

const Navbar = ({itemsInCart}) => {
  return (
    <nav className="flex justify-between px-5 shadow-sm shadow-cyan-500/40 items-center h-16 bg-amber-500">
      <div>
        <Link href="/" className="">
          <a className="font-bold text-xl"> ConsumerMarket</a>
        </Link>
      </div>
      <div className="">
        <Link href="/cart" className="px-2">
          <a className="px-2">
            {" "}
            MyCart  {itemsInCart.length != 0 && <span className="rounded-full px-2 py-1 bg-red-500 text-white">{itemsInCart.reduce((a,b) => a +b.quantity, 0 )}</span>}
          </a>
        </Link>
        <Link href="/" className="px-2">
          <a className="px-2"> Login </a>
        </Link>
      </div>
    </nav>
  );
};
export default Navbar;

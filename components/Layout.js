import Head from "next/head";
import React from "react";
import Navbar from './Navbar'

export default function Layout({ title, itemsInCart, children }) {
  return (
    <div>
      <Head>
        <title>
          {title ? "ConsumerMarket" + title : "ConsumerMarket"}
        </title>
        <meta
          name="description"
          content="Consumer's Market Ecommerce Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header>
          <Navbar itemsInCart={itemsInCart} />
        </header>
        <main className="px-5 my-auto mt-4 ">{children}</main>
        <footer className="flex items-center px-5 shadow-sm shadow-purple-500/20 shadow-inner h-10">
          All rights Reserved. @Consumer's Market
        </footer>
      </div>
    </div>
  );
}

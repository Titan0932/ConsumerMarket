import Head from "next/head";
import React from "react";
import Link from "next/link";

export default function Layout({ title, children }) {
  return (
    <div>
      <Head>
        <title>
          {title ? "Consumer's Market" + title : "Consumer's Market"}
        </title>
        <meta
          name="description"
          content="Consumer's Market Ecommerce Website"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex min-h-screen flex-col">
        <header>
          <nav className="flex justify-between px-5 shadow-sm shadow-cyan-500/40 items-center h-16  bg-purple-900">
            <div>
              <Link href="/" className="">
                <a className="font-bold text-xl"> Consumer's Market</a>
              </Link>
            </div>
            <div className=''>
              <Link href="/" className="px-2">
                <a className="px-2"> MyCart </a>
              </Link>
              <Link href="/" className="px-2">
                <a className="px-2"> Login </a>
              </Link>
            </div>
          </nav>
        </header>
        <main className="px-5 container my-auto mt-4 ">{children}</main>
        <footer className="flex items-center px-5 shadow-sm shadow-purple-500/20 shadow-inner h-10">
          All rights Reserved. @Consumer's Market
        </footer>
      </div>
    </div>
  );
}

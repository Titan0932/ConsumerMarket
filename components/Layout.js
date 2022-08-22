import Head from 'next/head'
import React from 'react'

export default function Layout({children}) {
  return (
    <div>
        <Head>
            <title> Consumer's Market </title>
        </Head>
        
            {children}
        <footer>
                All rights Reserved. @Consumer's Market
        </footer>
    </div>
  )
}

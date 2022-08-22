import Document, {Head, Html, Main, NextScript} from 'next/document'
import React from 'react'

const MyDocument = () => {
        return (
            <Html lang="en">
                <Head>
                    <body>
                        <Main />
                        <NextScript />
                    </body>
                </Head>
            </Html>
        )
}
export default MyDocument
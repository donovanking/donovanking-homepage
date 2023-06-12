import { ColorModeScript } from "@chakra-ui/react";
import NextDocument, { Html, Head, Main, NextScript } from 'next/document'
import theme from '../lib/theme.js'

export default class Document extends NextDocument {
    render () {
        return(
            <Html lang="en">
                <Head>
                    {/* head contents like meta tags can go here */}
                </Head>
                <body>
                    <ColorModeScript initialColorMode={theme.config.initialColorMode} />
                    <Main />
                    <NextScript />
                </body>
            </Html>
        )
    }
}

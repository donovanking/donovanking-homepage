import { ChakraProvider } from '@chakra-ui/react'
import Layout from '../components/layouts/main'
import Fonts from '/Users/donovanking/Documents/Portfolio/donovanking-homepage/components/fonts.js'
import theme from '../lib/theme'
import { AnimatePresence } from 'framer-motion'

function Website({ Component, pageProps, router }) {
    return (
        <ChakraProvider theme={theme}>
            <Fonts />
            <Layout router={router}>
                <AnimatePresence initial={true} mode='wait'>
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </ChakraProvider>
    )
}

export default Website
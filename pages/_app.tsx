import Layout from '../components/layouts/main';
import { AnimatePresence } from 'framer-motion';
import Chakra from '../components/chakra';
import styles from '../components/css/style.css';
import React from 'react';

if (typeof window !== 'undefined') {
    window.history.scrollRestoration = 'manual';
}

function Website({ Component, pageProps, router }: any) {
    return (
        <Chakra>
            <style>
                {`
        @import url(https://fonts.googleapis.com/css2?family=M+PLUS+Rounded+1c:wght@300;700);
        @import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@700);
        @import url(https://fonts.googleapis.com/css2?family=Noto+Sans+JP);
        `}
            </style>
            <Layout router={router}>
                <AnimatePresence
                    mode="wait"
                    initial={true}
                    onExitComplete={() => {
                        if (typeof window !== 'undefined') {
                            window.scrollTo({ top: 0 });
                        }
                    }}
                >
                    <Component {...pageProps} key={router.route} />
                </AnimatePresence>
            </Layout>
        </Chakra>
    );
}

export default Website;

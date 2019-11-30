import * as React from 'react'
import Navigation from './Navigation'
import Head from 'next/head'
// @ts-ignore
import RetinaImage from 'react-retina-image'

type LayoutProps = {
    title?: string
}

const Layout: React.FunctionComponent<LayoutProps> = ({ children, title }) => (
    <div>
        <link
            rel="stylesheet"
            type="text/css"
            href="//fonts.googleapis.com/css?family=Tenor+Sans"
        />
        <Head>
            <title>SAINT FAME</title>
            <meta
                name="viewport"
                content="initial-scale=1.0, width=device-width"
            />
        </Head>
        <Navigation />
        <RetinaImage
            src={require('../assets/logo/logo.png')}
            style={{ marginTop: 24 }}
        />
        {children}
        <style global jsx>{`
            body {
                background: black;
                color: #fff;
                font-family: Tenor Sans;
            }
            a {
                font-family: Tenor Sans;
                font-style: normal;
                font-weight: normal;
                font-size: 25px;
                line-height: 40px;

                color: #fffafa;
            }
            h1 {
                color: #fff;
            }
        `}</style>
    </div>
)
export default Layout

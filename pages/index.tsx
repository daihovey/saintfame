import { NextPage } from 'next'
import Link from 'next/link'
import Head from 'next/head'

const Home: NextPage<{}> = ({}) => {
    return (
        <div>
            <Head>
                <title>SAINT FAME</title>
                <meta
                    name="viewport"
                    content="initial-scale=1.0, width=device-width"
                />
            </Head>
            <p>
                <Link href="/holders">
                    <a>Holders</a>
                </Link>
            </p>
            <p>
                <Link href="/finances">
                    <a>Finances</a>
                </Link>
            </p>
        </div>
    )
}

export default Home

import Layout from '../components/layout'
import Head from 'next/head'

export default function About () {
    return (
        <Layout>
            <Head>
                <title>About | Jonathan Deiss</title>
                <meta name="description" content="An about page"/>
            </Head>
            <h1>About</h1>
        </Layout>
    )
}
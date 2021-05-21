import Head from 'next/head'
import Button from '../components/button'
import Layout, { siteTitle } from '../components/layout'


export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section>
        <h1>Jonathan Deiss</h1>
        <p>Web Developer.</p>
        <Button
          label="View Menu"
          path="/menu"
          type="primary"
        />
        <Button
          label="View Locations"
          path="/locations"
          type="primary"
        />
        <Button
          label="View People"
          path="/people"
          type="secondary"
        />
      </section>
    </Layout>
  )
}
import Head from 'next/head'
import NavBar from '@/layout/NavBar'
import { getOrganizations } from '@/utils/dataService'
import OrganizationList from '@/layout/OrganizationList'
import Footer from '@/layout/Footer'

export default function Home({ organizations }) {
  return (
    <>
      <Head>
        <title>Reframe</title>
        <meta name="description" content="Easily find organizations making an impact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
      </Head>
      <header className="banner">
        <NavBar />
        <h1 className="visually-hidden">Reframe</h1>
      </header>
      <main className="main">
        <OrganizationList organizations={organizations} />
      </main>
      <Footer />
    </>
  )
}

export async function getStaticProps() {
  const res = await getOrganizations();

  return { props: { organizations: res.organizations } }
}

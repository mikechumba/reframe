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

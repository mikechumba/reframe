import Head from 'next/head'
import { Space_Grotesk, Poppins } from '@next/font/google'
import NavBar from '@/layout/NavBar'
import { getOrganizations } from '@/utils/dataService'
import OrganizationList from '@/layout/OrganizationList'

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--ff-space-grotesk",
})

const poppins = Poppins({
  weight: ['300', '400', '500'],
  subsets: ["latin"],
  variable: "--ff-poppins",
})

export default function Home({ organizations }) {
  return (
    <>
      <Head>
        <title>Reframe</title>
        <meta name="description" content="Easily find organizations making an impact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        <style>{`
          :root {
            --ff-space-grotesk: ${spaceGrotesk.style.fontFamily};
            --ff-poppins: ${poppins.style.fontFamily};
          }
        `}</style>
      </Head>
      <header className="banner">
        <NavBar />
        <h1 className="visually-hidden">Reframe</h1>
      </header>
      <main className="main">
        <OrganizationList organizations={organizations} />
      </main>
      <footer></footer>
    </>
  )
}

export async function getStaticProps() {
  const res = await getOrganizations();

  return { props: { organizations: res.organizations } }
}

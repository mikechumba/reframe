import Head from 'next/head'
import { Space_Grotesk, Poppins } from '@next/font/google'
import NavBar from '@/layout/NavBar'

const spaceGrotesk = Space_Grotesk({
  weight: ['400', '700'],
  subsets: ["latin"],
  variable: "--ff-space-grotesk",
})

const poppins = Poppins({
  weight: ['300', '400'],
  subsets: ["latin"],
  variable: "--ff-poppins",
})

export default function Home() {
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
      </header>
      <main className="main">
      </main>
      <footer></footer>
    </>
  )
}

import Head from 'next/head'
import NavBar from '@/layout/NavBar'
import { getOrganizations } from '@/utils/dataService'
import OrganizationList from '@/layout/OrganizationList'
import { hiphenate } from '@/utils'
import ProfileHeader from '@/layout/ProfileHeader'
import StatsBar from '@/layout/StatsBar'
import AboutSection from '@/layout/AboutSection'
import Gallery from '@/layout/Gallery'
import ListSection from '@/layout/ListSection'

export default function Home({ organization }) {
  return (
    <>
      <Head>
        <title>{organization?.name}</title>
        <meta name="description" content="Easily find organizations making an impact" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <header className="banner">
        <NavBar />
        <ProfileHeader org={organization} />
      </header>
      <main className="main">
        <StatsBar org={organization} />
        <div className="container profile-grid">
          <AboutSection org={organization}  />
          <Gallery images={organization?.gallery} />
          <ListSection org={organization} />
        </div>
      </main>
      <footer></footer>
    </>
  )
}

export async function getStaticPaths() {
  const res = await getOrganizations();
  const paths = res.organizations.map(({ name }) => ({ params: { name: hiphenate(name)  } }))
  return { paths, fallback: false }
}

export async function getStaticProps(ctx) {
  const { name } = ctx.params;
  const res = await getOrganizations();
  const org = res.organizations.find(org => hiphenate(org.name) === name);

  return { props: { organization: org } }
}



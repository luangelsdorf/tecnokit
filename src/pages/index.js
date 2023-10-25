import Banner from '@/components/home/Banner';
import Benefits from '@/components/home/Benefits';
import Releases from '@/components/home/Releases';
import Header from '@/components/layout/Header';
import Head from 'next/head';

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | TecnoKit</title>
      </Head>

      <Header />

      <main>
        <Banner />
        <Releases />
        <Benefits />
      </main>

    </>
  )
}
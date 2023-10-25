import Banner from '@/components/home/Banner';
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
      </main>

    </>
  )
}
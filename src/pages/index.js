import About from '@/components/home/About';
import Banner from '@/components/home/Banner';
import Benefits from '@/components/home/Benefits';
import Insta from '@/components/home/Insta';
import Releases from '@/components/home/Releases';
import Footer from '@/components/layout/Footer';
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
        <Releases title="Promoções" />
        <Releases title="Destaques" />
        <Insta />
        <About />
      </main>

      <Footer />
    </>
  )
}
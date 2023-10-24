import Head from 'next/head';
import Image from 'next/image';
import home from 'public/Home.jpg';

export default function Home() {
  return (
    <div>
      <Head>
        <title>Home | TecnoKit</title>
      </Head>
      <Image style={{ verticalAlign: 'middle', maxWidth: '100%', height: 'auto' }} src={home} alt="" />
    </div>
  )
}
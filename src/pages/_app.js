/* import '@/styles/globals.css'; */
import '@/styles/styles.scss';
import 'bootstrap/dist/css/bootstrap.css';
import { Open_Sans } from 'next/font/google';

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--open-sans',
});

export default function App({ Component, pageProps }) {

  return (
    <>
      <style jsx global>
        {`
          html {
            font-family: ${openSans.style.fontFamily};
          }
          svg text {
            font-family: ${openSans.style.fontFamily};
          }
        `}
      </style>
      <Component {...pageProps} />
    </>
  )
}

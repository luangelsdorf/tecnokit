/* import '@/styles/globals.css'; */
import 'bootstrap/dist/css/bootstrap-grid.css';
import 'bootstrap/dist/css/bootstrap-reboot.css';
import 'bootstrap/dist/css/bootstrap-utilities.css';
import '@/styles/styles.scss';
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
          body {
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

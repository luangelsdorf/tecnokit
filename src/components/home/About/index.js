import styles from './About.module.scss';
import AboutSVG from 'public/images/svg/home/about/about.svg';

export default function About({ content }) {
  return (
    <section className={styles.section}>
      <AboutSVG />
    </section>
  )
}

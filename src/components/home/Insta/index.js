import styles from './Insta.module.scss';
import InstaSection from 'public/images/svg/home/insta/instagram.svg';

export default function Insta({ content }) {
  return (
    <section className={styles.section}>
      <InstaSection />
    </section>
  )
}

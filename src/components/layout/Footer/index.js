import styles from './Footer.module.scss';
import FooterSVG from 'public/images/svg/home/footer/footer.svg';

export default function Footer({ content }) {
  return (
    <section className={styles.footer}>
      <FooterSVG />
    </section>
  )
}

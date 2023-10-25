import Image from 'next/image';
import styles from './Banner.module.scss';
import banner from 'public/images/home/banner.jpg';

export default function Banner({ content }) {
  return (
    <div className={styles.banner}>
      <Image src={banner} alt="" />
    </div>
  )
}

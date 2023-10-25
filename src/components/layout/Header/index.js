import styles from './Header.module.scss';
import Search from 'public/images/svg/home/header/search.svg';
import Logo from 'public/images/svg/home/header/logo.svg';
import Support from 'public/images/svg/home/header/support.svg';
import Account from 'public/images/svg/home/header/account.svg';
import Cart from 'public/images/svg/home/header/cart.svg';
import Insta from 'public/images/icons/instagram.svg';
import { Container } from 'react-bootstrap';
import Link from 'next/link';

export default function Header({ content }) {
  return (
    <header className={styles.header}>
      <div className={styles.upperBar}>
        <Container fluid>
          <a href="instagram.com/tecnokit.store" target="_blank">
            <Insta />
          </a>
        </Container>
      </div>
      <Container fluid>
        <div className={styles.innerHeader}>
          <Search />
          <Logo />
          <div className={styles.buttons}>
            <Support />
            <Account />
            <Cart />
          </div>
        </div>
      </Container>
      <nav>
        <ul className={styles.nav}>
          <li>
            <Link href="/">Início</Link>
          </li>
          <li>
            <Link href="/produtos">Produtos</Link>
          </li>
          <li>
            <Link href="/contato">Contato</Link>
          </li>
          <li>
            <Link href="/quem-somos">Quem Somos</Link>
          </li>
          <li>
            <Link href="/trocas">Trocas e Devoluções</Link>
          </li>
          <li>
            <Link href="/privacidade">Política de Privacidade</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

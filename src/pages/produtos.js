import Head from "next/head";
import { Container } from "react-bootstrap";
import Menu from 'public/images/svg/products/menu.svg';
import List from "@/components/products/List";

export default function Products() {
  return (
    <>
      <Head>
        <title>Produtos | TecnoKit</title>
      </Head>

      <main style={{ marginBottom: '120px' }}>
        <Container style={{ marginBottom: '48px' }}>
          <Menu />
        </Container>
        <List />
      </main>
    </>
  )
}
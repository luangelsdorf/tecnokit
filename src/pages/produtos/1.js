import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import photos from 'public/images/svg/product/photos.jpg';
import Specs from 'public/images/svg/product/specs.svg';
import Details from 'public/images/svg/product/details.svg';
import Comments from 'public/images/svg/product/comments.svg';
import Image from "next/image";
import Releases from "@/components/home/Releases";

export default function Product() {
  return (
    <>
      <Head>
        <title>Computador Core i3 com 4GB de RAM e SSD de 240GB | TecnoKit</title>
      </Head>

      <main>
        <Container>
          <Row>
            <Col lg={8}>
              <Image src={photos} alt="" />
              <Specs style={{ width: '100%', height: 'auto' }} />
            </Col>
            <Col lg={4}>
              <Details style={{ width: '100%', height: 'auto' }} />
            </Col>
          </Row>
          <Comments style={{ width: '100%', height: 'auto' }} />
          <Releases title="Produtos Relacionados" />
        </Container>
      </main>
    </>
  )
}
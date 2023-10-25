import Head from "next/head";
import { Col, Container, Row } from "react-bootstrap";
import Text from 'public/images/svg/contact/content.svg';
import Form from 'public/images/svg/contact/form.svg';

export default function Contact() {
  return (
    <>
      <Head>
        <title>Contato | TecnoKit</title>
      </Head>

      <main>
        <Container className="d-flex flex-center">
          <Row>
            <Col lg={4}>
              <Text />
            </Col>
            <Col lg={8}>
              <Form />
            </Col>
          </Row>
        </Container>
      </main>
    </>
  )
}
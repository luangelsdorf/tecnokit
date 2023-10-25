import { Col, Container, Row } from 'react-bootstrap';
import styles from './Benefits.module.scss';
import Security from 'public/images/svg/home/benefits/segurança.svg';
import Budget from 'public/images/svg/home/benefits/orçamento.svg';
import Installments from 'public/images/svg/home/benefits/parcelas.svg';
import Shipping from 'public/images/svg/home/benefits/frete.svg';

export default function Benefits({ content }) {
  return (
    <section className={styles.section}>
      <Container>
        <Row>
          <Col xs="3">
            <Security />
          </Col>
          <Col xs="3">
            <Budget />
          </Col>
          <Col xs="3">
            <Installments />
          </Col>
          <Col xs="3">
            <Shipping />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

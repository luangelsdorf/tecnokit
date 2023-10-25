import { Col, Container, Row } from 'react-bootstrap';
import styles from './Releases.module.scss';
import Product1 from 'public/images/svg/home/releases/produto-1.svg';
import Product2 from 'public/images/svg/home/releases/produto-2.svg';
import Product3 from 'public/images/svg/home/releases/produto-3.svg';
import Product4 from 'public/images/svg/home/releases/produto-4.svg';

export default function Releases({ title = 'Lançamentos' }) {
  return (
    <section className={styles.section}>
      <h2 className="text-center">{title}</h2>
      <Container>
        <Row>
          <Col>
            <Product1 />
          </Col>
          <Col>
            <Product2 />
          </Col>
          <Col>
            <Product3 />
          </Col>
          <Col>
            <Product4 />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

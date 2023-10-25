import { Col, Container, Row } from 'react-bootstrap';
import styles from './List.module.scss';
import Product from 'public/images/svg/home/releases/produto-2.svg';
import Filters from 'public/images/svg/products/filters.svg';

export default function List({ content }) {
  return (
    <div className={styles.section}>
      <Container>
        <Row>
          <Col lg={2}>
            <Filters />
          </Col>
          <Col lg={10}>
            <Row style={{rowGap: '40px'}}>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
              <Col>
                <Product />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

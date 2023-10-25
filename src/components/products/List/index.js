import { Col, Container, Row } from 'react-bootstrap';
import styles from './List.module.scss';
import Product from 'public/images/svg/home/releases/produto-2.svg';
import Filters from 'public/images/svg/products/filters.svg';
import Link from 'next/link';

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
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
              <Col>
                <Link href="/produtos/1">
                  <Product />
                </Link>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

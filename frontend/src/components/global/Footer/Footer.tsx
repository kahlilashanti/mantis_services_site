import { Link } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap'
import { brand, navLinks } from '@src/config/mantis'

function Footer() {
  return (
    <footer className="mantis-footer">
      <Container fluid className="px-4 px-lg-5">
        <Row className="g-4 align-items-end">
          <Col lg={6}>
            <p className="mantis-footer__brand">{brand.name}</p>
            <p className="mantis-footer__line">{brand.headline}</p>
          </Col>
          <Col sm={6} lg={3}>
            <p className="mantis-footer__label">Navigate</p>
            <ul className="mantis-footer__links list-unstyled mb-0">
              {navLinks.map((link) => (
                <li key={link.path}>
                  <Link to={link.path}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={6} lg={3}>
            <p className="mantis-footer__label">Contact</p>
            <a href={`mailto:${brand.email}`} className="mantis-footer__email">
              {brand.email}
            </a>
          </Col>
        </Row>
        <div className="mantis-footer__bottom">
          <p>© {new Date().getFullYear()} Mantis. All rights reserved.</p>
        </div>
      </Container>
    </footer>
  )
}

export default Footer

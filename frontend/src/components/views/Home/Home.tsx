import { Container, Row, Col, Button } from 'react-bootstrap'

function Home() {
  return (
    <div className="min-vh-100 d-flex align-items-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg={8} className="text-center">
            <h1 className="display-3 fw-bold mb-4">Mantis Services</h1>
            <p className="lead mb-5">
              Your trusted partner for professional services and solutions.
            </p>
            <Button variant="primary" size="lg">
              Get Started
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  )
}

export default Home

import styles from "@/styles/Home.module.css";
import { Button, Card, Col, Container, Row } from "react-bootstrap";

export default function Home() {
  return (
    <Container className="d-flex align-items-center justify-content-center" style={{ minHeight: "100vh" }}>
      <Row className="justify-content-center" style={{ width: "100%" }}>
        <Col xs={12} md={8} lg={6}>
          <Row className="g-4"> {/* g-4 agrega un espaciado entre las columnas */}
            <Col xs={12} md={4}>
              <Card style={{ minHeight: "300px" }}>
                <Card.Header>
                  <h2>Socios</h2>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col></Col>
                    <Col>
                      <Button>Nuevo Socio</Button>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row className="mt-3">
                    <Col></Col>
                    <Col>
                      <Button>Buscar Socio</Button>
                    </Col>
                    <Col></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card style={{ minHeight: "300px" }}>
                <Card.Header>
                  <h2>Clientes</h2>
                </Card.Header>
                <Card.Body>
                  <Row>
                    <Col></Col>
                    <Col>
                      <Button>Nuevo Cliente</Button>
                    </Col>
                    <Col></Col>
                  </Row>
                  <Row className="mt-3">
                    <Col></Col>
                    <Col>
                      <Button>Buscar Cliente</Button>
                    </Col>
                    <Col></Col>
                  </Row>
                </Card.Body>
              </Card>
            </Col>

            <Col xs={12} md={4}>
              <Card style={{ minHeight: "300px" }}>
                <Card.Header>
                  <h2>Institucional</h2>
                </Card.Header>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  )
}
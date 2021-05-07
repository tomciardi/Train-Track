import { Card, Container, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'

export default function Forms() {
    return (
        <>
            <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Form Selection</h2>
                            <Nav className="flex-column">
                                <Nav.Link as={Link} to="/formcompany">Company</Nav.Link>
                                <Nav.Link as={Link} to="/formstation">Station</Nav.Link>
                                <Nav.Link as={Link} to="/formtrain">Train</Nav.Link>
                                <Nav.Link as={Link} to="/formrailroad">Railroad</Nav.Link>
                            </Nav>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}

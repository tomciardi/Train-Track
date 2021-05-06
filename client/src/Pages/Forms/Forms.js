import { Card, Container, Nav } from 'react-bootstrap'

export default function Forms() {
    return (
        <>
            <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Form Selection</h2>
                            <Nav className="flex-column">
                                <Nav.Link href="/formcompany">Company</Nav.Link>
                                <Nav.Link href="/formstation">Station</Nav.Link>
                                <Nav.Link href="/formtrain">Train</Nav.Link>
                                <Nav.Link href="/formrailroad">Railroad</Nav.Link>
                            </Nav>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}

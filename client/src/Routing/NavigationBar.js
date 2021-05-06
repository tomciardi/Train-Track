import { Nav, Navbar } from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <>

            <Navbar expand="sm" bg="dark" variant="dark">
                <Navbar.Brand href="/">Train-Track</Navbar.Brand>
                <Nav className="container-fluid">
                    <Nav.Link href="/">Home</Nav.Link>
                    <Nav.Link href="/tutorial">Tutorial</Nav.Link>
                    <Nav className = "ml-auto">
                        <Nav.Link href="/">Sign Up</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>
        </>
    );
}

export default NavigationBar;
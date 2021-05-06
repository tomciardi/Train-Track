import {Nav, Navbar} from 'react-bootstrap'

const NavigationBar = () => {
    return (
        <>
            <Navbar expand="sm" bg="dark" variant="dark">
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="container-fluid">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/tutorial">Tutorial</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </>
    );
}

export default NavigationBar;
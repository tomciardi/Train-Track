import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'
import { withRouter } from 'react-router-dom'

const NavigationBar = () => {

    const { currentUser } = useAuth()
    console.log(currentUser)

    return (
        <>
            <div className="NavigationBar">
                <Navbar expand="sm" bg="dark" variant="dark">
                    <Navbar.Brand href="/">Train-Track</Navbar.Brand>
                    <Nav className="container-fluid">
                        <Nav.Link href="/">Home</Nav.Link>
                        <Nav.Link href="/dashboard">Dashboard</Nav.Link>
                        <Nav.Link href="/forms">Forms</Nav.Link>
                        <Nav className = "ml-auto">
                            { !currentUser && <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> }
                            { !currentUser && <Nav.Link href="/login">Login</Nav.Link> }
                            { currentUser && <Nav.Link href="/profile">Hello, {currentUser}</Nav.Link> }
                            { currentUser && <Nav.Link href="/login">Logout</Nav.Link> }
                        </Nav>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default withRouter(NavigationBar);
import { Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom';
import { useAuth } from '../Contexts/AuthContext'
import { withRouter } from 'react-router-dom'

const NavigationBar = () => {

    const { currentUser, logout } = useAuth()
    console.log(currentUser)

    return (
        <>
            <div className="NavigationBar">
                <Navbar expand="sm" bg="dark" variant="dark">
                    <Navbar.Brand as={Link} to="/">Train-Track</Navbar.Brand>
                    <Nav className="container-fluid">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        { currentUser && <Nav.Link as={Link} to="/dashboard">Dashboard</Nav.Link> }
                        { currentUser && <Nav.Link as={Link} to="/forms">Forms</Nav.Link> }
                        <Nav className = "ml-auto">
                            { !currentUser && <Nav.Link as={Link} to="/signup">Sign Up</Nav.Link> }
                            { !currentUser && <Nav.Link as={Link} to="/login">Login</Nav.Link> }
                            { currentUser && <Nav.Link as={Link} to="/profile">Hello, {currentUser}</Nav.Link> }
                            { currentUser && <Nav.Link as={Link} to="/login" onClick={logout}>Logout</Nav.Link> }
                        </Nav>
                    </Nav>
                </Navbar>
            </div>
        </>
    );
}

export default withRouter(NavigationBar);
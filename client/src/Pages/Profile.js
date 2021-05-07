import React, { useState } from 'react'
import { Card, Button, Alert, Container } from 'react-bootstrap'
import { useAuth } from '../Contexts/AuthContext'

export default function Profile() {
    const [error ] = useState("")
    const { currentUser, logout } = useAuth()

    return (
        <>
            <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "800px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Profile</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            <strong>Email:</strong> {currentUser}
                        </Card.Body>
                    </Card>
                    <Card>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        <Button variant="link" onClick={logout}>
                            Log Out
                        </Button>
                    </div>
                </div>
            </Container>
        </>
    )
}
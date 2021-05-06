import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'

export default function Login() {
    const emailRef = useRef()
    const passwordRef = useRef()

    async function handleSubmit(e) {
        e.preventDefault()
    }

    return (
        <>
            <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Log In</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="email">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type="email" ref={emailRef} required />
                                </Form.Group>
                                <Form.Group id="password">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type="password" ref={passwordRef} required />
                                </Form.Group>
                                <Button className="w-100" type="submit">
                                    Log In
                                </Button>
                            </Form>
                            <div className="w-100 text-center mt-2">
                                <Link to="/forgot-password">Forgot Password?</Link>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="w-100 text-center mt-2">
                        Don't have an account? <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </Container>
        </>
    )
}
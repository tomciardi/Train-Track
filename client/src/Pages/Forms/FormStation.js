import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import Axios from 'axios'

export default function FormStation() {
    const nameRef = useRef()
    const addressRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            Axios.post("http://localhost:3001/addstation", {
                name: nameRef.current.value,
                address: addressRef.current.value,
            }).then((response) => {
                console.log(response)
            });
            setSuccess("Successfully added to database")
            nameRef.current.value = ""
            addressRef.current.value = ""
            setLoading(false)
        } catch {
            setError("Failed to add company")
        }
    }

    return (
        <>
            <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Station Form</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="name">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control ref={nameRef} required />
                                </Form.Group>
                                <Form.Group id="address">
                                    <Form.Label>Address</Form.Label>
                                    <Form.Control ref={addressRef} required />
                                </Form.Group>
                                <Button disabled={loading} className="w-100" type="submit">
                                    Add
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </div>
            </Container>
        </>
    )
}
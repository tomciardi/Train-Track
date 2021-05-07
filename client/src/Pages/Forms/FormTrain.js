import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import Axios from 'axios'

export default function FormTrain() {
    const modelRef = useRef()
    const seatsRef = useRef()
    const ownerRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            console.log(modelRef.current.value)
            Axios.post("http://localhost:3001/addtrain", {
                model: modelRef.current.value,
                seats: seatsRef.current.value,
                owner: ownerRef.current.value,
            }).then((response) => {
                console.log(response)
            });
            setSuccess("Successfully added to database")
            modelRef.current.value = ""
            seatsRef.current.value = ""
            ownerRef.current.value = ""
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
                            <h2 className="text-center mb-4">Train Form</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="model">
                                    <Form.Label>Model</Form.Label>
                                    <Form.Control ref={modelRef} required />
                                </Form.Group>
                                <Form.Group id="seats">
                                    <Form.Label>Seats</Form.Label>
                                    <Form.Control ref={seatsRef} required />
                                </Form.Group>
                                <Form.Group id="owner">
                                    <Form.Label>Owner</Form.Label>
                                    <Form.Control ref={ownerRef} required />
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
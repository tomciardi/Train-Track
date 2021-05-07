import React, { useRef, useState } from 'react'
import { Alert, Button, Card, Container, Form } from 'react-bootstrap'
import Axios from 'axios'

export default function FormRailroad() {
    const distanceRef = useRef()
    const weightRef = useRef()
    const rail_classRef = useRef()
    const ownerRef = useRef()
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setError("")
            setLoading(true)
            Axios.post("http://localhost:3001/addrailroad", {
                distance: distanceRef.current.value,
                weight: weightRef.current.value,
                rail_class: rail_classRef.current.value,
                owner: ownerRef.current.value,
            }).then((response) => {
                console.log(response)
            });
            setSuccess("Successfully added to database")
            distanceRef.current.value = ""
            weightRef.current.value = ""
            rail_classRef.current.value = ""
            ownerRef.current.value = ""
            setLoading(false)
        } catch {
            setError("Failed to add railroad")
        }
    }

    return (
        <>
            <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "400px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Railroad Form</h2>
                            {error && <Alert variant="danger">{error}</Alert>}
                            {success && <Alert variant="success">{success}</Alert>}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group id="distance">
                                    <Form.Label>Distance</Form.Label>
                                    <Form.Control ref={distanceRef} required />
                                </Form.Group>
                                <Form.Group id="weight">
                                    <Form.Label>Weight</Form.Label>
                                    <Form.Control ref={weightRef} required />
                                </Form.Group>
                                <Form.Group id="rail_class">
                                    <Form.Label>Rail Class</Form.Label>
                                    <Form.Control ref={rail_classRef} required />
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
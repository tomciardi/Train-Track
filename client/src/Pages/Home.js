import { useState } from 'react'
import { Card, Container, Dropdown, DropdownButton, Table } from 'react-bootstrap'
import Axios from "axios";

export default function Home() {

    const [companyList, setCompanyList] = useState([]);
    const [queried, setQueried] = useState(false)

    const getCompanies = () => {
        Axios.get("http://localhost:3001/companies").then((response) => {
            setCompanyList(response.data)
            console.log(companyList)
        });
        setQueried(true)
    };

    const QueryTable = () => {
        return (
            <Table striped condensed hover variant="dark">
            <thead>
                <RenderTable />
            </thead>
            <tbody>
                
            </tbody>
        </Table>
        )
    }

    function RenderTable(list) {
        const keys = Object.keys(list)

        console.log(keys)
        let keys_headers = []

        for(let i = 0; i < keys.length; i++) {
            keys_headers.push(<th>{keys[0]}</th>)
        }

        console.log(keys_headers)
        return (
            <tr>
                { keys_headers }
            </tr>
        )
    }

    return (
        <>
        <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "800px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">Choose Table</h2>
                            <DropdownButton title="Select Table">
                                <Dropdown.Item onClick={getCompanies}>Company</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                    {queried && <QueryTable />}
                </div>
            </Container>
        </>
    )
}
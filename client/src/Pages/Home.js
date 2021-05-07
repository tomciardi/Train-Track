import { useState } from 'react'
import { Card, Container, Dropdown, DropdownButton, Table } from 'react-bootstrap'
import Axios from "axios";

export default function Home() {

    const [companyList, setCompanyList] = useState([]);
    const [stationList, setStationList] = useState([]);
    const [queried, setQueried] = useState(false)
    const [table, setTable] = useState("Choose Table")

    function queryTable() {
        console.log(table)
        switch(table) {
            case "Company":
                return <QueryCompanyTable/>
            case "Station":
                return <QueryStationTable/>
            default:
                return <></>
        }
    }

    const getCompanies = () => {
        Axios.get("http://localhost:3001/companies").then((response) => {
            setCompanyList(response.data)
            console.log(companyList)
        });
        setQueried(true)
        setTable("Company")
    };

    const renderCompany = (company, index) => {
        return (
            <tr key={index}>
                <td>{company.c_id}</td>
                <td>{company.name}</td>
                <td>{company.address}</td>
            </tr>
        )
    }

    const QueryCompanyTable = () => {
        return (
            <Table striped condensed hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                { companyList.map(renderCompany)}
            </tbody>
        </Table>
        )
    }

    const getStations = () => {
        Axios.get("http://localhost:3001/stations").then((response) => {
            setStationList(response.data)
            console.log(stationList)
        });
        setQueried(true)
        setTable("Station")
    };

    const renderStation = (station, index) => {
        return (
            <tr key={index}>
                <td>{station.station_id}</td>
                <td>{station.name}</td>
                <td>{station.address}</td>
            </tr>
        )
    }

    const QueryStationTable = () => {
        return (
            <Table striped condensed hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Address</th>
                </tr>
            </thead>
            <tbody>
                { stationList.map(renderStation)}
            </tbody>
        </Table>
        )
    }

    return (
        <>
        <Container className="d-flex align-tems-center justify-content-center" style={{ minHeight: "100vh" }}>
                <div className="w-100" style={{ maxWidth: "800px" }}>
                    <Card>
                        <Card.Body>
                            <h2 className="text-center mb-4">{table}</h2>
                            <DropdownButton title="Select Table">
                                <Dropdown.Item onClick={getCompanies}>Company</Dropdown.Item>
                                <Dropdown.Item onClick={getStations}>Station</Dropdown.Item>
                            </DropdownButton>
                        </Card.Body>
                    </Card>
                        {queried && queryTable()}
                </div>
            </Container>
        </>
    )
}
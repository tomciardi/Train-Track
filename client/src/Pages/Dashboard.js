import { useState } from 'react'
import { Card, Container, Table } from 'react-bootstrap'
import Select from 'react-select'
import Axios from "axios";

export default function Dashboard() {

    const [companyList, setCompanyList] = useState([]);
    const [stationList, setStationList] = useState([]);
    const [trainList, setTrainList] = useState([]);
    const [railroadList, setRailroadList] = useState([]);
    const [queried, setQueried] = useState(false);
    const [table, setTable] = useState("Choose Table");
    const [options, setOptions] = useState([]);

    const tableOptions = [
        { value: 'company', label: 'company' },
        { value: 'station', label: 'station '},
        { value: 'train', label: 'train' },
        { value: 'railroad', label: 'railroad' },
    ]

    const tableSelect = (event) => {
        console.log(event.value)
        setQueried(true)
        switch(event.value) {
            case 'company':
                return getCompanies()
            case 'station':
                return getStations()
            case 'train':
                return getTrains()
            case 'railroad':
                return getRailroads()
            default:
        }
    }

    function getColumns(headers) {
        let columns = []
        for(let i = 0; i < headers.length; i++)
            columns.push({value: headers[i], label: headers[i]})
        setOptions(columns)
    }

    function queryTable() {
        console.log(table)
        switch(table) {
            case "company":
                return <QueryCompanyTable/>
            case "station":
                return <QueryStationTable/>
            case "train":
                return <QueryTrainTable/>
            case "railroad":
                return <QueryRailroadTable/>
            default:
                return <></>
        }
    }

    const getCompanies = () => {
        Axios.get("http://localhost:3001/companies").then((response) => {
            setCompanyList(response.data)
            console.log(companyList)
        });
        setTable("company")
        //setOptions(companyOptions)
        if(companyList.length > 0)
            getColumns(Object.keys(companyList[0]))
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
        setTable("station")
        if(stationList.length > 0)
            getColumns(Object.keys(stationList[0]))
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

    const getTrains = () => {
        Axios.get("http://localhost:3001/trains").then((response) => {
            setTrainList(response.data)
            console.log(trainList)
        });
        setTable("train")
        if(trainList.length > 0)
            getColumns(Object.keys(trainList[0]))
    };

    const renderTrain = (train, index) => {
        return (
            <tr key={index}>
                <td>{train.train_id}</td>
                <td>{train.model}</td>
                <td>{train.seats}</td>
                <td>{train.owner}</td>
            </tr>
        )
    }

    const QueryTrainTable = () => {
        return (
            <Table striped condensed hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Model</th>
                    <th>Seats</th>
                    <th>Owner</th>
                </tr>
            </thead>
            <tbody>
                { trainList.map(renderTrain)}
            </tbody>
        </Table>
        )
    }

    const getRailroads = () => {
        Axios.get("http://localhost:3001/railroads").then((response) => {
            setRailroadList(response.data)
            console.log(railroadList)
        });
        setTable("railroad")
        if(railroadList.length > 0)
            getColumns(Object.keys(railroadList[0]))
    };

    const renderRailroad = (railroad, index) => {
        return (
            <tr key={index}>
                <td>{railroad.r_id}</td>
                <td>{railroad.distance}</td>
                <td>{railroad.weight}</td>
                <td>{railroad.rail_class}</td>
                <td>{railroad.owner}</td>
            </tr>
        )
    }

    const QueryRailroadTable = () => {
        return (
            <Table striped condensed hover variant="dark">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Distance</th>
                    <th>Weight</th>
                    <th>Class</th>
                    <th>Owner</th>
                </tr>
            </thead>
            <tbody>
                { railroadList.map(renderRailroad)}
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
                            <div class="container">
                                <div class="row">
                                    <div class="col-sm">
                                        <Select options={tableOptions} onChange={event => tableSelect(event)}/>
                                    </div>
                                    <div class="col-sm">
                                        {queried && <Select options={options}/>}
                                    </div>
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                        {queried && queryTable()}
                </div>
            </Container>
        </>
    )
}
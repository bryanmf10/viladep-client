import { Input, FormGroup, Form, Label, Button } from "reactstrap";
import React, { useEffect, useState } from "react";
import Logo from "../img/Logo.png"
import Service from "../controllers/service.js";

const SelectService = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        Service.getAll()
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err));
    }, []);

    const services = Services.map((service) => (
        <>
        <option>{{service}}</option>
        </>
    ));

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container py-4 py-xl-5">
                        <div className="row mb-5">
                            <div className="col">
                                <nav className="navbar navbar-light navbar-expand-md py-3">
                                    <div className="container">
                                        <img className="img-fluid" src={Logo} alt="Logo" width="166" height="42" />
                                        <a className="navbar-brand d-flex align-items-center" href="/beautySalon">
                                            <br />
                                            <strong><span style={{ color: "rgb(0, 0, 0)" }}>Administrador</span></strong>
                                            <br />
                                        </a>
                                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                                            <span className="visually-hidden">Toggle navigation</span>
                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navcol-1">
                                            <ul className="navbar-nav ms-auto">
                                                <li className="nav-item" />
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <Form>
                            <FormGroup>
                                <Label for="name">Servicio:</Label>
                                <Input type="select" name="select" id="name">
                                    {services}
                                </Input>
                            </FormGroup>
                            <Button>Enviar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default SelectService;

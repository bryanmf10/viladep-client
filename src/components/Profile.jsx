import { Input, FormGroup, Form, Label, Button } from "reactstrap";
import React, { useState } from "react";
import Logo from "../img/Logo.png"
import Service from "../controllers/service.js";

const Profile = () => {
    const [name, setName] = useState("");
    const [price, setPrice] = useState("");
    const [time, setTime] = useState("");
    const [description, setDescription] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        let { id } = 1;
        const service = {
            name: name,
            price: price,
            time: time,
            description: description
        }
        saveService(service, id);
        cleanForm();
    }

    const saveService = (service, id) => {
        Service.insertOne(service, id)
            .catch(error => console.log(error));
    }

    const cleanForm = () => {
        setName("");
        setPrice("");
        setTime("");
        setDescription("");
    }

    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container py-4 py-xl-5">
                        <div className="row mb-5">
                            <div className="col">
                                <nav className="navbar navbar-light navbar-expand-md py-3">
                                    <div className="container">
                                        <img className="img-fluid" src={Logo} alt="Logo" width="166" height="42"/>
                                        <a className="navbar-brand d-flex align-items-center" href="/beautySalon">
                                            <br/>
                                            <strong><span style={{ color: "rgb(0, 0, 0)" }}>Administrador</span></strong>
                                            <br/>
                                        </a>
                                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                                            <span className="visually-hidden">Toggle navigation</span>
                                            <span className="navbar-toggler-icon"/>
                                        </button>
                                        <div className="collapse navbar-collapse" id="navcol-1">
                                            <ul className="navbar-nav ms-auto">
                                                <li className="nav-item"/>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <Form onSubmit={(event) => handleSubmit(event)}>
                            <FormGroup>
                                <Label for="name">Servicio:</Label>
                                <Input type="text" name="text" id="name" value={name} onChange={(event) => setName(event.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="price">Precio (€):</Label>
                                <Input type="number" name="number" id="price" value={price} onChange={(event) => setPrice(event.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="time">Duración (min):</Label>
                                <Input type="number" name="number" id="time" value={time} onChange={(event) => setTime(event.target.value)} required />
                            </FormGroup>
                            <FormGroup>
                                <Label for="description">Descripción:</Label>
                                <Input type="text" name="text" id="description" value={description} onChange={(event) => setDescription(event.target.value)} required />
                            </FormGroup>
                            <Button>Enviar</Button>
                        </Form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Profile;

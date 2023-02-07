import React, { useEffect, useState } from "react";
import Service from '../controllers/service.js';
import Logo from "../img/Logo.png";

const BeautySalon = () => {
    const [Services, setServices] = useState([]);

    useEffect(() => {
        Service.getAll()
            .then(data => {
                setServices(data);
            })
            .catch(err => console.log(err));
    }, []);

    const services = Services.map((service) => (
        service.types.map((elem) => (
            <>
                <div className="card">
                    <div className="card-body">
                        <div id={elem.id}>
                            <h6 className="text-muted card-subtitle mb-2">
                                <span style={{ color: "rgb(65, 63, 60)" }}>{service.name}</span>
                            </h6>
                            <select>
                                <optgroup>
                                    <option value={elem.id}>€{elem.price} · {elem.time} min · {elem.description}</option>
                                </optgroup>
                            </select>
                            <input type="checkbox" />
                        </div>
                        <p className="card-text"><span style={{ color: "rgb(65, 63, 60)" }}>Con cualquier empleado disponible</span>
                            <br />
                        </p>
                    </div>
                </div>
            </>
        ))
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
                                            <strong><span style={{ color: "rgb(0, 0, 0)" }}>VILADEP centre d'estètica</span></strong>
                                            <br />
                                        </a>
                                        <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-1">
                                            <span className="visually-hidden">Toggle navigation</span>
                                            <span className="navbar-toggler-icon" />
                                        </button>
                                        <div className="collapse navbar-collapse" id="navcol-1">
                                            <ul className="navbar-nav ms-auto">
                                                <li className="nav-item">
                                                    <a className="nav-link active" href="/selectService">Iniciar sesión</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </nav>
                            </div>
                        </div>
                        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title"><span style={{ color: "var(--color-link-color)" }}>Seleccionar servicios y personal</span>
                                                    <br />
                                                </h4>
                                                <p className="card-text"><span style={{ color: "var(--color-gray)" }}>Seleccionar el día y la hora</span>
                                                    <br />
                                                </p>
                                                <p className="card-text"><span style={{ color: "var(--color-gray)" }}>Introduce tu información</span>
                                                    <br />
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4" style={{ marginLeft: "0px", paddingLeft: "3px", marginRight: "-382px", paddingRight: "34px" }}>
                                        <h4 className="card-title"><span style={{ color: "rgb(0, 0, 0)" }}>Selecciona uno o más servicios</span>
                                            <br />
                                        </h4>
                                        {services}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col" style={{ textAlign: "center" }}>
                                <div>
                                    <a href="/beautySalon">
                                        <br />
                                        <span style={{ color: "rgb(0, 106, 255)", backgroundColor: "rgba(255, 255, 255, 0.1)" }}>Preferencias de cookies</span>
                                        <br />
                                    </a>
                                </div>
                            </div>
                            <div className="col" style={{ textAlign: "center" }}>
                                <div style={{ textAlign: "center" }}>
                                    <button className="btn btn-primary" type="button" style={{ textAlign: "center" }}>Continuar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default BeautySalon;

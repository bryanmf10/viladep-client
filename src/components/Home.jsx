import React from "react";
import LegLaser from "../img/LegLaser.webp";
import Salon from "../img/Salon.webp";
import HarmpitLaser from "../img/HarmpitLaser.webp";
import Manicure from "../img/Manicure.webp";
import LegWax from "../img/LegWax.webp";
import Pedicure from "../img/Pedicure.webp";
import FaceWax from "../img/FaceWax.webp";
import Massage from "../img/Massage.webp";

const Home = () => {
    return (
        <>
            <div className="card">
                <div className="card-body">
                    <div className="container py-4 py-xl-5">
                        <div className="row mb-5">
                            <div className="col-md-8 col-xl-6 text-center mx-auto">
                                <h2>TRIA EL TEU VILADEP</h2>
                            </div>
                        </div>
                        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <img className="img-fluid" src={LegLaser} alt="LegLaser"/>
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">VILADEP</h4>
                                                <h6 className="text-muted card-subtitle mb-2">
                                                    <span style={{ color: "rgb(65, 63, 60)" }}>Centre d’estètica</span>
                                                    <br/>
                                                </h6>
                                                <p className="card-text">
                                                    <span style={{ color: "rgb(65, 63, 60)" }}>C/ General Vallès, 1</span>
                                                    <br/>
                                                </p>
                                                <a className="card-link" href="/beautySalon">
                                                    <strong>
                                                        <span style={{ color: "var(--global-palette1, #3182CE)" }}>DEMANAR HORA</span>
                                                    </strong>
                                                    <br/>
                                                    <br/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <img className="img-fluid" src={Salon} alt="Salon"/>
                                        <div className="card">
                                            <div className="card-body">
                                                <h4 className="card-title">VILADEP</h4>
                                                <h6 className="text-muted card-subtitle mb-2">
                                                    <span style={{ color: "rgb(65, 63, 60)" }}>Ungles</span>
                                                    <br/>
                                                </h6>
                                                <p className="card-text">
                                                    <span style={{ color: "rgb(65, 63, 60)" }}>Av. Tarragona, 11</span>
                                                    <br/>
                                                </p>
                                                <a className="card-link" href="/beautySalon">
                                                    <strong>
                                                        <span style={{ color: "var(--global-palette1, #3182CE)" }}>DEMANAR HORA</span>
                                                    </strong>
                                                    <br/>
                                                    <br/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h4 className="text-center card-title">
                                            <span style={{ color: "var(--global-palette5)" }}>Un Viladep per a cada</span>
                                            <br/>
                                            <span style={{ color: "var(--global-palette5)" }}>necessitat</span>
                                            <br/>
                                        </h4>
                                        <p className="card-text">
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Vols lluir una pell perfecta? Et recomanem VILADEP centre d’estètica.</span>
                                            <br/>
                                        </p>
                                        <p className="card-text">
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Vols brillar amb les ungles més xules? Et recomanem VILADEP Ungles.</span>
                                            <br/>
                                        </p>
                                        <p className="card-text">
                                            <span style={{ color: "rgb(65, 63, 60)" }}>A tots dos centres trobaràs els millors tractaments per cuidar-te.</span>
                                            <br/>
                                        </p>
                                        <div className="text-center">
                                            <button className="btn btn-primary text-center" type="button">PREGUNTA'NS</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="card">
                <div className="card-body">
                    <div className="container py-4 py-xl-5">
                        <div className="row gy-4 row-cols-1 row-cols-md-2 row-cols-xl-3">
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <h3 className="text-center card-title">GAUDEIX DELS NOSTRES SERVEIS</h3>
                                        <h5 className="text-start card-title">En els nostres centres d’estètica estem compromesos amb el teu benestar, per això només utilitzem productes de màxima qualitat per a garantir-te els millors resultats</h5>
                                        <p className="card-text">Només fem servir els millors productes del mercat.
                                            <br/>
                                        </p>
                                        <p className="card-text">Sistemes de desinfecció sanitària UV-DC per a la higienització de les nostres eines.
                                            <br/>
                                        </p>
                                        <p className="card-text">Serveis especialitzats de la mà de les nostres professionals.<br/></p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4">
                                        <img className="img-fluid" src={HarmpitLaser} alt="HarmpitLaser"/>
                                        <p className="text-center">
                                            <br/>
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Depilació làser díode</span>
                                            <br/>
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body"><img className="img-fluid" src={Manicure} alt="Manicure"/>
                                        <p className="text-center card-text">
                                            <br/>
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Manicura</span>
                                            <br/>
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4"><img className="img-fluid" src={LegWax} alt="LegWax"/>
                                        <p className="text-center">
                                            <br/>
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Depilació làser díode</span>
                                            <br/>
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body"><img className="img-fluid" src={Pedicure} alt="Pedicure"/>
                                        <p className="text-center card-text">
                                            <br/>
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Manicura</span>
                                            <br/>
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col">
                                <div className="card">
                                    <div className="card-body p-4"><img className="img-fluid" src={FaceWax} alt="FaceWax"/>
                                        <p className="text-center">
                                            <br/>
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Tractaments</span>
                                            <br/>
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                                <div className="card">
                                    <div className="card-body"><img className="img-fluid" src={Massage} alt="Massage"/>
                                        <p className="text-center card-text">
                                            <br/>
                                            <span style={{ color: "rgb(65, 63, 60)" }}>Massatges</span>
                                            <br/>
                                            <br/>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Home;
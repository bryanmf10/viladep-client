import React from "react";
import { Container } from "reactstrap";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import BeautySalon from "./components/BeautySalon";
import SelectService from "./components/SelectService";
import PageNotFound from "./components/PageNotFound";
import Logo from "./img/Logo.png";
import BeautifulWoman from "./img/BeautifulWoman.jpg";

const App = () => {
  const Inicio = () => {
    return (
      <Container fluid>
        <nav className="navbar navbar-light navbar-expand-md py-3">
                <div className="container">
                    <a className="navbar-brand d-flex align-items-center" href="/">
                        <img className="img-fluid" src={Logo} alt="Logo" width="168" height="42"/>
                    </a>
                    <button data-bs-toggle="collapse" className="navbar-toggler" data-bs-target="#navcol-2">
                        <span className="visually-hidden">Toggle navigation</span>
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navcol-2">
                        <ul className="navbar-nav ms-auto">
                            <li className="nav-item"><a className="nav-link active" href="/">INICI</a></li>
                            <li className="nav-item"><a className="nav-link" href="/beautySalon">CENTRE D'ESTÈTICA</a></li>
                            <li className="nav-item"><a className="nav-link" href="/beautySalon">SALÓ D'UNGLES</a></li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div>
                <img className="img-fluid" src={BeautifulWoman} alt="BeautifulWoman" style={{paddingBottom: "739px", marginBottom: "-1545px"}}/>
            </div>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/beautySalon" element={<BeautySalon />} />
          <Route exact path="/selectService" element={<SelectService />} />
          <Route element={<PageNotFound />} />
        </Routes>
      </Container>
    )
  }

  return (
    <BrowserRouter>
      <Inicio />
    </BrowserRouter>
  )
}

export default App;

import React from "react";
import { Link } from "react-router-dom";

const Navbar=()=> {
    return (
    <nav className="navbar sticky-top navbar-expand-lg navbar-dark bg-dark">
    <a className="navbar-brand" href="/"> Free Lectures</a>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
        <li className="nav-item active">
            <a className="nav-link" href="/home"><i className='fa fa-home'></i> Home <span className="sr-only">(current)</span></a>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/about"><i className='fa fa-info-circle'></i> About</a>
        </li>
        <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="/studyMaterial" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <i className='fas fa-book-reader'></i> Study Material
            </a>
            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
            <a className="dropdown-item" href="/studyMaterial/books"><i className='fas fa-book-open'></i> Books</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/studyMaterial/notes"><i className='fas fa-sticky-note'></i> Notes</a>
            <div className="dropdown-divider"></div>
            <a className="dropdown-item" href="/studyMaterial/dpp"><i className='	fas fa-pen-nib'></i> DPP</a>
            </div>
        </li>
        <li className="nav-item">
            <a className="nav-link" href="/contacts"><i className='fas fa-address-book'></i> Contacts</a>
        </li>
        </ul>
        <ul className="navbar-nav ">
                <li className="nav-item text-center" id="signup-btn">
                    <a href="/signIn" className="nav-link" data-toggle="modal" data-target="#">
                        <i className="fa fa-user"></i><span className="d-none d-inline d-xl-block px-1">Sign Up</span></a>
                </li>
                <li className="nav-item text-center" id="login-btn">
                    <a href="/logIn" className="nav-link" data-toggle="modal" data-target="#">
                    <i className="fas fa-sign-in-alt"></i><span className="d-none d-inline d-xl-block px-1">Log In</span></a>
                </li>
        </ul>
    </div>
    </nav>
    );
  
}
export default Navbar
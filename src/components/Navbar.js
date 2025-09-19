import React from 'react';

export default function Navbar(props) {
    return (
        <>
            <nav classNameName="navbar navbar-expand-lg bg-body-tertiary">
                <div classNameName="container-fluid">
                    <a classNameName="navbar-brand" href="/">{props.title}</a>
                    <button classNameName="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span classNameName="navbar-toggler-icon"></span>
                    </button>
                    <div classNameName="collapse navbar-collapse" id="navbarNav">
                        <ul classNameName="navbar-nav">
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="/">Home</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="/">About Us</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="/">Contact Us</a>
                            </li>
                            <li classNameName="nav-item">
                                <a classNameName="nav-link active" aria-current="page" href="/">Help</a>
                            </li>
                        </ul>
                    </div>
                    <div className="form-check form-switch">
                        <input className="form-check-input" type="checkbox" role="switch" id="switchCheckChecked" checked />
                        <label className="form-check-label" for="switchCheckChecked">Checked switch checkbox input</label>
                    </div>
                </div>
            </nav>
        </>
    );
}
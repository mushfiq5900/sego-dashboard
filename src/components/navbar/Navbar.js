import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell,faMessage,faBoxArchive,faAssistiveListeningSystems  } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import './Navbar.css'

const Navbar = () => {
    return (
        <div>
            <nav class="navbar navbar-expand-lg bg-light">
                <div class="container-fluid">
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div className='d-flex flex-column'>
                        <h1 class="navbar-brand">Dashboard</h1>
                        <h6>Welcome to davur Admin</h6>
                    </div>
                    <div class="collapse navbar-collapse" id="navbarTogglerDemo03">
                        <form class="d-flex ps-5" role="search">
                            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button class="btn btn-outline-success" type="submit">Search</button>
                        </form>
                        <FontAwesomeIcon icon={faBell}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faMessage}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faBoxArchive}></FontAwesomeIcon>
                        <FontAwesomeIcon icon={faAssistiveListeningSystems}></FontAwesomeIcon>
                        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Link</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled">Disabled</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
};

export default Navbar;
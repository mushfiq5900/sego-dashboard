import React from 'react';
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBarsStaggered, faClipboardList, faBars, faUserGroup, faLaptopFile } from '@fortawesome/free-solid-svg-icons'
import Navbar from '../navbar/Navbar';


const Sidebar = () => {
    return (
        <div>
            <div className='container-fluid p-0 d-flex'>
                <div className="col-lg-3 col-md-12 col-sm-12">
                    <div className='logo'>
                        <img src="./logo.PNG" alt="" />
                        <button className='btn'><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon></button>
                    </div>
                    <div className='side-list'>
                        <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Dashboard</button>
                        <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon> Orders</button>
                        <div class="dropdown">
                            <button class="dbtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> Menus
                            </button>
                            <ul class="dropdown-menu border-0">
                                <button className='dbtn'>Menu 1</button>
                                <button className='dbtn'>Menu 2</button>
                                <button className='dbtn'>Menu 3</button>
                            </ul>
                        </div>
                        <div class="dropdown">
                            <button class="dbtn" data-bs-toggle="dropdown" aria-expanded="false">
                                <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> Customers
                            </button>
                            <ul class="dropdown-menu border-0">
                                <button className='dbtn'>Add New</button>
                                <button className='dbtn'>Members</button>
                                <button className='dbtn'>General Customers</button>
                            </ul>
                        </div>
                        <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faLaptopFile}></FontAwesomeIcon> Analytics</button>
                    </div>
                </div>
                <div className="col-lg-9 col-md-12 col-sm-12">
                    <Navbar></Navbar>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;

{/* <div className='col-lg-12 d-flex'>
            <div className="col-lg-3 col-md-3 col-sm overflow-hidden">
                <div className='logo'>
                    <img src="./logo.PNG" alt="" />
                    <button className='btn'><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon></button>
                </div>
                <div className='side-list'>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Dashboard</button>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon> Orders</button>
                    <div class="dropdown">
                        <button class="dbtn dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faBars}></FontAwesomeIcon> Menus
                        </button>
                        <ul class="dropdown-menu border-0">
                            <button className='dbtn'>Menu 1</button>
                            <button className='dbtn'>Menu 2</button>
                            <button className='dbtn'>Menu 3</button>
                        </ul>
                    </div>
                    <div class="dropdown">
                        <button class="dbtn" data-bs-toggle="dropdown" aria-expanded="false">
                            <FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> Customers
                        </button>
                        <ul class="dropdown-menu border-0">
                            <button className='dbtn'>Add New</button>
                            <button className='dbtn'>Members</button>
                            <button className='dbtn'>General Customers</button>
                        </ul>
                    </div>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faLaptopFile}></FontAwesomeIcon> Analytics</button>
                </div>
            </div>
            <div className="col-lg-9 col-md-9 col-sm bg-light container-fluid">
                <Navbar></Navbar>
            </div>
        </div> */}
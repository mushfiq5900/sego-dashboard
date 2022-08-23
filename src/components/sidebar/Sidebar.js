import React from 'react';
import "./Sidebar.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faBarsStaggered, faClipboardList, faBars, faUserGroup, faLaptopFile } from '@fortawesome/free-solid-svg-icons'


const Sidebar = () => {
    return (
        <div className='d-flex'>
            <div className="col-lg-2">
                <div className='logo'>
                    <img src="./logo.PNG" alt="" />
                    <button className='btn'><FontAwesomeIcon icon={faBarsStaggered}></FontAwesomeIcon></button>
                </div>
                <div className='side-list'>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faHome}></FontAwesomeIcon> Dashboard</button>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faClipboardList}></FontAwesomeIcon> Orders</button>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faBars}></FontAwesomeIcon> Menus</button>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faUserGroup}></FontAwesomeIcon> Customers</button>
                    <button type="button" class="dbtn btn"><FontAwesomeIcon icon={faLaptopFile}></FontAwesomeIcon> Analytics</button>
                </div>
            </div>

            <div className="col-lg-10 bg-light container-fluid">
                hello
            </div>
        </div>
    );
};

export default Sidebar;
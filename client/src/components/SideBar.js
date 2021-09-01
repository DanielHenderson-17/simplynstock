import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';

const SideBar = (props) => {
    const {section}=props
    // Changes highlighted link base on which selection was made
    let dashboard = "topNav";
    let inventory = "topNav";
    let addItem = "bottomNav";
    console.log(section);
    switch(section){
        case "dashboard":
            dashboard="topNav dashboard";
            break;

        case "inventory":
            inventory="topNav inventory";
            break;

        case "addItem":
            addItem="bottomNav addItem";
            break;

        default:
            break;
    }
    return(
        <nav className="item1">
            <Link to="/">
                <p className={dashboard} style={{marginTop: "20px"}}>Dashboard</p>
            </Link>
            <Link to="/stock/inventory">
                <p className={inventory}>Inventory</p>
            </Link>
            <hr className="navHr"/>
            <Link to="/stock/new">
                <p className={addItem}>Add Item</p>
            </Link>
        </nav>
    )
}

export default SideBar;
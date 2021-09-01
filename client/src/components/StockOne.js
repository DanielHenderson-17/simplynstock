import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import Header from "./Header";
import SideBar from "./SideBar";

const StockOne = (props) => {
    const [ stock, setStock ] = useState({});

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/stock/" + props.id)
            .then((res) => setStock(res.data))
            .catch((err) => console.log(err));
    }, []);
    console.log(stock);
    return (
        <div className="gridContainer">
            < SideBar section={"inventory"}/>
            < Header/>
            <div className="item4">
            <div className="itemContainer">
            <img className="oneImg" src={stock.imgUrl} alt={stock.itemName} />
            <div className="itemInfo">
            <h1 className="stockOneH1">{stock.itemName}</h1>
            <p>{stock.description}</p>
            <div className="infoContainer">
                <h3>Location</h3>
                <p>{stock.location}</p>
            </div>
            <div className="infoContainer">
                <h3>Warehouse Location</h3>
                <p>{stock.warehouseLocation}</p>
            </div>
            <div className="infoContainer">
                <h3>On Hand</h3>
                <p>{stock.quantity}</p>
            </div>
            <div className="infoContainer">
                <h3>Cost</h3>
                <p>${stock.costPer}</p>
            </div>
            <div className="infoContainer">
                <h3>Total Cost</h3>
                <p>${(stock.quantity*stock.costPer).toLocaleString(undefined, {minimumFractionDigits:2})}</p>
            </div>
            <Link to={`/stock/${stock._id}/edit`}>
                <button className="editBtn">Edit</button>
            </Link>
            </div>
            </div>
            </div>
        </div>
    )
}

export default StockOne;
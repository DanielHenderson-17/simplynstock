import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import Header from "./Header";
import SideBar from "./SideBar";
import axios from 'axios';

const Location = (props) => {
    const [ allStock, setAllStock ] = useState([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/stock/location/"+props.cityState)
            .then((res) => setAllStock(res.data))
            .catch((err) => console.log(err));
    }, []);

    const deleteStock = (e, id) => {
        axios
        .delete("http://localhost:8000/api/stock/" + id)
        .then((res) => {
            console.log(res.data);
            setAllStock(allStock.filter((stock) => stock._id !== id));
        })
        .catch((err) => console.log(err));

    }

    return (
        <div className="gridContainer">
            < SideBar section={"inventory"}/>
            < Header/>
            <div className="item4">
            <div className="containerMain">
                <h3 className="containerHead">Inventory</h3>
                <div className="containerBody">
                <table style={{marginBottom:"15px"}}>
                    <tr>
                        <th style={{width:"250px"}}>Item Name</th>
                        <th style={{width:"470px"}}>Description</th>
                        <th style={{width:"200px"}}>Location</th>
                        <th style={{width:"50px"}}>Area</th>
                        <th style={{width:"80px"}}>On Hand</th>
                        <th style={{width:"80px", textAlign:"right"}}>Cost</th>
                        <th style={{width:"80px", textAlign:"right"}}>Total Cost</th>
                        <th style={{width:"100px"}}>Date Added</th>
                        <th>Edit/Delete</th>
                    </tr>
            {
                allStock.map((stock, index) => (
                        <tr key={index}>
                            <td>
                            <Link to={`/stock/${stock._id}`}>
                            {stock.itemName}
                            </Link>
                            </td>
                            <td>{stock.description}</td>
                            <td>{stock.location}</td>
                            <td>{stock.warehouseLocation}</td>
                            <td>{stock.quantity}</td>
                            <td style={{textAlign:"right"}}>${(stock.costPer).toFixed(2)}</td>
                            <td style={{textAlign:"right"}}>${(stock.quantity*stock.costPer).toLocaleString(undefined, {minimumFractionDigits:2})}</td>
                            <td>{new Date(stock.dateAdded).toLocaleString("en-US", {year: 'numeric', month: 'numeric', day: 'numeric'})}</td>
                            <td>
                            <Link to={`/stock/${stock._id}/edit`}>
                                 <button className="editBtn2">Edit</button>
                            </Link>
                            <button className="deleteBtn" onClick={ (e) => deleteStock(e, stock._id) }>Delete</button>
                            </td>
                        </tr>
                ))
            }
            </table>
            </div>
                </div>
            </div>
        </div>
    )
}

export default Location;
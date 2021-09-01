import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import Header from "./Header";
import SideBar from "./SideBar";

const StockNew = (props) => {
    const [ itemName, setItemName ] = useState("");
    const [ description, setDescription ] = useState("");
    const [ imgUrl, setImgUrl ] = useState("");
    const [ location, setLocation ]= useState("");
    const [ warehouseLocation, setWarehouseLocation ]= useState("");
    const [ quantity, setQuantity ] = useState("");
    const [ costPer, setCostPer ]= useState("");
    const [ dateAdded, setDateAdded ] = useState("");
    const [ errs, setErrs ] = useState({});

    const submitForm = (e) => {
        e.preventDefault();
        axios
        .post("http://localhost:8000/api/stock", {
            itemName: itemName,
            description: description,
            imgUrl: imgUrl,
            location: location,
            warehouseLocation: warehouseLocation,
            quantity: quantity,
            costPer: costPer,
            dateAdded: dateAdded,
        })
        .then((res) => {
            if(res.data.errors) {
                setErrs(res.data.errors);
                console.log(res.data.errors);
            } else {
                console.log(res.data._id);
                // props.setTotalCost(props.totalCost+(costPer*quantity));
                navigate(`/stock/${res.data._id}`);
            }
        })
        .catch((err) => console.log(err));  
    }
    return (
        <div className="gridContainer">
            < SideBar section={"addItem"}/>
            < Header/>
            <div className="item4">
                <div className="containerMain">
                <h3 className="containerHead">Add Item</h3>
                <form className="containerBody" style={{border:"0px", boxShadow: "none", margin: "0px"}} onSubmit={ submitForm }>
                    <div className="textBox">
                     <label>Item Name</label>
                        <input 
                        type="text"
                        name="itemName"
                        onChange={ (e) => setItemName(e.target.value)}
                    />
                    {errs.itemName ? (
                        <span style={{color: "red"}}>{errs.itemName.message}</span>
                    ) : null }
                    </div>
                    <div className="textBox">
                        <label>Item Description</label>
                        <input
                        type="text"
                        name="description"
                        onChange={ (e) => setDescription(e.target.value)}
                    />
                    {errs.description ? (
                        <span style={{color: "red"}}>{errs.description.message}</span>
                    ) : null }
                    </div>
                    <div className="textBox">
                        <label>Image Link</label>
                        <input
                        type="url"
                        name="imgUrl"
                        onChange={ (e) => setImgUrl(e.target.value)}
                    />
                    {errs.imgUrl ? (
                     <span style={{color: "red"}}>{errs.imgUrl.message}</span>
                 ) : null }
                    </div>
                    <div>
                        <label>Location</label>
                        <select 
                        name="location" 
                        onChange={ (e) => setLocation(e.target.value)}>
                            <option value="" disabled selected></option>
                            <option value="Austin, TX">Austin, TX</option>
                            <option value="Denver, CO">Denver, CO</option>
                            <option value="Nashville, TN">Nashville, TN</option>
                            <option value="Newark, NJ">Newark, NJ</option>
                            <option value="New York City, NY">New York City, NY</option>
                            <option value="Lincoln, NE">Lincoln, NE</option>
                            <option value="Wilmington, NC">Wilmington, NC</option>
                            <option value="Seattle, WA">Seattle, WA</option>
                            <option value="Las Vegas, NV">Las Vegas, NV</option>
                            <option value="Bowling Green, KY">Bowling Green, KY</option>
                        </select>
                    {errs.location ? (
                        <span style={{color: "red"}}>{errs.location.message}</span>
                    ) : null }
                    </div>
                    <div className="otherBox">
                        <label>Warehouse Location</label>
                        <input 
                        type="text"
                        name="warehouseLocation"
                        onChange={ (e) => setWarehouseLocation(e.target.value)}
                    />
                    {errs.warehouseLocation ? (
                        <span style={{color: "red"}}>{errs.warehouseLocation.message}</span>
                    ) : null }
                    </div>
                    <div className="otherBox">
                        <label>Quantity</label>
                        <input
                        type="number"
                        name="quantity"
                        onChange={ (e) => setQuantity(e.target.value)}
                    />
                    {errs.quantity ? (
                    <span style={{color: "red"}}>{errs.quantity.message}</span>
                    ) : null }
                    </div>
                    <div className="otherBox">
                        <label>Cost Per</label>
                        <input
                        type="number"
                        min="0.00"
                        max="1000000.00"
                        step="0.01"
                        name="costPer"
                        placeholder="$"
                        onChange={ (e) => setCostPer(e.target.value)}
                    />
                    {errs.costPer ? (
                        <span style={{color: "red"}}>{errs.costPer.message}</span>
                    ) : null }
                    </div>
                    <div className="otherBox">
                        <label>Date Added</label>
                        <input
                        type="date"
                        name="date"
                        onChange={ (e) => setDateAdded(e.target.value)}
                    />
                    {errs.dateAdded ? (
                        <span style={{color: "red"}}>{errs.dateAdded.message}</span>
                    ) : null }
                    </div>
                    <button type="submit" className="addBtn">Add Item</button>
                </form>
                </div>
            </div>
        </div>
    )
}

export default StockNew;
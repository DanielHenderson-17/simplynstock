import React, { useState, useEffect } from 'react';
import { navigate, Link } from '@reach/router';
import axios from 'axios';
import Header from "./Header";
import SideBar from "./SideBar";

const Dashboard = () => {
    const [ allStock, setAllStock] = useState ([]);
    const [ totalCost, setTotalCost] = useState (0);
    const [ lowInv, setLowInv] = useState ([]);
    const [ locationList, setLocationList] = useState ([]);
    const [ recentThree, setRecentThree] = useState ([]);

    useEffect(() => {
        axios
            .get("http://localhost:8000/api/stock/dashboard")
            .then((res) => {
                setAllStock(res.data.allStocks)
                setTotalCost(res.data.totalCost)
                setRecentThree(res.data.recentThree)
                setLocationList(res.data.location)
                setLowInv(res.data.allStocks.filter((item)=>item.quantity<10))
            })
            .catch((err) => console.log(err));
    }, []);

    return (
        <div className="gridContainer">
            < SideBar section={"dashboard"}/>
            < Header/>
            <div className="item4">
                <div className="item4Top">
                    <div className="inventoryDetails">
                        <h3>Inventory Details</h3>
                        <div className="quantities">
                            <div>
                                <h5 style={{display: "inline-block", color:"red"}}>Low Stock Quantity</h5>
                                <p style={{display: "inline-block", color:"red", fontWeight:"bolder"}}>{lowInv.length}</p>
                            </div>
                            <div>
                                <h5 style={{display: "inline-block"}}>Total Stock Surplus</h5>
                                <p style={{display: "inline-block"}}>{allStock.length-lowInv.length}</p>
                            </div>
                        </div>
                        <div className="percentage">
                                <h4>% Full Stock</h4>
                                <h2>{(((allStock.length-lowInv.length)/allStock.length)*100).toFixed(0)}%</h2>
                        </div>
                    </div>
                    <div className="recentlyAdded">
                        <h3>Recent Items</h3>
                        {
                            recentThree.map((item ,index)=>(
                                <div className="recentThree">
                                    <Link to={`/stock/${item._id}`} className="recentLink">
                                        <img className="recentImg" src={item.imgUrl} alt={item.itemName} />
                                        <h4 style={{textAlign: "center", marginTop:"0px", marginBottom:"0px"}}>{item.itemName}</h4>
                                        <h5 style={{fontWeight: "700", textAlign: "center", marginTop:"5px"}}>QTY: {item.quantity}</h5>
                                    </Link>
                            </div>
                        ))
                        }
                    </div>
                </div>
                <div className="inventoryLocations">
                    <h3>Inventory Locations</h3>
                    <div className="inventoryLocationsSub">
                        <div className="locationsHeader">
                            <h4 className="inventoryLocationsName">Location</h4>
                            <h4 className="firstQuantity">Quantity</h4>
                            <h4 className="inventoryLocationsName">Location</h4>
                            <h4>Quantity</h4>
                        </div>
                    {
                        locationList.map((location, index)=>(
                            <div className="locationContainer">
                            <Link to={`/stock/location/${location}`}>
                                <h5 className="locationName">{location}</h5>
                                <p className="locationQuantity">
                                    {
                                        allStock.filter((item)=> item.location===location).length
                                    }
                                </p>
                            </Link>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard;
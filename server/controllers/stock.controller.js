const Stock = require('../models/stock.model');

module.exports = {
    getAll: (req, res) => {
        Stock.find()
        .sort('itemName')
            .then((allStocks) => res.json(allStocks))
            .catch((err) => {
                console.log(`Error getting all inventory: ${err}`);
                res.json(err)
            });
    },
    create: (req, res) => {
        console.log(req.body);
        Stock.create(req.body)
            .then((newStockObj) => res.json(newStockObj))
            .catch((err) => {
                console.log(`Error creating a new inventory item: ${err}`);
                res.json(err)
            })
    },
    getOne: (req, res) => {
        Stock.findById(req.params.id)
            .then((oneStock) => res.json(oneStock))
            .catch((err) => {
                console.log(`Error fetching the inventory item: ${err}`);
                res.json(err)
            });
    },
    update: (req, res) => {
        Stock.findByIdAndUpdate(req.params.id, req.body, {new: true})
            .then((updatedStock) => res.json(updatedStock))
            .catch((err) => {
                console.log(`Error updating the inventory item: ${err}`);
                res.json(err)
            });
    },
    delete: (req, res) => {
        Stock.findByIdAndDelete(req.params.id)
            .then((deleted) => res.json(deleted))
            .catch((err) => {
                console.log(`Error deleting the inventory item: ${err}`);
                res.json(err)
            });
    },

    location: (req, res) => {
        console.log("location");
        console.log(req.params.cityState);
        Stock.find({
            "location": req.params.cityState
        })
        .then((stockAtLocation) => {
            console.log(stockAtLocation);
            res.json(stockAtLocation)
            
        })
        .catch((err) => {
            console.log(`Error displaying stock at location: ${err}`);
            res.json(err)
        });
    },


    dashboard: (req, res) => {
        let totalCost=0;
        let location=[];
        let recentThree=[];
        Stock.find()
        .sort('updatedAt')
            .then((allStocks) =>{
                allStocks.map((item, index)=>{
                    totalCost= totalCost+(item.costPer*item.quantity);
                    location.push(item.location);
                    
                })
                location=[...new Set(location)];
                recentThree=allStocks.slice(-3);
                return res.json({
                    allStocks: allStocks,
                    totalCost: totalCost,
                    location: location,
                    recentThree: recentThree,
                })
            })
            .catch((err) => {
                console.log(`Error getting all inventory: ${err}`);
                res.json(err)
            });
    }
}
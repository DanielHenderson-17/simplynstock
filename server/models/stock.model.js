const mongoose = require('mongoose');

const StockSchema = new mongoose.Schema({
    itemName: { 
        type: String,
        required: [true, "You must name your item!"],
        minlength: [2, "Your inventory item name must be at least 2 characters long!"],
    },
    description: {
        type: String,
        required: [true, "You must give the item a description"],
    },
    imgUrl: {
        type: String,
        required: [true, "You must select an image url!"],
    },
    location: {
        type: String,
        required: [true, "You must select a location for the item you are creating!"],
    },
    warehouseLocation: {
        type: String,
        required: [true, "You must select a warehouse location for the item you are creating!"],
    },
    quantity: {
        type: Number,
        required: [true, "You must select a quantity for your inventory item"],
    },
    costPer: {
        type: Number,
        required: [true, "You must select a cost amount for your inventory item"],
    },
    dateAdded: {
        type: Date,
    },
}, {timestamps: true});

module.exports = mongoose.model('Stock', StockSchema);
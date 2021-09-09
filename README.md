# SimplyNStock

## Quick start

- open terminal from parent directory and type `cd server`
    -type `npm i`
    -type `nodemon server.js`

- open terminal from parent directory and type `cd client`
    -type `npm i`
    -type `npm start`


## Walkthrough

This app allows the user to add items to an inventory and select the following fields:
    -`Item Name`
    -`Item Description`
    -`Image Link` (to display an image of the inventory item)
    -`Location` (city and state)
    -`Location in Warehouse`
    -`Quantity`
    -`Cost per item`
    -`The date you wish to put for added/updated/received`

Dashboard displays the following: 
     -Which items are currently considered surplus and which are considered low stock. `Default low stock is anything <10`.
    -The most recent three items that were edited/added
    -Each inventory location and the current amount of stock at each branch.

Clicking `Inventory` takes user to list of all stock items with all data listed.

Clicking on a specific `city/state` takes user to all stock for that location.

Header displays `Total Inventory Cost` across all pages(total of all inventory qty*all cost)

![Demo](https://user-images.githubusercontent.com/69319302/132560180-b7d48a71-3a40-4946-ac39-8104f84fe7e5.gif)

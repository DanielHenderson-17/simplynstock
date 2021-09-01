const StockController = require('../controllers/stock.controller');

module.exports = (app) => {
    app.get('/api/stock', StockController.getAll);
    app.get('/api/stock/dashboard', StockController.dashboard);
    app.get('/api/stock/location/:cityState', StockController.location);
    app.get('/api/stock/:id', StockController.getOne);
    app.post('/api/stock', StockController.create);
    app.put('/api/stock/:id', StockController.update);
    app.delete('/api/stock/:id', StockController.delete);
};
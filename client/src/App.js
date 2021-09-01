import './App.css';
import { Router } from '@reach/router';
import StockAll from './components/StockAll';
import StockNew from './components/StockNew';
import StockOne from './components/StockOne';
import Dashboard from './components/Dashboard';
import StockEdit from './components/StockEdit';
import Location from  './components/Location';

function App() {
  return (
    <div>
      <Router>
        <Dashboard path='/' />
        <StockAll path='/stock/inventory' />
        <StockNew path='/stock/new' />
        <Location path='/stock/location/:cityState' />
        <StockOne path='/stock/:id' />
        <StockEdit path='/stock/:id/edit' />
      </Router>
    </div>
  );
}

export default App;

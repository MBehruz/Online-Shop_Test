import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useRoutes,
} from "react-router-dom";
import ProductCard from "./pages/ProductCard";
import ProductTable from './pages/productTable'
import Home from './pages/Home';

function App() {

    const products = [
      { id: '1', fullName: 'Robin Wieruch' },
      { id: '2', fullName: 'Sarah Finnley' },
    ];
  
  return (
    <Router>
      <Routes>
      <Route exact path='/' element={ <Home/>}/>
        <Route exact path='/productCard' element={ <ProductCard /> } />
        <Route path='/table' element={<ProductTable/>}/>
      </Routes>
    </Router>
  );
}

export default App;
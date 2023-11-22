import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';


import FrontPage from './AppComponent/FrontPage/Frontpage';
// import BookingInfo from './AppComponent/BookingInfo';
// import BuyerInfo from './AppComponent/BuyerInfo';
// import PropertyInfo from './AppComponent/PropertyInfo';
// import SellerInfo from './AppComponent/SellerInfo';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}>
        
        
        </Route>
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;

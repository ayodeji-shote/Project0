import React from "react";
import {BrowserRouter,Routes,Route} from 'react-router-dom';
import './App.css';

import FrontPage from './AppComponent/Frontpage/Frontpage';
// import BookingInfo from './AppComponent/BookingInfo';
import Buyerpage from './AppComponent/Buyerpage/Buyerpage';
import Propertypage from './AppComponent/Propertypage/Propertypage';
import Sellerpage from './AppComponent/Sellerpage/Sellerpage';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<FrontPage/>}>
        <Route index element={<Propertypage/>}/> {/*This is the default component shown in the <Outlet> tag */}
        <Route path="property" element={<Propertypage/>}/>
        <Route path="seller" element={<Sellerpage/>}/>
        <Route path="buyer" element={<Buyerpage/>}/>
        </Route>
      </Routes>
    
    
    </BrowserRouter>
  );
}

export default App;

import { Link, useState, useEffect } from "react";
import "./Propertypage.css";
import PropertyForm from "./PropertyForm";
import React from "react";

// Method i made to change the garden value into a yes or no value
function Gardenvalue(props) {

    if (props.garden == 0){
        return <td>No</td>
    }
    else
    {
         return <td>Yes</td>
    }
}

    
function Propertypage() {
  // Fetch method to get data from the json and then display it as data
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/property")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);
  
  return (
    
    <><div className="PropForm">
        {PropertyForm(data)}
          {/* <PropertyForm/> */}
      </div>
      <div className="PropertyApp">
              <table>
                  <tbody>
                      <tr>
                          <th>Address</th>
                          <th>Garden</th>
                          <th>Status</th>
                          <th>Type</th>
                          <th>Price</th>
                      </tr>
                  </tbody>
                  <tbody>
                      {data.map((item) => (
                          <tr key={item.id}>
                              <td>{item.address}</td>
                              <Gardenvalue garden={item.garden} />
                              <td>{item.status}</td>
                              <td>{item.type}</td>
                              <td>{item.price}</td>
                          </tr>
                      ))}
                  </tbody>
              </table>
          </div></>
  );
}
export default Propertypage;

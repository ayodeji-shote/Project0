import { Link,useState,useEffect} from "react";
import "./Sellerpage";
import "./Sellerpage.css";
import React from "react";


function Sellerpage() {
    // Fetch method to get data from the json and then display it as data 
    const [data, setData] = useState([]);
    useEffect(() => {
            fetch("http://localhost:3000/seller")
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => console.log(err));
        }, []);      
  return (
    <div className="sellerapp">
           <table>
      <tbody>
                <tr>
                    <th>First Name</th>
                    <th>Surname </th>
                    <th>Address</th>
                    <th>Postcode</th>
                    <th>Phone Number</th>
                </tr>
                </tbody>
                <tbody>
       {data.map((item) => (
                <tr key={item.id}>
                    <td>{item.firstName}</td>
                    <td>{item.surname}</td>
                    <td>{item.address}</td>
                    <td>{item.postcode}</td>
                    <td>{item.phone}</td>
                    
                </tr>
            ))}
             </tbody>
            </table>
           
        </div>
  );
}
export default Sellerpage;
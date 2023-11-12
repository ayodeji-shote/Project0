import { Link } from "react-router-dom";
import "./Propertypage.css";
import React from "react";

const data = [
    { name: "Anom", age: 19, gender: "Male" },
    { name: "Megha", age: 19, gender: "Female" },
    { name: "Subham", age: 25, gender: "Male" },
];
function Propertypage() {
  return (
    <div className="PropertyApp">
             <table>
                <tbody>
                <tr>
                    <th>Name</th>
                    <th>Age</th>
                    <th>Gender</th>
                </tr>
                </tbody>
                <tbody>
                {data.map((val, key) => {
                    return (
                    
                        <tr key={key}>
                            <td key={val.key}>{val.name}</td>
                            <td key={val.key} >{val.age}</td>
                            <td key={val.key} >{val.gender}</td>
                        </tr>
                    )
                })}
                </tbody>
            </table>
        </div>
  );
}
export default Propertypage;
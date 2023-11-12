import { Link } from "react-router-dom";
import "./Sellerpage";
import "./Sellerpage.css";
import React from "react";

const data = [
    { name: "jenny", age: 19, gender: "Male" },
    { name: "mark", age: 19, gender: "Female" },
    { name: "juan", age: 25, gender: "Male" },
];
function Sellerpage() {
  return (
    <div className="sellerapp">
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
export default Sellerpage;
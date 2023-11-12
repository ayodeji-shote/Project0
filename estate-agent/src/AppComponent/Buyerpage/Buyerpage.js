import { Link } from "react-router-dom";
import "./Buyerpage";
import "./Buyerpage.css";
import React from "react";

const data = [
    { name: "Liam", age: 24, gender: "Male" },
    { name: "Anthony", age: 23, gender: "Male" },
    { name: "Toby", age: 25, gender: "Male" },
];
function Buyerpage() {
  return (
    <div className="Buyerapp">
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
export default Buyerpage;
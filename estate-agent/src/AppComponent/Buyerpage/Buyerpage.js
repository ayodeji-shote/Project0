import { useReducer,useState,useEffect} from "react";
import "./Buyerpage";
import BuyerForm from "./BuyerForm";
import "./Buyerpage.css";
import React from "react";

function Buyerpage() {
 // reducer used to keep track of the state of the buyer list then update it when something new gets added
 const buyerListReducer = (state, action) => {
  switch (action.type) {
      case "ADD":
          return state.concat(action.payload);
      case "SET":
          return action.payload;
      default:
          return state;
  }
};
const [buyersList, dispatch] = useReducer(buyerListReducer, []);
const [data, setData] = useState([]);
const [saving, setSaving] = useState(false);
// fetch method to post the data to the json file
const propertyadder = (newbuyer) => {
  if (buyersList.filter(data => data.firstName === newbuyer.firstName && data.surname === newbuyer.surname).length) {
      alert("buyer already exist");
      return;
  }
  setSaving(true);
  //fetches the json file
  fetch("http://localhost:3000/buyer", {
      // Species the method and the content type
      method: "POST",
      headers: {
          "Content-Type": "application/json",
      },
      // Converts the data to a string and then sends it to the json file while specifiying the content body
      body: JSON.stringify(newbuyer),
  }).then((res) => res.json())
     .then(newbuyer => {
          dispatch({type: "ADD", payload: newbuyer});
          setSaving(false);
      });
      


};

// Fetch method to get data from the json and then display it as data 

useEffect(() => {
      setData(true);
      fetch("http://localhost:3000/buyer")
      .then((res) => res.json())
      .then((buyers) => {
          dispatch({type: "SET", payload: buyers});
          setData(false);
      }
      
      )
      .catch((err) => console.log(err));
  }, []);   
  return (
    
    <>
    <BuyerForm adder={propertyadder} />
    <div className="buyerapp">
      <table className="table">
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
        {buyersList.map((item) => (
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
    </>
  );
}
export default Buyerpage;

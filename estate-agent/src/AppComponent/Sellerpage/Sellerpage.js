import { useReducer,useState,useEffect} from "react";
import "./Sellerpage";
import SellerForm from "./SellerForm";
import "./Sellerpage.css";
import React from "react";



// the method that adds the seller to the table 
function Sellerpage() {
    // reducer used to keep track of the state of the seller list then update it when something new gets added
    const sellerListReducer = (state, action) => {
        switch (action.type) {
            case "ADD":
                return state.concat(action.payload);
            case "SET":
                return action.payload;
            default:
                return state;
        }
    };
    const [sellersList, dispatch] = useReducer(sellerListReducer, []);
    const [data, setData] = useState([]);
    const [saving, setSaving] = useState(false);
    // fetch method to post the data to the json file
    const propertyadder = (newSeller) => {
        if (sellersList.filter(data => data.firstName === newSeller.firstName && data.surname === newSeller.surname).length) {
            alert("Seller already exist");
            return;
        }
        setSaving(true);
        //fetches the json file
        fetch("http://localhost:3000/seller", {
            // Species the method and the content type
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            // Converts the data to a string and then sends it to the json file while specifiying the content body
            body: JSON.stringify(newSeller),
        }).then((res) => res.json())
           .then(newSeller => {
                dispatch({type: "ADD", payload: newSeller});
                setSaving(false);
            });
            


    };
    
    // Fetch method to get data from the json and then display it as data 
    
    useEffect(() => {
            setData(true);
            fetch("http://localhost:3000/seller")
            .then((res) => res.json())
            .then((sellers) => {
                dispatch({type: "SET", payload: sellers});
                setData(false);
            }
            
            )
            .catch((err) => console.log(err));
        }, []);      
  return (
    <>
    <SellerForm adder={propertyadder} />
    <div className="sellerapp">
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
       {sellersList.map((value) => (
                <tr key={value.id}>
                    <td>{value.firstName}</td>
                    <td>{value.surname}</td>
                    <td>{value.address}</td>
                    <td>{value.postcode}</td>
                    <td>{value.phone}</td>
                    
                </tr>
            ))}
             </tbody>
            </table>
           
        </div>
        
        </>);
}
export default Sellerpage;
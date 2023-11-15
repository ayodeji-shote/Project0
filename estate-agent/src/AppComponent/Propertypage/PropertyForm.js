import React ,{ useRef } from "react";
import "./Propertypage"
import "./PropertyForm.css"


// Passing an object into the function which is generated from the form for the properties table.
// Properties form is as it says a property form, props is the properties of the object.
let PropertyForm = (props)=> {

    let searcher = props.searcher;
    // Refs are used to get the values from the form, the property form method is called with the parameter of this.props
    // props then uses the useRef hooks in order to get the value .
    const houseType = useRef();
    const houseStatus = useRef();
    const housePrice = useRef();
    const houseBedrooms = useRef();
    const houseBathrooms = useRef();
    const houseGarden = useRef();

    let searchvalues = () => {




    }

    
    let clearValues = () => {

    }
    return (
        <form>
            <div className="row">
                <h1>Property Search and Bookings</h1>
                <div className="form-group col">
                <label htmlFor="formType">Type</label>
                <select  className="form-select" id="type" ref={houseType} >
                    <option value="ANY">Any</option>
                    <option value="DETACHED">Detached</option>
                    <option value="SEMI">Semi</option>
                    <option value="APARTMENT">Apartment</option>
                </select>
                </div>
                <div className="form-group col">
                <label htmlFor="formPrice">Price</label>
                <select  className="form-select" ref={housePrice}>
                    <option value="0">Any</option>
                    <option value="50000">Up to 50000</option>
                    <option value="100000">Up to 100000</option>
                    <option value="200000">Up to 200000</option>
                    <option value="300000">Up to 300000</option>
                    <option value="400000">Up to 400000</option>
                </select>
                </div>
                <div className="form-group col">
                <label htmlFor="formStatus">Status</label>
                <select  className="form-select" ref={housePrice}>
                    <option value="0">Any</option>
                    <option value="SOLD">SOLD</option>
                    <option value="FOR SALE">FOR SALE</option>
                </select>
                </div>
                <div className="form-group col">
                <label htmlFor="numberOfBedrooms">Bedrooms</label>
                <select  className="form-select" ref={houseBedrooms}>
                    <option value="0">Any</option>
                    <option value="1">Minimum 1</option>
                    <option value="2">Minimum 2</option>
                    <option value="3">Minimum 3</option>
                    <option value="4">Minimum 4</option>
                    <option value="5">Minimum 5</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="numberOfBathrooms">Bathrooms</label>
                <select className="form-select" ref={houseBathrooms}>
                    <option value="0">Any</option>
                    <option value="1">Minimum 1</option>
                    <option value="2">Minimum 2</option>
                    <option value="3">Minimum 3</option>
                </select>
            </div>
            <div className="form-group col">
                <label htmlFor="numberOfGardens">Garden</label>
                <select className="form-select" ref={houseGarden}>
                    <option value="0">Any</option>
                    <option value="1">Yes</option>
                    <option value="0">No</option>
                </select>
            </div>
            <div className="text-center">
                <button type="button" className="btn btn-outline-success" onClick={searchvalues}>
                <i className="bi bi-patch-check-fill"></i>&nbsp;Search</button>
                &nbsp;
                <button type="button" className="btn btn-outline-danger" onClick={clearValues}> 
                <i className="bi bi-x-octagon-fill"></i>&nbsp;Clear</button>
            </div>
            </div>
        </form>);
};

export default PropertyForm;
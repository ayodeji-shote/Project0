import React,{useRef,useState} from "react";
import "./SellerForm.css";

const SellerForm = (props)=> {
    const adder = props.adder;
    // A react hook is used to keep track of the specific state the first is the value and the second is the setter 
    const firstName = useRef();
    const surname = useRef();
    const address = useRef();
    const phonenumber = useRef();
    const postcode = useRef();

    const [firstNameError, setFirstNameError] = useState();
    const [surnameError, setSurnameError] = useState();
    const [addressError, setAddressError] = useState();
    const [phonenumberError, setphonenumberError] = useState();
    const [postcodeError, setPostcodeError] = useState();

    const clearForm = () => {
        firstName.current.value = "";
        surname.current.value = "";
        address.current.value = "";
        postcode.current.value = "";
        phonenumber.current.value = "";
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        setFirstNameError(!firstName.current.value);
        setSurnameError(!surname.current.value);
        setAddressError(!address.current.value);
        setphonenumberError(!phonenumber.current.value);
        setPostcodeError(!postcode.current.value);

        if (firstName.current.value && surname.current.value && address.current.value && phonenumber.current.value && postcode.current.value) {
            adder({
                "firstName": firstName.current.value,
                "surname": surname.current.value,
                "address": address.current.value,
                "postcode": postcode.current.value,
                "phonenumber": phonenumber.current.value,
            });
            clearForm();
        }
    };

return ( 

<div className="form-container">
<form className="sform">
    
    <div className="row">
        <div className="form-group col-md-6">
            <label htmlFor="sellerFirstName">First Name</label>
            <input type="text" className="form-control" id="sellerFirstName" ref={firstName}/>
            {firstNameError ?
                <div className="text-danger"><i className="bi bi-exclamation-circle"/>First Name cannot
                    be blank</div> : ""}
        </div>
        <div className="form-group col-md-6">
            <label htmlFor="sellerSurname">Surname</label>
            <input type="text" className="form-control" id="sellerSurname" ref={surname}/>
            {surnameError ?
                <div className="text-danger"><i className="bi bi-exclamation-circle"/>Surname cannot be
                    blank</div> : ""}
        </div>
        <div className="form-group col-md-6">
        <label htmlFor="sellerAddress">Address</label>
        <input type="text" className="form-control" id="sellerAddress" ref={address}/>
        {addressError ?
            <div className="text-danger"><i className="bi bi-exclamation-circle"/>Address cannot be
                blank</div> : ""}
    </div>
        <div className="form-group col-md-6">
            <label htmlFor="sellerPostcode">Postcode</label>
            <input type="text" className="form-control" id="sellerPostcode" ref={postcode}/>
            {postcodeError ?
                <div className="text-danger"><i className="bi bi-exclamation-circle"/>
                    Postcode cannot be blank</div> : ""}
        </div>
        <div className="form-group col-md-6">
            <label htmlFor="sellerPhone">Phone</label>
            <input type="text" className="form-control" id="sellerPhone" ref={phonenumber}/>
            {phonenumberError ?
                <div className="text-danger"><i className="bi bi-exclamation-circle"/>Phone cannot be blank
                </div> : ""}
        </div>
        <div className="form-group col-md-6">
        <button type="submit" className="btn btn-primary" onClick={handleSubmit}><i
            className="bi bi-person-add"/>&nbsp;Add New Seller
        </button>
    </div>
    </div>
</form>
</div>);


}; 

export default SellerForm;
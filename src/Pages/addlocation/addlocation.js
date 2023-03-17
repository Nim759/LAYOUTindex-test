import React from 'react'
import { useState } from 'react';
import FormInput from '../../Components/Forminput/FormInput';
import NavBar from '../../Components/Navbar/NavBar';
import "./addlocation.css"

const Addlocation = () => {

  const [values, setValues] = useState({
    name: "",
    Address:"",
    phone:"",
   
   
  });

const inputs =[
 {
    id: 1,
      name: "name",
      type: "text",
      placeholder: "Location Name",
      errorMessage:
        "Provide a location name",
      label: "Location Name",
      required: true,
      unique: true,
 },

 
 {
  id: 2,
    name: "address",
    type: "text",
    placeholder: "Address",
    errorMessage:
      "Provide the address!",
    label: "Address",
   
}
,
 {
      id: 3,
      name: "phone",
      type: "phone",
      placeholder: "Phone Number",
      errorMessage: "Provide valid Phone number!",
      label: "Phone Number",
      pattern:"^{10}$"
    
 }
 

];





const onChange = (e) => {
  console.log(e);
  let name = e.target.name;
  let value = e.target.value;
  setValues({ ...values, [name]:value});
  
}

const handleSubmit = async(e) => {
  e.preventDefault();

  const { 
    name,
    address,
    phone
    } = values

  
};
  
  return (
    <div ><NavBar/>
      <div className="container">
      <form className= "locationform">
        <h1>ADD LOACTION</h1>
        {inputs.map((input)=>(
          <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              />
        ))}

        <button className='next'onClick={handleSubmit}>NEXT</button>

      </form>
    </div>
    </div>
  )
}

export default Addlocation
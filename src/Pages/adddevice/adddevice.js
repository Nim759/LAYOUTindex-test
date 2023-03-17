import React from 'react'
import { useState } from 'react';
import FormInput from '../../Components/Forminput/FormInput';
import DragDrop from '../../Components/DragDrop/dragPhoto';
import "./adddevice.css"

const Adddevice = () => {
    const [type , settype] = useState("");
    const [status,setstatus] = useState("");
  const [values, setValues] = useState({
    serialnumber: ""
   
  });

const inputs =[
 {
    id: 1,
      name: "serialnumber",
      type: "text",
      placeholder: "Serial Number",
      errorMessage:
        "Provide a Serial Number",
      label: "Serial Number",
      required: true,
      unique: true,
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
    serialnumber
    } = values

  
};
  
  return (
    <div className='containerdevice'>
      <form className= "deviceform">
        <h1>ADD DEVICE</h1>
        {inputs.map((input)=>(
          <FormInput
              key={input.id}
              {...input}
              value={values[input.name]}
              onChange={onChange}
              />  ))}
        
        <label><br/>Type<br/></label>
        <select value ={type} onChange={(e) =>settype(e.target.value)} required = "true" >
          <option >pos</option>
          <option>kisok</option>
          <option>signage</option>
        </select>

        <h4>Add Photos or drag and drop</h4>
        <DragDrop required="true"/>

        <label><br/>Status<br/></label>
        <select value ={status} onChange={(e) =>setstatus(e.target.value)} required = "true" >
          <option >Active</option>
          <option >inactive</option>
         
        </select>


        <button className='next'onClick={handleSubmit}>SUBMIT</button>

      </form>
    </div>
  )
}

export default Adddevice
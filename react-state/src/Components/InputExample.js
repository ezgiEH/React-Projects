import React from 'react';
import { useState } from 'react';

function InputExample() {
    const [form, setForm] = useState({name:"", surname: "",});
   
    const onChangeInput = (e) => {
        console.log(e.target.name) // name of the input field
        setForm({  ...form, [e.target.name]: e.target.value }); //  [e.target.name]: e.target.value is the same as form.name = e.target.value;
    }   

  return (
    <div className='App'>
        <h1>Input Example</h1>
        Name: <br />
        <input name="name" value={form.name} onChange={onChangeInput} />
        <br/>
        Surname: <br />
        <input name="surname" value={form.surname} onChange={onChangeInput} />
        <br/>
        {form.name} {form.surname}
    </div>
  )
}



export default InputExample;
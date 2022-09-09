import { useFormik} from "formik"
import '../App.css';

function App() {

  const {handleSubmit, handleChange, values} = useFormik({
    initialValues: {
      firstname: "Ezgi",
      lastname: "Hocaoğlu",
      email: "eh01@gmail.com",
      gender:"female",
      hobies: [],
      country:"turkey"
    },
    onSubmit: (values) => { console.log(values) }
  })
  
  return (
    <div className="App">
    <h1>Sign Up 1</h1>
   
    
        <form onSubmit={handleSubmit}>
        <label htmlFor="firstname">First Name</label>
        <input name="firstname" onChange={handleChange} value={values.firstname}/>

        <br />
        <br />

        <label htmlFor="lastname">Last Name</label>
        <input name="lastname" onChange={handleChange} value={values.lastname}/>

        <br />
        <br />

        <label htmlFor="email">Email</label>
        <input name="email" onChange={handleChange} value={values.email}/>

        <br />
        <br />
        
        <span>Male</span>
        <input 
        type="radio" 
        name="gender" 
        value="male" 
        onChange={handleChange}
        checked={values.gender === 'male'} />

        <span>Female</span>
        <input 
        type="radio" 
        name="gender" 
        value="female" 
        onChange={handleChange}
        checked={values.gender === 'female'} />
        
        <br />
        <br />

        <div>
        <input type="checkbox" name="hobies" value="football" onChange={handleChange}/>
        Football
        </div>
        
        <div>
        <input type="checkbox" name="hobies" value="Cinema" onChange={handleChange}/>
        Cinema
        </div>
        
        <div>
        <input type="checkbox" name="hobies" value="Photograpyh" onChange={handleChange}/>
        Photograpyh
        </div>
        
        <br />
        <br />

        <select name="country" value={values.country} onChange={handleChange}>
        <option value="turkey" >Turkey</option>
        <option value="germany" >Germany</option>
        <option value="france" >France</option>
        </select>
        <br />
        <br />

        <button type="submit">Submit</button>
        
        <br />
        <br />
        {JSON.stringify(values)}
       </form>  
      
     
    </div>
  );
}

export default App;

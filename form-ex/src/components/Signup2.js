import { useFormik} from "formik"
import '../App.css';
import validations from "./validations";

function App() {

  const {handleSubmit, handleChange, handleBlur, values, errors, touched} = useFormik({
    initialValues: {
      email: "",
      password: "",
      passwordConfirm: "",
    },
    onSubmit: (values) => { console.log(values) },
    validationSchema: validations,
  })
  
  return (
    <div className="App">
    <h1>Sign Up 2</h1>
   
        <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>
        <input 
        name="email" 
        onChange={handleChange} 
        value={values.email}
        onBlur={handleBlur}/>

        {errors.email && touched.email && <p className="error">{errors.email}</p>}

        <br />
        <br />

        <label htmlFor="password">Password</label>
        <input 
        name="password" 
        onChange={handleChange} 
        value={values.password}
        onBlur={handleBlur}/>

        {errors.password && touched.password && <p className="error">{errors.password}</p>}
        <br />
        <br />

        <label htmlFor="passwordConfirm">Password Confirm</label>
        <input 
        name="passwordConfirm" 
        onChange={handleChange} 
        value={values.passwordConfirm}
        onBlur={handleBlur}/>

        {errors.passwordConfirm && touched.passwordConfirm && <p className="error">{errors.passwordConfirm}</p>}
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

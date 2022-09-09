
import  {BrowserRouter as Router, Routes, Route, Link, Outlet} from "react-router-dom";
import AppCss from "./App.css";
import Home from './components/Home.js';
import About from './components/About.js';
import Users from './components/Users.js';
import User from './components/User.js';


function App () {
  return (
    <Router>
      <div>
        <nav >
          <ul className="menu">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/users">Users</Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path ="/" exact element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/users" element={<Users/>} />
          <Route path="/user/:id" element={<User/>} />
        </Routes>
      </div>
      <Outlet/>
    </Router>  
  );
}

export default App;


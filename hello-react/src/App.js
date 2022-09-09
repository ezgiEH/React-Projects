import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import User from './components/User';


const friends = [
{
  id:1,
  name: "Büşra",
},
{
  id:2,
  name: "Halime",
},
{
  id:3,
  name: "Fatma",
},
{
  id:4,
  name: "Leyla",
},
]

function App() {
  return (
    <div className="App">
      <Header />
      <User 
      name="Ezgi" 
      surname="Hocaoğlu" 
      age={26}
      isLoggedIn={true}
      friends={friends} 
      address={{
        title:'Çukurova/ADANA',
        zip: 11170
      }}
      />
    </div>  
  )
}

export default App;
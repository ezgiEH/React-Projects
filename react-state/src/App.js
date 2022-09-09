
import { useState } from 'react';
import './App.css';


function App() {
  const [name, setName] = useState('Ezgi');
  const [age, setAge] = useState(25);
  const [friends, setFriends] = useState(['Halime', 'Büşra', 'Sinem']);
  const [address, setAddress] = useState({title: 'ADANA', zip: parseInt("01170")});


  return (
    <div className="App">
      <h1>Hello {name}!</h1>
      <h2>{age}</h2>
      <br />
      <button onClick={()=> setName("Hocaoğlu")}>Change Name</button>
      <button onClick={()=> setAge("26")}>Change Age</button>
      <hr />
      <h2>Friends</h2>
      {
        friends.map((friend, index) => 
        <div key={index}>{friend}</div>)
      }
      <br />
      <button onClick={() => setFriends([...friends,'Fatma'])}>Add New Friend</button>
      <hr />
      <h2>Address</h2>
      <div>{address.title} {address.zip}</div>
      <br />
      <button onClick={() => setAddress({...address, title: 'İstanbul', zip: 34751})}>Change Address</button>
    
    </div>
  );
}



export default App;

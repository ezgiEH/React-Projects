import {NavLink, Outlet, useSearchParams} from 'react-router-dom';
import {useEffect, useState} from 'react';
import axios from 'axios';

function Users() {

    const [loading, setLoading] = useState(true);
    const [users, setUsers] = useState([])
    const [searchParams, setSearchParams] = useSearchParams();

    for(const entry of searchParams.entries()) {
        console.log(entry);
    }

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
        .then(res => setUsers(res.data))
        .finally(() => setLoading(false))
    }, [])

  return (
    <div className='container'>
      <nav>
        <h1>Users</h1>
        {loading ? <p>Loading...</p> : 
        <ul>
        {users.map((user) => (
             <li key={user.id}>
                 <NavLink to={`/user/${user.id}`}>{user.name}</NavLink>
             </li>
        ))}
     </ul>}
     </nav>
     <Outlet/>
    </div>
  )
}

export default Users
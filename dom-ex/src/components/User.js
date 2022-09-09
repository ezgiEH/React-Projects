import {useParams, Link} from 'react-router-dom'
import{useEffect, useState} from 'react'
import  axios from 'axios';


function User() {
    const [loading, setLoading] = useState(true);

    const {id} = useParams();

    const [user, setUser] = useState({});
    
    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then(res => setUser(res.data))
        .finally(() => setLoading(false))
    }, [id])

    return (
      <>
    <div className='user-container'>
        <h2 style={{padding:'1rem 2rem'}}>User Detail</h2>
        <h4>{user.id}. User</h4>
        {loading ? <p>Loading...</p> : 
        <ul>
            <li>Name: {JSON.stringify(user.name)}</li>
            <li>Username: {JSON.stringify(user.username)}</li>
            <li>Email: {JSON.stringify(user.email)}</li>
            <li>Phone: {JSON.stringify(user.phone)}</li>
            <li>Website: {JSON.stringify(user.website)}</li>
            
        </ul>
        }
    </div>
        <br />
        <br />
        <ul className='link' >
        <Link to={`/user/${parseInt(id) - 1}`}>Prev User ({parseInt(id) - 1})</Link> 
        <Link to='/users'>Back to Users</Link>
        <Link to={`/user/${parseInt(id) + 1}`}>Next User ({parseInt(id) + 1})</Link> 
        </ul>
    
    </>
  )
}

export default User

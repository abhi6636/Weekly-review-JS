import { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';


function RandomUser() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=50')
      .then(response => response.json())
      .then(data => setUserData(data.results))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
        <h1 className='bg-primary text-white'>Random User Data</h1>
        {userData.map(user => (
  <div key={user.login.uuid} className='d-inline-flex m-4'>
    <Card className="shadow mb-5 bg-body-tertiary rounded" style={{ width: '18rem' }}>
      <Card.Img variant="top" src={user.picture?.large} alt="User Profile"/>
      <Card.Body>
        <Card.Title>{user.name?.first} {user.name?.last}</Card.Title>
        <Card.Text>
        <p>Email: {user.email}</p>
        <p>Phone: {user.phone}</p>
        </Card.Text>
      </Card.Body>
    </Card>


  </div>
))}
    </div>
  );
}

export default RandomUser;
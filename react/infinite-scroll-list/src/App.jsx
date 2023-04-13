import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
  const [users, setUsers] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`https://randomuser.me/api/?page=${page}&results=10`);
      const newUsers = response.data.results;
      setUsers(prevUsers => [...prevUsers, ...newUsers]);
    };
    fetchData();
  }, [page]);

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const bodyHeight = document.body.offsetHeight;
    const scrollPosition = scrollY + windowHeight;

    if (scrollPosition >= bodyHeight) {
      setPage(prevPage => prevPage + 1);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <h1>Infinite Scroll List</h1>
      <ul>
        {users.map(user => (
          <li key={user.login.uuid}>
            <img src={user.picture.thumbnail} alt="thumbnail" />
            <p>{user.name.first} {user.name.last}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;

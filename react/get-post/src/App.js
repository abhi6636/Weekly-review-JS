import axios from "axios";
import React, { useEffect, useState } from "react";

const App = () => {
  const apiLink = 'https://jsonplaceholder.typicode.com/users'
  const [data, setData] = useState([])

  useEffect(() => {
    axios.get(apiLink).then((response) => {
      setData(response.data);
    });
  }, []);

  function dataChange() {
    axios.post(`${apiLink}/1`, { name: "No name" }).then((response) => {
      setData(response.data);

    }) .catch((err)=>{
      console.log(err.message);
    })
  }

  return (
    <>
      {data.length > 0 ? (
        data.map((value) => {
          return (
            <div key={value.id}>
              <h1>{value.name}</h1>
            </div>
          );
        })
      ) : (
        <p>Loading...</p>
      )}

      <button onClick={dataChange}>change all</button>
    </>
  );
};

export default App;

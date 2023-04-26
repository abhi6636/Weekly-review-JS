import React, { useEffect, useState } from "react";

function FetchData() {
    const [posts,setPosts] = useState([])

    useEffect(()=>{
        fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => response.json())
      .then(posts => setPosts(posts.splice(0,10)))

    },[])
    

  return <div>
    <h1 className="bg-primary text-white">Data from API</h1>
    {posts.map((post)=>
    <div key={post.id}>
    <h1>{post.title}</h1>
    <h3>{post.body}</h3>
    </div>
    )}
  </div>;
}

export default FetchData;

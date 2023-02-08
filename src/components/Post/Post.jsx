import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

export default function Post() {
  const { postId } = useParams();
  const [comments,setComments]=useState([])
  const [load,setLoad]=useState(false)
  useEffect(()=>{
    setLoad(true)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`).then(resp=>setComments(resp.data)).finally(()=>setLoad(false))
  },[postId])

  return (
    <div >
      <h1>Author: {postId}</h1>
      {
        load
          ?
            <img src="https://i.pinimg.com/originals/46/18/55/461855b29ae2060f319f225529145f7c.gif" alt="" />
        :<div>
          {comments.map(user=><div >
          <h3>name: {user.name}</h3>
          <h3>email: <a href={"mailto:"+user.email}>{user.email}</a></h3>
          <h3>body: {
          user.body.length <20
          ? user.body
          : user.body.slice(0,20) + '...'
          }</h3>
        </div>)}
        </div>
      }
    </div>
  );
}
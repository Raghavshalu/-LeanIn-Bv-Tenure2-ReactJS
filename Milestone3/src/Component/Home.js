import react, { useState,useEffect } from 'react';
// import Form from './Form';
import Desserts from './Desserts';
// import Navbar from './Navbar';
import useFetch from '../Custom_hooks/useFetch';
import { Link } from 'react-router-dom';
import { useParams } from "react-router";
function Home(){
    const {id}=useParams();
    const [name,setName]=useState("Red velvet");
    const {blog,changeBlog,error,setError}=useFetch('http://localhost:8000/Dessert');
    const handleDel=(id)=>{
      const reBlogged = blog.filter((b)=>b.id!==id);
      console.log(reBlogged);
      changeBlog(reBlogged);
    }
    useEffect(() => {
      return () => {
        console.log("delete")
      }
    },[blog])
    return(
        <div>
          <h1>Search For Tasty Desserts</h1>
          <div className="choose">
          <input type="text" placeholder="search your favourite Dessert" className="input" value={name} onChange={(e)=>{setName(e.currentTarget.value)}}></input><button className="search">Search</button></div>
       {error}
       {  blog===null?(<div>loading</div>): (blog.map((blog)=><Desserts id={blog.id} number={blog.number} name={blog.name} info={blog.info} Ingredients={blog.Ingredients} handleDel={handleDel}/>))}
       <h1>For order click <Link to="/Form">here</Link></h1>
       </div>
    )
}
export default Home;
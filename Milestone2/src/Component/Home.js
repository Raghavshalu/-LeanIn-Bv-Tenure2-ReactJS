import react, { useEffect } from 'react';
import {useState} from 'react';
import Form from './Form';
import Desserts from './Desserts';
import Navbar from './Navbar';
function Home(){
    const [blog, changeBlog] = useState([{id:'1',number:'one',name:'Mini Brownies',info:'73 Calories'},{id:'2',number:'two',name:'Chocolate Cake',info:'73 Calories'},{id:'3',number:'three',name:'Macaroons',info:'73 Calories'},{id:'4',number:'four',name:'Lemon Pie Shots',info:'73 Calories'},{id:'5',number:'five',name:'Coconut truffles',info:'73 Calories'},{id:'6',number:'six',name:'Red Velvet Cupcakes',info:'73 Calories'}])
    // const [blog,changeBlog] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:8000/Dessert')
    //       .then(response=>{
    //         return response.json()
    //       })
    //       .then((Data)=>{console.log(Data);
    //         changeBlog(Data)
    //       })
    //    },[]) 
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
       <Navbar/>
       {/* {  blog===null?(<div>loading</div>): (blog.map((blog)=><Desserts id={blog.id} number={blog.number} name={blog.name} info={blog.info} handleDel={handleDel}/>))} */}
       {blog.map((blog)=><Desserts id={blog.id} number={blog.number} name={blog.name} info={blog.info}  handleDel={handleDel}/>)}
       <Form></Form>       
       </div>
    )
}
export default Home;
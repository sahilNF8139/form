import Form from "./form.js";
import "./App.css"

// import { useState,useEffect } from "react";

function App(){
  return(
    
    <div className="mainheading">
      <h1>*Form VaLidation*</h1>
      <Form></Form>
    </div>
  )
};  
export default App

// function App(){

//   const[user,setuser]=useState([])

// useEffect(()=>{
//   fetch("https://jsonplaceholder.typicode.com/users") 
//   .then(Response=>Response.json())
//   .then(sahil=>setuser(sahil))
  

 
// },[])
// console.log(user);

  
// return(
// <div>
//   <h2 className="mainheading">Form Validation</h2>
//  {/* <Form></Form> */}
// <table>
//   <tr>
//     <th>Id:</th>
//     <th>Name:</th>
//     <th>Email:</th>
//   </tr>
  
//   {
 
//   user.map((item)=><tr>             
//     <td>{item.id}</td>
//     <td>{item.name}</td>
//     <td>{item.email}</td>
//   </tr>)}
//   {/* <tr>
//     <td>{item.id}</td>
//     <td>{item.name}</td>
//     <td>{item.email}</td>
//   </tr> */}
  
// </table>
// </div>);


// };
// export default App



import { useNavigate } from 'react-router-dom'
import './home.css'
import React, { useState } from 'react'
import Register from '../register/register'


export default function Home(){

const Admin_ID="Admin"
const Admin_Password="12345"
const [adminId,setAdminId]=useState("")
const [adminPassword,setAdminPassword]=useState("")
 const navigate=useNavigate()
 const [checkEmail,setCheckEmail]=useState("")
 const [checkPassword,setCheckPassword]=useState("")
 const CorrectEmail=localStorage.getItem("emailId")
 const CorrectPassword=localStorage.getItem("Password")

function NavigetAdmin(){
    if(adminId!=Admin_ID){
        alert("Invalid Id")
    }else if(adminPassword!=Admin_Password){
        alert("Invalid Password")
    }else{
        navigate("/Admin")
    }
}
 function handel(){
        if(checkEmail!=CorrectEmail){
            alert("Invalid Email")
        }else if(checkPassword!=CorrectPassword){
            alert("Invalid password")
        }else{
            navigate("/Student_Exam")
        }
 }
 
 return(
        <div class="Student_Admin">
        <div className='StudentLogin_Container'>
            <h1>if Student</h1>
        <form className="studentLogin">
            <label for="Email">Email id</label> 
           <input type="text" id="Email" placeholder="Enter Email:abcd@gmail.com" onChange={(e)=>setCheckEmail(e.target.value)}/>
           <br/>
            <label for="password">password</label> 
           <input id="password" placeholder="Enter Your Password" type='password'  onChange={(e)=>setCheckPassword(e.target.value)}/>
           <br/>
           <button onClick={handel} >Login</button>
           <button onClick={()=>navigate("/register")}>Resister</button>
        </form>
         </div>
        
        
        
        
        
         <div className='AdminLogin_Container'>
            <h1>If Admin</h1>
        <form className="AdminLogin">
            <label for="Email">Email id</label> 
           <input type="text" id="Email" placeholder="Enter Email:abcd@gmail.com" onChange={(e)=>setAdminId(e.target.value)}/>
              <br/>
              <label for="password">password</label> 
           <input id="password" placeholder="Enter Your Password" type='password'onChange={(e)=>setAdminPassword(e.target.value)} />
           <br/>
           <button onClick={NavigetAdmin}>Login</button>
        </form>
         </div>
               
        </div>
    )
}
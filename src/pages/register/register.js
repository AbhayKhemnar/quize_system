import { useState } from "react"
import { useNavigate } from "react-router-dom"


export default function Register(){
    const [email,setEmail]=useState("")
    const [mobile,setMobile]=useState("")
    const [password,setPassword]=useState("")



    const navigate=useNavigate()
    function handel(){
        if(email.length<3||email.length>30){
            alert("Invalide Email")
        }else if(mobile.length!=10){
            alert("Invalid Mobile number")
        }else if(password.length<8||password.length>15){
            alert("Invalid Password")
        }
        else{
            localStorage.setItem("emailId",email)
            localStorage.setItem("Mobile_No",mobile)
            localStorage.setItem("Password",password)
            navigate("/")
        }
    }
    return(
        <div>
            <h1>thisis Register page</h1>
            <div className="Register">
            <form className="RegisterForm">
            <label for="Email">Email id</label> 
           <input type="text" id="Email" placeholder="Enter Email:abcd@gmail.com" onChange={(e)=>setEmail(e.target.value)}/>
           <br/>
           <label for="Mobile">Mobile NO.</label> 
           <input  id="Mobile" placeholder="Enter Mobile No. 99999999999"onChange={(e)=>setMobile(e.target.value)}/>
           <br/>
            <label for="password">password</label> 
           <input id="password" placeholder="Enter Your Password" type='password'onChange={(e)=>setPassword(e.target.value)} />
           <br/>
           <button onClick={handel}>Resister</button>
        </form>
            </div>
        </div>
    )
}
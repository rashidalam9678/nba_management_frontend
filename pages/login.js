import styles from '../styles/Login.module.css'
import Navbar from "../component/Navbar"
import Footer from "../component/Footer"
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
export default function Login() {
  const [email, setEmail]=useState("");
  const [password, setPassword]=useState("");
  
  const HandleSubmit=(email, password)=>{
    const router=useRouter();
    router.push("profile");
    console.log("logged in");
  }
    return (
     

      
        <div>
          <Navbar/>
          <div className={styles.login_container}>
          <h2>NBA Record Management System Welcomes You</h2>
          
           <form className={styles.login_form} onSubmit={HandleSubmit("email", "password")}>
          
          <label htmlFor="email">Email address</label>
          <input type="email" value={email} name="email" id="email" placeholder="Enter email address" onChange={(e)=>setEmail(e.target.value)}  required/>
          <label htmlFor="password">Password</label>
          <input type="password" value={password} name="password" id="password" placeholder="Enter password" onChange={(e)=>setPassword(e.target.value)} required/>
          <Link href="#">Forget Password</Link>
          <button type="submit">LOG IN</button>
          
          
          
          <h5>Don't have an account?</h5>
          <Link href="/register">Register here</Link>
          </form>
          

          </div>
          <Footer/>
        </div>
     
    )
}

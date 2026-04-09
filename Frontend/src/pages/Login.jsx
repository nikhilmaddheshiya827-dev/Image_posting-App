import React, { useState } from 'react'
import { useNavigate } from "react-router-dom"
import { RiMailLine, RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import  '../App.css'



const Login = () =>{
  const navigate = useNavigate()
  const [show, setShow] = useState(false);
  
  
  return(
      
      
    <section className="w-full h-[100vh] bg-gray-900 flex items-center justify-center">
    <div className="w-[80%] h-[70%] rounded-3xl relative border-2 border-white bg-gradient-to-tl from-white/10 via-black to-white/20 backdrop-blur-xl overflow-hidden">
        
    <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent blur-[h-400px] opacity-60 absolute rotate-45 -top-[50%] -left-[20%]"></div>
  
        <div className="absolute w-[500px] h-[500px] top-[70%] right-0 bg-gradient-to-r from-cyan-800 to-blue-700 opacity-40 blur-3xl [clip-path:ellipse(60%_20%_at_50%_50%)] -rotate-20"></div>
        
      <div className="w-[200px] h-[200px] [clip-path:polygon(50%_0%,100%_30%,80%_100%,20%_100%,0%_30%)] absolute top-[40%] -right-[40%] bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent rotate-200"></div>
      
    <form className="flex items-center justify-center flex-col h-[45vh] relative gap-7">
    <h1 className="text-4xl pt-10 pb-12 text-white text-center">Login in</h1>
    
      <div className="relative flex items-center">
        
      <input className="text-white border-2 border-white py-1 px-4 rounded-2xl"
      type="email" name="email" placeholder="Enter Email" required/>
      <RiMailLine
        size={16}  
        color="white"  
        className="my-icon absolute right-4"  
    />
      </div>
      
      
    <div className="relative flex items-center">
      <input className="text-white border-2 border-white py-1 px-4 rounded-2xl"
        type={show ? "text" : "password"} name="password" placeholder="Enter Password" required/>
      <span className="absolute right-4 text-white" 
      onClick={()=> setShow(!show)} >
        {show ? <RiEyeLine size={18} /> : <RiEyeOffLine size={18} />}
      </span>
      </div>
      
      <button className="text-white border-2 border-white py-1 px-4 rounded-2xl bg-gradient-to-br from-cyan-500 to-black" type="submit">Login</button>
      
    </form>
      <div className="w-screen h-[1px] bg-white relative z-40 mt-10"></div>
      
      <div className="w-full relative z-40 flex items-center justify-center">
        <p className="text-xs text-white">Have not account??</p>
        <button className="text-xs text-green-400 border-none underline py-3" 
        onClick={()=>
        navigate("/")
      }>Sign up</button>
      </div>
      </div>
    </section>
  
    )
}
export default Login;
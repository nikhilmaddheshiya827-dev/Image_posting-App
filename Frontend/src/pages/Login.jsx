import React from 'react'
import { useNavigate } from "react-router-dom"
import { RiMailLine, RiEyeLine, RiEyeOffLine } from "@remixicon/react";
import  '../App.css'
const Login = () =>{
  return(
    <section className="w-full h-[100vh] bg-gray-900 flex items-center justify-center">
    <div className="w-[80%] h-[70%] rounded-3xl relative border-2 border-white bg-gradient-to-tl from-white/10 via-black to-white/20 backdrop-blur-xl overflow-hidden">
        
    <div className="w-full h-full bg-gradient-to-r from-cyan-500 via-blue-500 to-transparent blur-[h-400px] opacity-60 absolute rotate-45 -top-[50%] -left-[20%]"></div>
  
        <div className="absolute w-[500px] h-[500px] top-[70%] right-0 bg-gradient-to-r from-cyan-800 to-blue-700 opacity-40 blur-3xl [clip-path:ellipse(60%_20%_at_50%_50%)] -rotate-20"></div>
        
        
      </div>
    </section>
    )
}
export default Login;
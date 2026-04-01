import React, { useState } from 'react'
import axios from "axios"
import { useNavigate } from "react-router-dom"
import Lottie from "lottie-react"
import loading from "../Icon/loading.json"


const CreatePost = () =>{
  const navigate = useNavigate()
  
  const [span, setSpan] = useState("Post")
  const [opacity, setOpacity] = useState(1)
  const [display, setDisplay] = useState("none")
  const [clicked, setClicked] = useState(false)
  const handleSubmit = async (e)=>{
    e.preventDefault()
    
    setClicked(true)
    setSpan("Posting...")
    setOpacity(0.4)
    setDisplay("block")
    const formData = new FormData(e.target)
    axios.post("http://localhost:3000/api/post/create-post", formData)
    .then((res)=>{
      navigate("/")
    })
    
    .catch((err)=>{
      setSpan("Post")
      setOpacity(1)
      setDisplay("none")
      setClicked(false)
      alert("Error create post")
      console.log(err)
    })
  }
  
  
  
  return(
    <section className="w-[100vw] h-[100vh] bg-gray-950 flex items-center justify-center flex-col">
      
     <Lottie className="fixed"
            animationData={loading}
            style={{ width: 170,
            display: display,}}
          />
          
      <h1 className="text-5xl text-white border-b-2  pt-1 mb-7" style={{
        opacity: opacity,
      }}>Create Post</h1>
      
      <form className="flex items-center justify-center flex-col gap-4" onSubmit={handleSubmit} style={{
        opacity: opacity,
      }}>
        
        <input className="border-2 border-white text-xl pt-3 px-3 text-white w-[80%] rounded-[10px]" type="file" accept="image/*" name="image"/>
        
        <textarea className="border-2 border-white text-1xl pt-3 px-3 text-white w-[80%] rounded-[10px]" type="text" name="caption" placeholder="Enter Caption" required/>
        
        <button className="border-white border-2 text-2xl text-white pt-1 px-7 rounded-[10px]" type="Submit"
        disabled={clicked}
        >{span}</button>
      </form>
    </section>
    )
}


export default CreatePost
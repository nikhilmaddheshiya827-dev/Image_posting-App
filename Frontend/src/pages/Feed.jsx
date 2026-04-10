import React, { useState, useEffect } from 'react'
import { RiHeartFill, RiAddCircleLine } from "@remixicon/react"
import { motion, AnimatePresence } from "framer-motion"
import axios from "axios"
import Lottie from "lottie-react"
import errorIcon from "../Icon/errorIcon.json"
import {useNavigate} from 'react-router-dom'
const Feed = () => {
const navigate = useNavigate()
  const [posts, setPosts] = useState([])
  const [liked, setLiked] = useState({ id: null, show: false })

  const userId = "123" 


  useEffect(() => {
    axios.get("http://localhost:3000/api/post")
      .then(res => setPosts(res.data))
      .catch(() => setPosts([]))
  }, [])


     const handleDoubleClick = async (postId) => {
  try {
    const post = posts.find(p => p._id === postId)

    const alreadyLiked = post.likedBy?.includes(userId)


    if (alreadyLiked) {
setLiked({ id: postId, show: true })
   setTimeout(() => setLiked({ id: null, show: false }), 900)
      return
    }


   setLiked({ id: postId, show: true })
   setTimeout(() => setLiked({ id: null, show: false }), 900)


    setPosts(prev =>
      prev.map(p =>
        p._id === postId
          ? {
              ...p,
              likes: p.likes + 1,
              likedBy: [...(p.likedBy || []), userId]
            }
          : p
      )
    )


    const res = await axios.patch(
      `http://localhost:3000/api/post/like/${postId}`,
      { userId }
    )


    setPosts(prev =>
      prev.map(p => p._id === postId ? res.data : p)
    )

  } catch (err) {
    console.log(err)
  }
}

const handleLike = async (postId) => {
  try {
    
  
    setPosts(prev =>
      prev.map(p => {
        if (p._id === postId) {
          const isLiked = p.likedBy?.includes(userId)

          return {
            ...p,
            likes: isLiked ? p.likes - 1 : p.likes + 1,
            likedBy: isLiked
              ? p.likedBy.filter(id => id !== userId)
              : [...(p.likedBy || []), userId]
          }
        }
        return p
      })
    )

    const res = await axios.patch(
      `http://localhost:3000/api/post/like/${postId}`,
      { userId }
    )

    setPosts(prev =>
      prev.map(p => p._id === postId ? res.data : p)
    )

  } catch (err) {
    console.log(err)
  }
}

  return (
    <section className="w-screen h-screen bg-gray-950 pt-10">

      {posts.length > 0 ? (
        posts.map((post) => (

          <div key={post._id} className="w-full h-[60vh] mt-3 bg-gray-900 relative">


            <img
              src={post.image}
              alt={post.caption}
              className="w-full h-[80%] object-cover"
              onDoubleClick={() => handleDoubleClick(post._id)}
            />


            <AnimatePresence>
              {liked.show && liked.id === post._id && (
                <motion.div
                  key={liked.id + Date.now()} 
                  className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1.4, opacity: 1 }}
                  exit={{ scale: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <RiHeartFill className="w-20 h-20 text-pink-500" />
                </motion.div>
              )}
            </AnimatePresence>


            <div
              className="mx-3 mt-2 flex items-center justify-center flex-col w-6 cursor-pointer"
              onClick={() => handleLike(post._id)}
            >
              <RiHeartFill
                className="w-6 h-6"
                style={{
                  color: post.likedBy?.includes(userId)
                    ? "red"
                    : "white"
                }}
              />

              <span className="text-[10px] text-white">
                {post.likes || 0}
              </span>
            </div>


            <p className="px-3 text-gray-300 text-xs">
              {post.caption}
            </p>

          </div>

        ))
      ) : (
        <div className="h-full w-full flex items-center justify-center flex-col gap-8">

          <h1 className="text-white text-2xl">No post Available</h1>

          <Lottie
            animationData={errorIcon}
            style={{ width: 160 }}
          />

        </div>
      )}
 <div className="w-[30px] h-[30px] overflow-hidden fixed flex items-center justify-center top-1 right-1 rounded-full add_post" 
        onClick={()=>
        navigate("/create-post")} >

        <RiAddCircleLine
        size={36} 
        style={{color: "white",
          backgroundColor: ' black',
        }} />
        </div>
    </section>
  )
}

export default Feed
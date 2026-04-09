const postModel = require("../models/post.model")
const uploadFile = require("../services/storage.service")

// CREATE POST
exports.createPost = async (req, res) => {
  try {
    const result = await uploadFile(req.file.buffer)

    const post = await postModel.create({
      image: result.url,
      caption: req.body.caption
    })

    res.status(201).json({
      message: "Post Created successfully",
      post
    })

  } catch (err) {
    res.status(500).json({
      message: "Error create post"
    })
  }
}


// GET POSTS
exports.getPosts = async (req, res) => {
  try {
    const posts = await postModel.find().sort({ createdAt: -1 }) 
    res.json(posts)
  } catch (err) {
    res.status(500).json({ message: "Error fetching posts" })
  }
}


// LIKE / UNLIKE
exports.likePost = async (req, res) => {
  try {
    const { userId } = req.body
    const post = await postModel.findById(req.params.id) 

    const liked = post.likedBy.some(id => id.toString() === userId)

    if (liked) {
      post.likes--
      post.likedBy = post.likedBy.filter(
        id => id.toString() !== userId
      )
    } else {
      post.likes++
      post.likedBy.push(userId)
    }

    await post.save()

    res.json(post)

  } catch (err) {
    res.status(500).json({ message: "Error liking post" })
  }
}
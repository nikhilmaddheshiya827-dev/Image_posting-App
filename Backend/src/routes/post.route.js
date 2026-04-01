const express = require("express")
const multer = require("multer")
const { createPost, getPosts, likePost } = require("../controllers/post.controller")

const router = express.Router()

const upload = multer({ storage: multer.memoryStorage() })

router.post("/create-post", upload.single("image"), createPost)
router.get("/", getPosts)
router.patch("/like/:id", likePost)

module.exports = router
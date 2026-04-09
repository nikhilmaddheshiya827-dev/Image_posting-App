const mongoose = require("mongoose")

const postSchema = new mongoose.Schema({
  image: String,
  caption: String,
  likes: {
    type: Number,
    default: 0
  },
  likedBy: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User"
    }
  ]
}, { timestamps: true })

const postModel = mongoose.model("Post", postSchema)

module.exports = postModel
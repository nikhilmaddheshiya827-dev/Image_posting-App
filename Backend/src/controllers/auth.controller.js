const userModel = require("../models/auth.model")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")

// REGISTER
exports.registerUser = async (req, res) => {
  try {
    const { username, email, password } = req.body

    const exists = await userModel.findOne({ email })
    if (exists) {
      return res.status(400).json({
        message: "User Already Exists"
      })
    }

    const hashed = await bcrypt.hash(password, 10)

    const user = await userModel.create({
      username,
      email,
      password: hashed
    })

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_TOKEN,
      { expiresIn: "7d" }
    )

    res.json({
      message: "User Registered",
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    })

  } catch (err) {
    res.status(500).json({
      message: "Error in Register",
      err: err.message
    })
  }
}


// LOGIN
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    const user = await userModel.findOne({ email })

    if (!user) {
      return res.status(400).json({
        message: "Invalid Email"
      })
    }

    const match = await bcrypt.compare(password, user.password)

    if (!match) {
      return res.status(400).json({
        message: "Invalid Password"
      })
    }

    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_TOKEN,
      { expiresIn: "7d" }
    )

    res.json({
      token,
      user: {
        _id: user._id,
        username: user.username,
        email: user.email
      }
    })

  } catch (err) {
    res.status(500).json({
      message: err.message
    })
  }
}
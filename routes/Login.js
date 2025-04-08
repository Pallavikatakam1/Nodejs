const express = require('express');
const router = express.Router();
const { Sequelize, DataTypes } = require('sequelize');

// DB connection
const sequelize = new Sequelize('postgres://postgres:postgres@localhost:5432/postgres', {
  dialect: 'postgres',
  logging: false,
});

// User model
const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  }
}, {
  tableName: 'usertable',
  timestamps: false
});

// POST endpoint to check and return user
router.post('/', async (req, res) => {
  const { username, password } = req.body;

  // Check if values are sent
  if (!username || !password) {
    return res.status(400).json({ message: "Username and Password are required" });
  }

  try {
    // Authenticate connection
    await sequelize.authenticate();

    // Find user in DB
    const user = await User.findOne({ where: { username, password } });

    if (!user) {
      return res.json({ message: "User not found" });
    }

    // Validate username format
    const isValid = /^[a-z]+$/.test(username); 

    if (!isValid) {
      return res.json({ message: "Invalid Username. Only lowercase letters allowed." });
    }

    // Valid username and found Return userdetails
    return res.json({
      message: "Valid Username",
      user: {
        id: user.id,
        username: user.username,
        password: user.password,
      }
    });

  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({ message: "Server error", error: error.message });
  }
});

module.exports = router;

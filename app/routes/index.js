const express = require('express');
const userRoutes = require('./user-routes');
const authRoutes = require('./auth-routes');
const router = express.Router();

router.get("/api-status", (req, res) =>
  res.json({
    status: "ok",
  })
);

router.use('/user', userRoutes);
router.use('/auth', authRoutes);


module.exports = router;
const { Router } = require("express");
const router = Router();
const { checkAuth, timeStamp } = require("../middlewares/users.middleware");
const {
  creatUser,
  getAllUsers,
  getUser,
} = require("../controllers/users.controller");

// get all users
router.get("/", checkAuth, getAllUsers);

// get user by id
router.get("/:id", checkAuth, getUser);

// add new user
router.post("/", timeStamp, creatUser);

module.exports = router;

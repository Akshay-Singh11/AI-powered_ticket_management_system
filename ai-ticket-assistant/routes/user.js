import express from "express";
import { getUser, login, signup, logout, updateUser } from "../controllers/user.js"
import { authenticate } from "../middleware/auth.js"

const router = express.Router()
router.post("/update-user", authenticate, updateUser);
router.get("/users", authenticate, getUser)

router.post("/signup", signup)
router.post("/login", login)
router.post("/logout", logout)


export default router;
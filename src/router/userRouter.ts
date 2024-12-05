import express from "express"
const router = express.Router()
import { createUser, loginUser, demo } from "../controller/userController";

// userRouter.post("/register", createUser)
// userRouter.post('/login', loginUser)

router.route('/demo').get(demo)
router.route('/register').get(createUser)
router.route('/login').get(loginUser)

 
export default router;
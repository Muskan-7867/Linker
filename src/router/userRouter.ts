import express from "express";
const router = express.Router();
import { createUser, loginUser, demo } from "../controller/userController";
import { createLink, editLink } from "../controller/linkController";

// Demo route
router.route('/demo').get(demo);

// User registration and login routes
router.route('/register').post(createUser);
router.route('/login').post(loginUser);

// Link management routes
router.route('/links').post(createLink); // Create a link
router.route('/links/:id').put(editLink); // Edit an existing link

export default router;

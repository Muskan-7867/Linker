import express from "express";
const router = express.Router();
import { createLink, editLink } from "../controller/linkController";


// Link management routes

router.route('/create').post(createLink); // Create a link
router.route('/update').put(editLink); // Edit an existing link

export default router;

import express from "express";
const router = express.Router();
import {  createLinktree,  deleteLinktree,  editLinktree } from "../controller/linkController";


// Link management routes

router.route('/create').post(createLinktree); // Create a linktree
router.route('/update').put(editLinktree); // Edit an existing linktree
router.route('/delete/:id').delete(deleteLinktree);

export default router;

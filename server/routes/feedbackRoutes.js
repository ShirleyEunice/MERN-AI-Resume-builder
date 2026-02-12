import express from 'express';
import protect from "../middlewares/authMiddleware.js";
import { createFeedback } from '../controllers/feedbackController.js';
import { fetchFeedback } from '../controllers/feedbackController.js';


const router = express.Router();

router.post("/", protect, createFeedback);
router.get("/", fetchFeedback);
export default router;

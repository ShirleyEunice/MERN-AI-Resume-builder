import express from "express";
import { createResume, deleteResume, getResumeById, getResumeByIdPublic, updateResume } from "../controllers/resumeController.js";
import upload from "../configs/multer.js";
import protect from "../middlewares/authMiddleware.js";

const resumeRouter = express.Router();

resumeRouter.post('/create',protect, createResume);
resumeRouter.delete('/delete/:resumeId',protect, deleteResume);
resumeRouter.put('/update', upload.single('image'), protect, updateResume);
resumeRouter.get('/get/:resumeId',protect, getResumeById);
resumeRouter.get('/public/:resumeId', getResumeByIdPublic);

export default resumeRouter;
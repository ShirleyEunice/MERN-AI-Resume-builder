import Feedback from "../models/Feedback.js";
import User from "../models/User.js";


export const createFeedback = async(req, res)=>{
    try {
        const {message, rating} = req.body;

        const feedback = await Feedback.create({
            user: req.userId,
            message,
            rating
        })

        await User.findByIdAndUpdate(req.userId, { hasGivenFeedback: true });
        return res.status(201).json({message: "Feedback submitted successfully"}, feedback);
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}

export const fetchFeedback = async(req, res)=>{
    try {
        const feedbacks = await Feedback.find().populate("user", "name email").sort({ createdAt: -1 });
        res.json({ message: "Feedback fetched successfully", feedbacks });
    } catch (error) {
        res.status(500).json({message: error.message});
    }
}
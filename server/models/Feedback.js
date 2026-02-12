import mongoose from 'mongoose';

const feedbackSchema = new mongoose.Schema({
    user:{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: String,
    email: String,
    message: {
        type: String,
        required: true,
    },
    rating:{
        type: Number,
        min:1, 
        max: 5,
        default: 5
    },
}, {timestamps: true});

const Feedback = mongoose.model('Feedback', feedbackSchema);

export default Feedback;
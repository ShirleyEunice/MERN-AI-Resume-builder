import { response } from "express";
import imagekit from "../configs/imageKit.js";
import Resume from "../models/Resume.js";
import fs from "fs";

//controller for creating a new resume
// POST: /api/resumes/create
export const createResume = async(req, res)=>{
    try {
        const userId = req.userId;
        const {title} = req.body;

        //create new resume
        const newResume = await Resume.create({userId, title})
        return res.status(201).json({message: "Resume created successfully", resume: newResume});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


//controller for deleting a resume
// POST: /api/resumes/delete
export const deleteResume = async(req, res)=>{
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        await Resume.findOneAndDelete({userId, _id: resumeId})

        //return success message
        return res.status(200).json({message: "Resume deleted successfully"});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


//controller for get userResume by id
// POST: /api/resumes/get
export const getResumeById = async(req, res)=>{
    try {
        const userId = req.userId;
        const {resumeId} = req.params;

        const resume = await Resume.findOne({userId, _id: resumeId});
        if(!resume){
            return res.status(404).json({message: "Resume not found"})
        }
        //return success message
        resume.__v = undefined;
        resume.createdAt = undefined;
        resume.updatedAt = undefined
        return res.status(200).json({resume});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


//controller to get resume by id public
// GET: /api/resume/public
export const getResumeByIdPublic = async (req, res) => {
    try {
       const {resumeId} = req.params;
       const resume = await Resume.findOne({public: true, _id: resumeId}) 

       if(!resume){
        return res.status(404).json({message: "Resume not found"});
       }

       //return response
       return res.status(200).json({resume});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


// controller to update the resume
// PUT: /api/resume/update
export const updateResume = async(req, res)=>{
    try {
        const userId = req.userId;
        const {resumeId, resumeData, removeBackground}= req.body;
        const image = req.file;
        let resumeDataCopy;

        if(typeof resumeData === "string"){
            resumeDataCopy = JSON.parse(resumeData);
        }else{
            resumeDataCopy = structuredClone(resumeData);
        }

        if (image && image.buffer){
            const base64File = image.buffer.toString('base64');
            const response = await imagekit.files.upload({
                file: base64File,
                fileName: `resume_${Date.now()}.png`,
                folder: 'user-resumes',
                transformation: {
                    pre: 'w-300, h-300, fo-face, z-0.75' + (removeBackground ? ',e-bgremoval' : '')
                }
            });
            resumeDataCopy.personal_info.image = response.url;
        }
        
        const resume = await Resume.findOneAndUpdate({userId, _id: resumeId}, {$set: resumeDataCopy}, {new: true})
        
        //return response
        return res.status(200).json({message: "Saved successfully", resume});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}


// controller to geet all resumes of a user
// GET: /api/user/resumes`
export const getUserResumes = async(req, res)=>{
    try {
        const userId = req.userId;

        const resumes = (await Resume.find({userId})).toSorted({createdAt: -1});
        //return response
        return res.status(200).json({message: "Resumes fetched successfully", resumes});
    } catch (error) {
        return res.status(400).json({message: error.message})
    }
}
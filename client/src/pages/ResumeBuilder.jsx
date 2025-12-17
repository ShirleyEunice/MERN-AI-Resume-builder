import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { dummyResumeData } from '../assets/assets';
import { ArrowLeft, Briefcase, FileText, Folder, GraduationCap, Sparkle, Sparkles, User } from 'lucide-react';

const ResumeBuilder = () => {
  const {resumeId} = useParams();
  const [resumeData, setResumeData] = useState({
    _id: "",
    title: "",
    personal_info: {},
    professional_summary: "",
    experience: [],
    education: [],
    project: [],
    skills: [],
    template: "classic",
    accent_color: "#3B82F6",
    public: false,
  })

  const loadExisitingResume = async () =>{
    const resume = dummyResumeData.find(resume => resume._id === resumeId);
    if(resume){
      setResumeData(resume)
      document.title = resume.title
    }
  }

  const [activeSectionIndex, setActiveSectionIndex] = useState(0);
  const [removeBackground, setRemoveBackground] = useState(false);

  const sections = [
    {id: "personal", name: "Personal Info", icon: User},
    {id: "summary", name: "Summary", icon: FileText},
    {id: "experience", name: "Experience", icon: Briefcase},
    {id: "education", name: "Education", icon: GraduationCap},
    {id: "projects", name: "Projects", icon: Folder},
    {id: "skills", name: "Skills", icon: Sparkles},
  ];

  const activeSection = sections[activeSectionIndex];

  useEffect(()=>{
    loadExisitingResume()
  }, [])
  return (
    <div>
      <div className='max-w-7xl mx-auto px-4 py-6'>
        <Link to={"/app"} className='inline-flex gap-2 items-center text-slate-500 hover:text-slate-700 transition-all'>
        <ArrowLeft className='size-4'/> Back to Dashboard
        </Link>
      </div>
      <div className='max-w-7xl mx-auto px-4 pb-8'>
        <div className='grid lg:grid-cols-12 gap-8'>
          {/* Left Panel - Form */}
          <div className='relative lg:col-span-5 rounded-lg overflow-hidden'>
            <div className='bg-white rounded-lg shadow-sm border border-gray-200 p-6 pt-1'>
              {/* Progress bar using active section */}
              <hr className='absolute top-0 left-0 right-0 border-2 border-gray-200'></hr>
              <hr className='absolute top-0 left-0 h-1 bg-linear-to-r from-green-500 border-none transition-all duration-2000' 
              style={{width: `${activeSectionIndex * 100 / (sections.length -1)} %`}}></hr>
            </div>
          </div>

          {/* Right Panel - Form */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default ResumeBuilder

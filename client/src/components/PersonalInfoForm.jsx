import { Mail, MapPin, Phone, User, Linkedin, Globe, Workflow, BriefcaseBusiness } from 'lucide-react'
import React from 'react'

const PersonalInfoForm = ({data, onChange, removeBackground, setRemoveBackground}) => {

    const handleChange = (field, value)=>{
        onChange({...data, [field]: value})
    }

    console.log(data, "fafagsdgsg")

    const fields = [
      {
        key: "full_name",
        label: "Full Name",
        icon: User,
        type: "text",
        required: true,
      },
      {
        key: "email",
        label: "Email Address",
        icon: Mail,
        type: "text",
        required: true,
      },
      {
        key: "phone",
        label: "Phone Number",
        icon: Phone,
        type: "tel",
      },
      {
        key: "location",
        label: "Location",
        icon: MapPin,
        type: "text",
      },
      {
        key: "profession",
        label: "Profession",
        icon: BriefcaseBusiness,
        type: "text",
      },
      {
        key: "linkedin",
        label: "LinkedIn Profile",
        icon: Linkedin,
        type: "url",
      },
      {
        key: "website",
        label: "Personal website",
        icon: Globe,
        type: "url",
      },
    ];
  return (
    <div>
      <h3 className="text-lg font-semibold text-gray-900">
        Personal Information
      </h3>
      <p className="text-sm text-gray-600">
        Get Started with the personal information
      </p>
      <div className="flex items-center gap-2">
        <label htmlFor="user-image">
          {data.image ? (
            <img
              src={
                typeof data.image === "string"
                  ? data.image
                  : URL.createObjectURL(data.image)
              }
              alt="user-image"
              className="w-16 h-16 rounded-full object-cover mt-5 ring ring-slate-300 hover:opacity-80"
            ></img>
          ) : (
            <div className="inline-flex items-center gap-2 mt-5 text-slate-600 hover:text-slate-700 cursor-pointer">
              <User className="size-10 p-2.5 border rounded-full" />
              Upload user image
            </div>
          )}
          <input
          id='user-image'
            type="file"
            accept="image/jpeg, image/png"
            className="hidden"
            onChange={(e) => handleChange("image", e.target.files[0])}
          />
        </label>
        {typeof data.image === "object" && (
          <div className="flex flex-col gap-1 pl-4 text-sm">
            <p>Remove Background</p>
            <label className="relative inline-flex items-center cursor-pointer text-gray-900 gap-3">
              <input
                type="checkbox"
                className="sr-only peer"
                onChange={() => setRemoveBackground(prev => !prev)}
                checked={removeBackground}
              />
              <div className="w-9 h-5 bg-slate-300 rounded-full peer peer-checked:bg-green-600 transition-colors duration-200"></div>
              <span className="dot absolute left-1 top-1 w-3 h-3 bg-white rounded-full transition-transform duration-200 ease-in-out peer-checked:translate-x-4"></span>
            </label>
          </div>
        )}
      </div>
      {
        fields.map((field)=> {
          const Icon = field.icon;
          return(
            <div key={field.key} className='spcae-y-1 mt-5'>
              <label className='flex items-center gap-2 text-sm font-medium text-gray-600'>
                <Icon className="size-4"/>
                {field.label}
                {field.required && <span className='text-red-500'>*</span>}
              </label>
              <input type={field.type} value={data[field.key] || ""} onChange={(e)=>handleChange(field.key, e.target.value)} className='mt-1 w-full px-3 py-2 border-gray-300 rounded-lg focus:ring focus:ring-blue-500
              focus:border-blue-500 outline-none transition-colors text-sm' placeholder={`Enter your ${field.label.toLocaleLowerCase()}`} required={field.required}/>
            </div>
          )
        })
      }

    </div>
  );
}

export default PersonalInfoForm
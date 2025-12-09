

const CallToAction = () => {
  return (
    <div id='cta' className="border-y border-dashed border-slate-200 w-full max-w-5xl mx-auto px-16 mt-28">
            <div className="flex flex-col md:flex-row text-center md:text-left items-center justify-between gap-8 px-3 md:px-10 border-x border-dashed border-slate-200 py-20 -mt-10 -mb-10 w-full">
                <p className="text-xl font-medium max-w-sm">Build a Professional Resume That Helps You Stand Out and Get Hired</p>
                <button className="flex items-center gap-2 rounded-md py-3 px-5 bg-purple-600 hover:bg-purple-700 transition text-white">
                    <span>Get Started</span>
                </button>
            </div>
        </div>
  )
}

export default CallToAction

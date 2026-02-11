

const Footer = () => {
  return (
    <>
      <footer className="bg-linear-to-r from-white via-purple-300/60 to-white mt-40 text-[13px] text-gray-500">

  <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-20 py-16">

    {/* Top Section */}
    <div className="flex flex-col lg:flex-row justify-between gap-12">

      {/* LEFT SIDE */}
      <div className="flex flex-col sm:flex-row flex-wrap gap-10 sm:gap-16">

        {/* Logo */}
        <a href="https://prebuiltui.com" className="flex-shrink-0">
          <img src="/logo.svg" alt="logo" className="h-11 w-auto" />
        </a>

        {/* Link Columns */}
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-10 text-center sm:text-left">

          <div>
            <p className="text-slate-800 font-semibold">Product</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-purple-600">Home</a></li>
              <li><a href="/" className="hover:text-purple-600">Support</a></li>
              <li><a href="/" className="hover:text-purple-600">Pricing</a></li>
              <li><a href="/" className="hover:text-purple-600">Affiliate</a></li>
            </ul>
          </div>

          <div>
            <p className="text-slate-800 font-semibold">Resources</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-purple-600">Company</a></li>
              <li><a href="/" className="hover:text-purple-600">Blogs</a></li>
              <li><a href="/" className="hover:text-purple-600">Community</a></li>
              <li>
                <a href="/" className="hover:text-purple-600">
                  Careers
                  <span className="text-xs text-white bg-purple-600 rounded-md ml-2 px-2 py-1">
                    We’re hiring!
                  </span>
                </a>
              </li>
              <li><a href="/" className="hover:text-purple-600">About</a></li>
            </ul>
          </div>

          <div>
            <p className="text-slate-800 font-semibold">Legal</p>
            <ul className="mt-3 space-y-2">
              <li><a href="/" className="hover:text-purple-600">Privacy</a></li>
              <li><a href="/" className="hover:text-purple-600">Terms</a></li>
            </ul>
          </div>

        </div>
      </div>

      {/* RIGHT SIDE */}
      <div className="flex flex-col items-center lg:items-end text-center lg:text-right gap-3 max-w-xs mx-auto lg:mx-0">
        <p>
          Making every customer feel valued—no matter the size of your audience.
        </p>

        {/* Social Icons */}
        <div className="flex items-center gap-5 mt-2">
          {/* (keep your SVG icons here unchanged) */}
        </div>

        <p className="mt-3">© 2025 Resume Builder</p>
      </div>

    </div>
  </div>
</footer>

      <style>{`
                @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');
            
                * {
                    font-family: 'Poppins', sans-serif;
                }
            `}</style>
    </>
  );
}

export default Footer

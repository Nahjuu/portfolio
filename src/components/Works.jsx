import React from 'react';

const Works = () => {
  return (
    // Main container with responsive height
    <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
        {/* Section header */}
        <div className='pb-8 w-full flex justify-center items-center flex-col'>
          <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-cyan-500'>Work</p>
          <p className='py-6 text-2xl'>Check out some of my most recent work</p>
        </div>

        {/* Project grid */}
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
          {/* Project card with hover overlay */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className="group relative flex h-53 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-600/30 bg-slate-800/70 shadow-lg transition-all duration-500 hover:shadow-xl">
              <h1 className="text-4xl font-bold text-slate-100 transition-opacity duration-500 group-hover:opacity-0">
              Portfolio
              </h1>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-700/90 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                <span className="cursor-default mb-2 text-xl font-bold tracking-wider text-white">
                Personal Portfolio
                </span>
                <p className="cursor-default mb-6 text-center text-sm text-slate-200">
                Portfolio where I showcase all my skills and projects!
                </p>
                <div className="flex gap-4">
                  <a href="/" className="w-28 rounded-lg bg-slate-100 py-2 text-center font-bold text-slate-800 transition-colors hover:bg-white hover:text-black">
                  Demo
                  </a>
                  <a href="https://github.com/Nahjuu/portfolio" className="w-28 rounded-lg bg-slate-100 py-2 text-center font-bold text-slate-800 transition-colors hover:bg-white hover:text-black">
                  Code
                  </a>
                </div>
              </div>
            </div>
          </div>
          {/* next card */}
          <div className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className="group relative flex h-53 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-600/30 bg-slate-800/70 shadow-lg transition-all duration-500 hover:shadow-xl">
              <h1 className="text-4xl font-bold text-slate-100 transition-opacity duration-500 group-hover:opacity-0">
              Eatbud
              </h1>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-700/90 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                <span className="cursor-default mb-2 text-xl font-bold tracking-wider text-white">
                Eatbud (Soon to be deployed)
                </span>
                <p className="cursor-default mb-6 text-center text-sm text-slate-200">
                A calorie tracking app with AI integration that allows users to track their meals and get nutritional information.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/Nahjuu/Eatbud" className="w-28 rounded-lg bg-slate-100 py-2 text-center font-bold text-slate-800 transition-colors hover:bg-white hover:text-black">
                  Code
                  </a>
                </div>   
              </div>
            </div>
          </div>
          <div className='text-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
            <div className="group relative flex h-53 w-full flex-col items-center justify-center overflow-hidden rounded-xl border border-slate-600/30 bg-slate-800/70 shadow-lg transition-all duration-500 hover:shadow-xl">
              <h1 className="text-4xl font-bold text-slate-100 transition-opacity duration-500 group-hover:opacity-0">
              freeCodeCamp Projects
              </h1>
              <div className="absolute inset-0 flex flex-col items-center justify-center bg-slate-700/90 p-6 opacity-0 backdrop-blur-sm transition-opacity duration-500 group-hover:opacity-100">
                <span className="cursor-default mb-2 text-xl font-bold tracking-wider text-white">
                freeCodeCamp Certification Projects
                </span>
                <p className="cursor-default mb-6 text-center text-sm text-slate-200">
                A repository containing all the projects I completed for the freeCodeCamp certifications.
                </p>
                <div className="flex gap-4">
                  <a href="https://github.com/Nahjuu/freecodecamp-certification-projects" className="w-28 rounded-lg bg-slate-100 py-2 text-center font-bold text-slate-800 transition-colors hover:bg-white hover:text-black">
                  Code
                  </a>
                </div>   
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
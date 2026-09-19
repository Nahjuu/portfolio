import React from 'react';

const Skills = () => {
  return (
   
    <div name='skills' className='cursor-default w-full h-screen bg-[#0a192f] text-gray-300'>
      
      <div className='max-w-[1000px]  mx-auto p-4 flex flex-col justify-center w-full h-full'>
          
          <div className='w-full flex justify-center items-center flex-col mb-7'>
              <p className='text-4xl font-bold inline border-b-4 border-cyan-500 text-center'>Skills</p>
              <p className='py-4 text-2xl'>I enjoy diving into and learning new things. Here's a list of technologies I've worked with</p>
          </div> 
          <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>HTML</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>CSS</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>JavaScript</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>React</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>Node</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>Express</p>
              </div>
                <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>PostgreSQL</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>Python</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>Django</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>SQLite</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>TailwindCSS</p>
              </div>
              <div className='h-17 flex flex-col items-center justify-center rounded-xl border border-slate-600/30 bg-slate-800/70 py-4 font-semibold text-slate-100 shadow-md transition-all duration-500 hover:scale-110 hover:shadow-xl'>
                  <p className='my-4'>Testing</p>
              </div>
              
          </div>
      </div>
    </div>
  );
};

export default Skills;

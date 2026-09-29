import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import { Link } from "react-scroll"; // For smooth scrolling
import TerminalCard from './TerminalCard'; // Component to display random quotes
const Home = () => {
 return (
   // Main container - full screen with dark background
   <div name="home" className="cursor-default h-screen w-full bg-[#0a192f]">
     {/* Content wrapper - centers content and handles responsive layout */}
     <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
       {/* Left side - Text content */}
       <div className="flex flex-col justify-center h-full">
         {/* Main headline */}
         
         <h2 className="text-4xl sm:text-7xl font-bold text-white">
          Nahuel
         </h2>
         <h2 className="text-4xl sm:text-4xl font-bold text-white">
          Full Stack Developer
         </h2>
         {/* Brief introduction */}
         <p className="text-gray-500 py-4 max-w-md">
           Full-Stack Developer specializing in building modern web applications with 
           React, Node.js, and Supabase. Combining a scientific analytical mindset with 
           real-world communication to solve practical problems through clean code.
         </p>
         
         <div className="flex flex-wrap gap-4">
          
           <a
             rel="noopener noreferrer"
             target="_blank"
             href="https://livelink.cv/nahuel-sebastiansilvaiglesias"
             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
           >
             Check my CV
           </a>
         
           <Link
             to="work"
             smooth
             duration={500}
             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
           >
             View Projects
             <span className="group-hover:rotate-90 duration-300">
               <HiArrowNarrowRight size={25} className="ml-3" />
             </span>
           </Link>
         </div>
         
       </div>
       <div>
         <TerminalCard />
       </div>
     </div>
   </div>
 );
};

export default Home;

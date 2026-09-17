import React from 'react';
import { HiArrowNarrowRight } from 'react-icons/hi'; // Arrow icon for button
import { Link } from "react-scroll"; // For smooth scrolling
import RandomQuote from './RandomQuote'; // Component to display random quotes
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
          Full Stack Developer
         </h2>
         {/* Brief introduction */}
         <p className="text-gray-500 py-4 max-w-md">
           Very passionate about tech and developing from a young age.
           If there is a problem, there is a solution. 
           I love to learn and improve my skills, and I am always looking for new challenges.
         </p>
         {/* About Me button with hover effect */}
         <div>
           <Link
             to="about"
             smooth
             duration={500}
             className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
           >
             About Me
             <span className="group-hover:rotate-90 duration-300">
               <HiArrowNarrowRight size={25} className="ml-3" />
             </span>
           </Link>
         </div>
       </div>
       <div>
         <RandomQuote />
       </div>
     </div>
   </div>
 );
};

export default Home;

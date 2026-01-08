"use client";
import { useState } from "react";
import {Home,Info,Brain,Mail,Presentation,MessageSquare,Menu,X,Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const { setTheme, theme } = useTheme();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll function
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu
    }
  };

  return (
    <div className="fixed top-10 left-1/2 -translate-x-1/2 w-full max-w-6xl px-5 sm:px-10 text-black flex justify-between items-center py-3 rounded-lg bg-white/30 backdrop-blur-md shadow-2xl z-50">
     
      <h1 className="font-bold text-2xl">EINAKRL</h1>

    
      <ul className="hidden md:flex gap-10 font-medium">
        <li>
          <button 
            onClick={() => handleSmoothScroll('home')}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            <Home size={18} /> Home
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleSmoothScroll('about')}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            <Info size={18} /> About
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleSmoothScroll('skills')}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            <Brain size={18} /> Skills
          </button>
        </li>
        <li>
          <button 
            onClick={() => handleSmoothScroll('projects')}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            <Presentation size={18} /> Projects
          </button>
        </li>
        {/* <li>
          <button 
            onClick={() => handleSmoothScroll('testimonials')}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            <MessageSquare size={18} /> Testimonials
          </button>
        </li> */}
        <li>
          <button 
            onClick={() => handleSmoothScroll('contacts')}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            <Mail size={18} /> Contact
          </button>
        </li>

        <li className="relative">
          <button 
            onClick={() => setThemeOpen(!themeOpen)}
            className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer"
          >
            {theme === "light" ? (
              <Sun size={18} />
            ) : (
              <Moon size={18} />
            )}
          </button>
          {themeOpen && (
            <div className="absolute top-full right-0 mt-2  dark:bg-white border   rounded-md shadow-lg">
              <button onClick={() => { setTheme("light"); setThemeOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-700"><Sun size={18} /> Light</button>
              <button onClick={() => { setTheme("dark"); setThemeOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-700"><Moon size={18} /> Dark</button>
              {/* <button onClick={() => { setTheme("system"); setThemeOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-red-700"><Moon size={18} /> System</button> */}
            </div>
          )}
          </li>
      </ul>

      
      <button
        className="md:hidden p-2 rounded-md hover:bg-black/10 transition"
        onClick={toggleMenu}
      >
        {isOpen ? <X size={24} /> : <Menu size={24} />}
      </button>

    
      {isOpen && (
        <ul className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-11/12 bg-white/90 backdrop-blur-md shadow-lg rounded-lg flex flex-col gap-3 p-5 md:hidden">
          <li>
            <button
              onClick={() => handleSmoothScroll('home')}
              className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer w-full text-left"
            >
              <Home size={18} /> Home
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('about')}
              className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer w-full text-left"
            >
              <Info size={18} /> About
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('skills')}
              className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer w-full text-left"
            >
              <Brain size={18} /> Skills
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('projects')}
              className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer w-full text-left"
            >
              <Presentation size={18} /> Projects
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('testimonials')}
              className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer w-full text-left"
            >
              <MessageSquare size={18} /> Testimonials
            </button>
          </li>
          <li>
            <button
              onClick={() => handleSmoothScroll('contact')}
              className="flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer w-full text-left"
            >
              <Mail size={18} /> Contact
            </button>
          </li>
        </ul>
      )}
    </div>
  );
}
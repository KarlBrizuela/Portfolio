"use client";
import { useState, useEffect } from "react";
import {Home,Info,Brain,Mail,Presentation,MessageSquare,Menu,X,Moon, Sun} from "lucide-react";
import { useTheme } from "next-themes";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [themeOpen, setThemeOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Smooth scroll function
  const handleSmoothScroll = (targetId: string) => {
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu
      setThemeOpen(false); // Close theme menu
    }
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const navbar = document.getElementById('navbar');
      if (navbar && !navbar.contains(e.target as Node)) {
        setIsOpen(false);
        setThemeOpen(false);
      }
    };

    if (isOpen || themeOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, themeOpen]);

  const navItemClass = "flex items-center gap-2 px-3 py-2 rounded-md transition duration-300 hover:bg-black hover:text-white cursor-pointer text-sm sm:text-base";

  return (
    <nav id="navbar" className="fixed top-0 left-1/2 -translate-x-1/2 w-[95%] sm:w-auto px-2 sm:px-5 md:px-8 text-black dark:text-white py-2 sm:py-3 bg-transparent z-50">
      <div className="flex justify-between md:justify-start md:gap-8 lg:gap-12 items-center px-3 sm:px-6 rounded-lg bg-white/30 dark:bg-black/30 backdrop-blur-md shadow-2xl py-2 sm:py-3">
     
        <h1 className="font-bold text-xs sm:text-lg md:text-2xl whitespace-nowrap flex-shrink-0">EINAKRL</h1>

      
        <ul className="hidden md:flex gap-2 lg:gap-10 font-medium">
          <li>
            <button 
              onClick={() => handleSmoothScroll('home')}
              className={navItemClass}
            >
              <Home size={18} /> <span className="hidden lg:inline">Home</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleSmoothScroll('about')}
              className={navItemClass}
            >
              <Info size={18} /> <span className="hidden lg:inline">About</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleSmoothScroll('skills')}
              className={navItemClass}
            >
              <Brain size={18} /> <span className="hidden lg:inline">Skills</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleSmoothScroll('projects')}
              className={navItemClass}
            >
              <Presentation size={18} /> <span className="hidden lg:inline">Projects</span>
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleSmoothScroll('contacts')}
              className={navItemClass}
            >
              <Mail size={18} /> <span className="hidden lg:inline">Contact</span>
            </button>
          </li>

          {mounted && (
            <li className="relative">
              <button 
                onClick={() => setThemeOpen(!themeOpen)}
                className={navItemClass}
              >
                {theme === "light" ? (
                  <Sun size={18} />
                ) : (
                  <Moon size={18} />
                )}
              </button>
              {themeOpen && (
                <div className="absolute top-full right-0 mt-2 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                  <button onClick={() => { setTheme("light"); setThemeOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md text-sm"><Sun size={16} /> Light</button>
                  <button onClick={() => { setTheme("dark"); setThemeOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md text-sm"><Moon size={16} /> Dark</button>
                </div>
              )}
            </li>
          )}
        </ul>

        
        <button
          className="md:hidden p-2 rounded-md border border-black dark:border-white hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition duration-300 flex-shrink-0"
          onClick={toggleMenu}
          aria-label={isOpen ? "Close menu" : "Open menu"}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      
      {isOpen && (
        <div className="absolute top-full left-0 right-0 w-full md:hidden mt-0 bg-white/95 dark:bg-black/95 backdrop-blur-md shadow-lg">
          <ul className="flex flex-col gap-2 p-4">
            <li>
              <button
                onClick={() => handleSmoothScroll('home')}
                className={`${navItemClass} w-full justify-start`}
              >
                <Home size={18} /> Home
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll('about')}
                className={`${navItemClass} w-full justify-start`}
              >
                <Info size={18} /> About
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll('skills')}
                className={`${navItemClass} w-full justify-start`}
              >
                <Brain size={18} /> Skills
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll('projects')}
                className={`${navItemClass} w-full justify-start`}
              >
                <Presentation size={18} /> Projects
              </button>
            </li>
            <li>
              <button
                onClick={() => handleSmoothScroll('contacts')}
                className={`${navItemClass} w-full justify-start`}
              >
                <Mail size={18} /> Contact
              </button>
            </li>

            {mounted && (
              <li className="relative border-t border-black/10 dark:border-white/10 pt-2 mt-2">
                <button 
                  onClick={() => setThemeOpen(!themeOpen)}
                  className={`${navItemClass} w-full justify-start`}
                >
                  {theme === "light" ? (
                    <Sun size={18} />
                  ) : (
                    <Moon size={18} />
                  )}
                  <span>Theme</span>
                </button>
                {themeOpen && (
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-md shadow-lg">
                    <button onClick={() => { setTheme("light"); setThemeOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-t-md text-sm"><Sun size={16} /> Light</button>
                    <button onClick={() => { setTheme("dark"); setThemeOpen(false); }} className="flex items-center gap-2 w-full text-left px-4 py-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-b-md text-sm"><Moon size={16} /> Dark</button>
                  </div>
                )}
              </li>
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}
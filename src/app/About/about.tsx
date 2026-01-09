"use client";
import Image from "next/image";
import React from "react";
import AOS from "aos";                    
import "aos/dist/aos.css";
import { useEffect } from "react";
import { GraduationCap, Briefcase, MapPinHouse, Contact, Mail} from "lucide-react";

export default function About() {

   useEffect(() => {
      AOS.init({
        duration: 1000,
        once: true,
        easing: "ease-in-out",
      });
    }, []);
  
  return (
    <section id="about" className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-6 md:px-8">
      
        <h1 className="text-lg sm:text-xl font-bold text-center mb-8 md:mb-10 m-6 md:m-10">ABOUT ME</h1>
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-6xl mx-auto p-3 sm:p-6 lg:p-10 gap-6 lg:gap-8">
         
          <div  data-aos="fade-right"  className="flex justify-center w-full lg:w-auto" >
            <Image  src="/karl.png"  width={300}   height={300}   className="rounded-full object-cover shadow-lg w-56 h-56 sm:w-72 sm:h-72 lg:w-80 lg:h-80 border-6 sm:border-8 border-red-600"  alt="Karl Christian Brizuela" />
          </div>

         
          <div   data-aos="fade-left"    className="text-center lg:text-left flex-1 p-2 sm:p-4 lg:p-6"  >
            <h2 className="text-lg sm:text-2xl lg:text-3xl font-bold mb-4">I'm Karl Christian M. Brizuela</h2>
            <p className="text-xs sm:text-base leading-relaxed">
              I'm working as a Full stack Developer, I also a 4th year BSCS student. I'm still learning and exploring new technologies to enhance my skills and knowledge in the field of software development. 
            </p>
            <ul className="p-2 sm:p-4 lg:p-5 gap-3 sm:gap-4 lg:gap-5 flex flex-col text-xs sm:text-base">
              <li className="flex gap-3 items-center">
                <GraduationCap className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={28} />
                <span>University Of Caloocan City - Congress Campus</span>
              </li>

              <li className="flex gap-3 items-center">
                <Briefcase className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={28} />
                <span>Web Full Stack Developer - Intracode It Solutions</span>
              </li>

              <li className="flex gap-3 items-center">
                <MapPinHouse className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={28} />
                <span>Caloocan City - Philippines</span>
              </li>

              <li className="flex gap-3 items-center">
                <Contact className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={28} />
                <span className="text-xs sm:text-sm lg:text-base">+63 948 609 6986 | +63 993 632 2360</span>
              </li>

              <li className="flex gap-3 items-center">
                <Mail className="rounded-xl bg-black dark:bg-white light:bg-black text-white dark:text-black items-center p-1 flex-shrink-0" size={28} />
                <span className="text-xs sm:text-sm lg:text-base break-all">karl.brizuela01@gmail.com | brizuela.karlchristian.bscs2022@gmail.com</span>
              </li>
            </ul>
              
               <p className="text-xs sm:text-sm lg:text-base text-center lg:text-left">" I can do all things through God who strengthens me. "
                <span className="block text-center lg:text-left"> - Philippians 4:13</span>
               </p>


          </div>
        </div>
      
    </section>
  );
}
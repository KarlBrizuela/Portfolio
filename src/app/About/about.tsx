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
        <div className="flex flex-col md:flex-row items-center justify-between max-w-6xl mx-auto p-4 sm:p-6 md:p-10 gap-8">
         
          <div  data-aos="fade-right"  className="flex justify-center  w-full md:w-auto" >
            <Image  src="/karl.png"  width={300}   height={300}   className="rounded-full object-cover shadow-lg w-64 h-64 md:w-80 md:h-80 border-8 border-red-600"  alt="Karl Christian Brizuela" />
          </div>

         
          <div   data-aos="fade-left"    className="text-center md:text-left flex-1 p-2 sm:p-4 md:p-6"  >
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold mb-4">I'm Karl Christian M. Brizuela</h2>
            <p className="text-sm sm:text-base leading-relaxed">
              I'm working as a Full stack Developer, I also a 4th year BSCS student. I'm still learning and exploring new technologies to enhance my skills and knowledge in the field of software development. 
            </p>
            <ul className="p-2 sm:p-4 md:p-5 gap-4 md:gap-5 flex flex-col text-sm sm:text-base">
              <li className="flex gap-3 items-center">
                <GraduationCap className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={30} />
                <span>University Of Caloocan City - Congress Campus</span>
              </li>

              <li className="flex gap-3 items-center">
                <Briefcase className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={30} />
                <span>Web Full Stack Developer - Intracode It Solutions</span>
              </li>

              <li className="flex gap-3 items-center">
                <MapPinHouse className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={30} />
                <span>Caloocan City - Philippines</span>
              </li>

              <li className="flex gap-3 items-center">
                <Contact className="rounded-xl bg-black dark:bg-white text-white dark:text-black items-center p-1 flex-shrink-0" size={30} />
                <span className="text-xs sm:text-sm md:text-base">+63 948 609 6986 | +63 993 632 2360</span>
              </li>

              <li className="flex gap-3 items-center">
                <Mail className="rounded-xl bg-black dark:bg-white light:bg-black text-white dark:text-black items-center p-1 flex-shrink-0" size={30} />
                <span className="text-xs sm:text-sm md:text-base break-all">karl.brizuela01@gmail.com</span>
              </li>
            </ul>
              
               <p className="text-xs sm:text-sm md:text-base text-center md:text-left">"I can do all things through God who strengthens me."
                <span className="block text-center md:text-left">- Philippians 4:13</span>
               </p>


          </div>
        </div>
      
    </section>
  );
}
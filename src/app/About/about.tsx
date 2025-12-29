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
    <section id="about" className="min-h-screen bg-white py-20">
      
        <h1 className="text-black text-xl font-bold text-center mb-10 m-10">ABOUT ME</h1>
        <div className="flex flex-col md:flex-row items-center justify-between  p-10 gap-8">
         
          <div  data-aos="fade-right"  className="flex justify-center  w-full md:w-auto" >
            <Image  src="/karl.png"  width={300}   height={300}   className="rounded-full object-cover shadow-lg w-64 h-64 md:w-80 md:h-80 border-8 border-red-600"  alt="Karl Christian Brizuela" />
          </div>

         
          <div   data-aos="fade-left"    className="text-black  text-center md:text-left flex-1 p-5"  >
            <h2 className="text-2xl md:text-3xl font-bold mb-4">I'm Karl Christian M. Brizuela</h2>
            <p className="text-gray-600 leading-relaxed">
              I'm working as a Full stack Developer, I also a 4th year BSCS student. I'm still learning and exploring new technologies to enhance my skills and knowledge in the field of software development. 
            </p>
            <ul className="p-5 gap-5 flex flex-col">
              <li className="flex gap-3 items-center">
                <GraduationCap className="rounded-xl bg-black text-white items-center p-1" size={30} />
                University Of Caloocan City - Congress Campus
              </li>

              <li className="flex gap-3 items-center">
                <Briefcase className="rounded-xl bg-black text-white items-center p-1" size={30} />
                Web Full Stack Developer - Intracode It Solutions
              </li>

              <li className="flex gap-3 items-center">
                <MapPinHouse className="rounded-xl bg-black text-white items-center p-1" size={30} />
                Caloocan City - Philippines
              </li>

              <li className="flex gap-3 items-center">
                <Contact className="rounded-xl bg-black text-white items-center p-1" size={30} />
                +63 948 609 6986 | +63 993 632 2360
              </li>

              <li className="flex gap-3 items-center">
                <Mail className="rounded-xl bg-black text-white items-center p-1" size={30} />
                karl.brizuela01@gmail.com
              </li>
            </ul>
              
               <p className="text-gray-600 text-center">“I can do all things through God who strengthens me.”
                <span className="block text-center">- Philippians 4:13</span>
               </p>


          </div>
        </div>
      
    </section>
  );
}
"use client";
import Image from "next/image";
import Link from "next/link";
import Navbar from "./components/Navbar";
import TextType from "./components/texttype";
import AOS from "aos";                    
import "aos/dist/aos.css";
import { useEffect, useState } from "react";
import About from "./About/about";
import Skills from "./Skills/skills";
import Projects from "./Projects/projects";

import Contact from "./Contact/contact";
import { Facebook, Instagram, Github, Linkedin, Images } from "lucide-react";

export default function Home() {
   const [isOpen, setIsOpen] = useState(false);

   useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      easing: "ease-in-out",
    });
  }, []);

  const handleSmoothScroll = (targetID: string) => {
    const targetElement = document.getElementById(targetID);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu
    }
  }

  return (
    <>
      <Navbar />

      <div id="home" className=" min-h-screen w-full p-4 sm:p-6 md:p-8 flex flex-col md:flex-row items-center justify-center gap-4 md:gap-4 lg:gap-20">
        <div  data-aos="fade-right" className=" grid items-center max-w-5xl  h-auto m-5 p-5 sm:p-2">
          <p className="text-red-600 text-xl sm:text-2xl md:text-3xl font-bold text-center md:text-left">
            Hi, It's me
          </p>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold text-center md:text-left mt-2">
            Karl Christian M. Brizuela
          </h1>

          <span className="flex flex-wrap justify-center md:justify-start font-semibold gap-2 text-1xl sm:text-3xl md:text-4xl mt-4">
            i am Currently
            <TextType
              className="text-red-600 font-semibold text-2xl sm:text-3xl md:text-4xl"
              text={["Full Stack Developer","Freelancer","Project Manager", ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </span>

          <p className="text-center md:text-left text-sm sm:text-base md:text-lg p-2 mt-4 leading-relaxed">
            I’m passionate about working with people and getting things done. I
            believe in leading by example, supporting my team, and turning
            challenges into opportunities. Collaboration, dedication, and a
            positive mindset guide everything I do.
          </p>

          <div className=" flex flex-wrap justify-center sm:justify-start p-2">
            <ul className="flex flex-wrap gap-3 sm:gap-4 justify-center md:justify-start">
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://www.facebook.com/karlchristian.mbrizuela">
                  <Facebook size={20} />
                </a>
              </li>
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://www.instagram.com/karl_brizuela/">
                  <Instagram size={20} />
                </a>
              </li>
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://github.com/KarlBrizuela">
                  <Github size={20} />
                </a>
              </li>
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://www.linkedin.com/in/karl-christian-m-brizuela-144795374">
                  <Linkedin size={20} />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center md:justify-start mt-6">
            <button
              onClick={() => handleSmoothScroll('contacts')}
              className="border p-2 px-4 sm:px-6 rounded-4xl transition hover:bg-red-600 hover:text-white flex justify-center text-sm sm:text-base"
            >
              get in touch
            </button>
            <Link
              className="border p-2 px-4 sm:px-6 rounded-4xl transition hover:bg-red-600 hover:text-white flex justify-center text-sm sm:text-base"
              href="/karlcv.pdf"
            >
              Download CV
            </Link>
          </div>

          

        </div>

        <div data-aos="fade-left" className=" hidden md:flex flex-1 justify-center w-full md:w-auto mt-6 md:mt-0">
          <Image src="/karl.png" width={300} height={400} alt="Karl Christian Brizuela" className="rounded-4xl object-cover shadow-lg border-8 border-red-600 w-48 h-64 sm:w-64 sm:h-80 md:w-80 md:h-full"/>
        </div>
        
      </div>

      <section id="about">
       <About />
      </section>

      <section id="skills">
        <Skills />
      </section>

      <section id="projects">
        <Projects />
      </section>

      {/* <section id="testimonials">
        <Testimonials/>
      </section> */}

      <section id="contact">
        <Contact/>
      </section>

    
    </>
  );
}

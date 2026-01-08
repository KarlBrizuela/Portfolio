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
import Testimonials from "./Testimonials/testimonials";
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

      <div id="home" className="min-h-screen    p-5 flex sm:flex-col sm:flex-row items-center justify-center gap-0">
        <div  data-aos="fade-right" className="  grid items-center max-w-3xl w-full m-5 h-auto p-3">
          <p className="text-red-600 text-2xl font-bold text-center sm:text-left">
            Hi, It's me
          </p>
          <h1 className=" text-5xl font-semibold text-center sm:text-left">
            Karl Christian M. Brizuela
          </h1>

          <span className=" flex flex-wrap justify-center sm:justify-start font-semibold gap-2 text-4xl">
            Future
            <TextType
              className="text-red-600 font-semibold text-5xl"
              text={["Full Stack Developer","Software Engineer","Project Manager", ]}
              typingSpeed={75}
              pauseDuration={1500}
              showCursor={true}
              cursorCharacter="|"
            />
          </span>

          <p className="text-center sm:text-left text-1xl p-2">
            I’m passionate about working with people and getting things done. I
            believe in leading by example, supporting my team, and turning
            challenges into opportunities. Collaboration, dedication, and a
            positive mindset guide everything I do.
          </p>

          <div className=" flex flex-wrap justify-center sm:justify-start p-2">
            <ul className="flex flex-wrap gap-5 justify-center sm:justify-start">
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://www.facebook.com/karlchristian.mbrizuela">
                  <Facebook />
                </a>
              </li>
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://www.instagram.com/karl_brizuela/">
                  <Instagram />
                </a>
              </li>
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://github.com/KarlBrizuela">
                  <Github />
                </a>
              </li>
              <li className="border rounded-4xl p-2 transition hover:bg-red-600 hover:text-white">
                <a href="https://www.linkedin.com/in/karl-christian-m-brizuela-144795374">
                  <Linkedin />
                </a>
              </li>
            </ul>
          </div>

          <div className="flex flex-col sm:flex-row border-black justify-center sm:justify-start">
            <button
              onClick={() => handleSmoothScroll('contacts')}
              className=" border m-3 w-50 p-2 rounded-4xl transition hover:bg-red-600 hover:text-white flex justify-center"
            >
              get in touch
            </button>
            <Link
              className=" border m-3 w-50 p-2 rounded-4xl transition hover:bg-red-600 hover:text-white flex justify-center"
              href=""
            >
              Download CV
            </Link>
          </div>

          

        </div>

        <div data-aos="fade-left" className=" flex-1 flex justify-center  max-w-2xl ">
          <Image src="/karl.png" width={300} height={400} className="rounded-4xl object-cover shadow-lg border-8 border-red-600"/>
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

      <section id="testimonials">
        <Testimonials/>
      </section>

      <section id="contact">
        <Contact/>
      </section>

    
    </>
  );
}

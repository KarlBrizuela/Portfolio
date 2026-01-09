"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import BounceCards from './BounceCards.tsx';

export default function Projects() {
    const [transformStyles, setTransformStyles] = useState<string[]>([]);

    const images = [
      "/Checkitup.png",
      "/Ramen.png",
     "/amoure.png",
     "/maxtel.png",
     "/mrf.png",
     "/multitop.png",
     "/powerlug.png",
     "/imajica.png",
     "/albertos.png",
     "/Cuisining.png"
    ];

    useEffect(() => {
      const getResponsiveTransforms = () => {
        const width = window.innerWidth;
        if (width < 640) {
          // Mobile - smaller offsets
          return [
            "rotate(-12deg) translate(-120px, 0px)",
            "rotate(-8deg) translate(-80px, 0px)",
            "rotate(-4deg) translate(-40px, 0px)",
            "rotate(-2deg) translate(-20px, 0px)",
            "rotate(0deg) translate(0px, 0px)",
            "rotate(2deg) translate(20px, 0px)",
            "rotate(4deg) translate(40px, 0px)",
            "rotate(8deg) translate(80px, 0px)",
            "rotate(12deg) translate(120px, 0px)",
            "rotate(16deg) translate(160px, 0px)"
          ];
        } else if (width < 1024) {
          // Tablet
          return [
            "rotate(-12deg) translate(-200px, 0px)",
            "rotate(-8deg) translate(-150px, 0px)",
            "rotate(-4deg) translate(-100px, 0px)",
            "rotate(-2deg) translate(-50px, 0px)",
            "rotate(0deg) translate(0px, 0px)",
            "rotate(2deg) translate(50px, 0px)",
            "rotate(4deg) translate(100px, 0px)",
            "rotate(8deg) translate(150px, 0px)",
            "rotate(12deg) translate(200px, 0px)",
            "rotate(16deg) translate(250px, 0px)"
          ];
        } else {
          // Desktop - larger offsets
          return [
            "rotate(-12deg) translate(-320px, 0px)",
            "rotate(-8deg) translate(-210px, 0px)",
            "rotate(-4deg) translate(-140px, 0px)",
            "rotate(-2deg) translate(-70px, 0px)",
            "rotate(0deg) translate(0px, 0px)",
            "rotate(2deg) translate(70px, 0px)",
            "rotate(4deg) translate(140px, 0px)",
            "rotate(8deg) translate(210px, 0px)",
            "rotate(12deg) translate(320px, 0px)",
            "rotate(16deg) translate(400px, 0px)"
          ];
        }
      };

      setTransformStyles(getResponsiveTransforms());

      const handleResize = () => {
        setTransformStyles(getResponsiveTransforms());
      };

      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }, []);


    return (
        <>
        <section id="projects" className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-6 md:px-8 flex flex-col items-center justify-center overflow-hidden">
       <h2 className="text-lg sm:text-xl font-bold text-center m-6 md:m-10 mb-10">PROJECTS</h2>
         

         <div className="w-full flex justify-center overflow-x-auto md:overflow-visible">
         <BounceCards
         
  className="custom-bounceCards"
  images={images}
  containerWidth={1400}
  containerHeight={450}
  animationDelay={2}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
/>
         </div>
        </section>
        </>
    );

}
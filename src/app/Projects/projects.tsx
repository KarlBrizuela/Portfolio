"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { X } from "lucide-react";
import BounceCards from './BounceCards.tsx';

export default function Projects() {
    const [transformStyles, setTransformStyles] = useState<string[]>([]);
    const [selectedCard, setSelectedCard] = useState<{index: number; image: string} | null>(null);

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
          // Desktop - smaller offsets for smaller cards
          return [
            "rotate(-12deg) translate(-240px, 0px)",
            "rotate(-8deg) translate(-160px, 0px)",
            "rotate(-4deg) translate(-100px, 0px)",
            "rotate(-2deg) translate(-50px, 0px)",
            "rotate(0deg) translate(0px, 0px)",
            "rotate(2deg) translate(50px, 0px)",
            "rotate(4deg) translate(100px, 0px)",
            "rotate(8deg) translate(160px, 0px)",
            "rotate(12deg) translate(240px, 0px)",
            "rotate(16deg) translate(300px, 0px)"
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
  containerWidth={500}
  containerHeight={450}
  animationDelay={2}
  animationStagger={0.08}
  easeType="elastic.out(1, 0.5)"
  transformStyles={transformStyles}
  enableHover={true}
  onCardClick={(index, image) => setSelectedCard({index, image})}
/>
         </div>

         {selectedCard && (
           <div className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-4">
             <div className="relative bg-white dark:bg-gray-900 rounded-2xl max-w-2xl w-full max-h-[80vh] overflow-auto">
               <button
                 onClick={() => setSelectedCard(null)}
                 className="absolute top-4 right-4 p-2 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-full transition z-10"
               >
                 <X size={24} />
               </button>
               <img 
                 src={selectedCard.image} 
                 alt="Selected project" 
                 className="w-full h-auto object-cover rounded-2xl"
               />
             </div>
           </div>
         )}
        </section>
        </>
    );

}
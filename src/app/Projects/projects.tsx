"use client";
import Image from "next/image";
import BounceCards from './BounceCards.tsx';

export default function Projects() {
    const images = [
     "/amoure.png",
     "/maxtel.png",
     "/mrf.png",
     "/multitop.png",
     "/powerlug.png",
     "/imajica.png",
     "/albertos.png"
    ];

    const transformStyles = [
  "rotate(-30deg) translate(-320px, -60px)",
  "rotate(-18deg) translate(-160px, -40px)",
  "rotate(-8deg) translate(-80px, -10px)",
  "rotate(0deg) translate(0px, 20px)",
  "rotate(8deg) translate(80px, -10px)",
  "rotate(18deg) translate(160px, -40px)",
  "rotate(30deg) translate(320px, -60px)"
];


    return (
        <>
        <section id="projects" className="min-h-screen bg-white py-20 flex flex-col items-center justify-center">
       <h2 className="text-xl font-bold text-black text-center m-10 mb-10">PROJECTS</h2>
         

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
        </section>
        </>
    );

}
"use client";
import Image from "next/image";
import BounceCards from './BounceCards.tsx';

export default function Projects() {
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

    const transformStyles = [
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


    return (
        <>
        <section id="projects" className="min-h-screen py-20 flex flex-col items-center justify-center ">
       <h2 className="text-xl font-bold  text-center m-10 mb-10">PROJECTS</h2>
         

         <BounceCards
         
  className="custom-bounceCards "
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
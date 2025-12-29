"use client";
import Image from "next/image";
import {  ShieldCheck, Briefcase,BarChart3, Lightbulb, MessageCircle, Users, }from "lucide-react";
import AOS from "aos";
export default function Skills() {

    const skills = [
 { title: "Problem-solving", icon: ShieldCheck },
  { title: "Project Management", icon: Briefcase },
  { title: "System Analysis", icon: BarChart3 },
  { title: "Adaptability", icon: Lightbulb },
  { title: "Communication", icon: MessageCircle },
  { title: "Teamwork", icon: Users },
    ];

    const programming = [
      {title: "HTML", src:"/html.jpg"},
      {title: "CSS", src:"/css.jpg"},
      {title: "JavaScript", src:"/javascript.jpg"},
      {title: "React Js", src:"/reactjs.jpg"},
      {title: "Next Js", src:"/nextjs.jpg"},
      {title: "Laravel", src:"/laravel.jpg"},
    ];
    return (
        <>
       <section id="skills" className="bg-white py-20">
      <h2 className="text-xl font-bold text-center text-black mb-10 m-10">
        MY SKILLS
      </h2>

      <div data-aos="fade-right" className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4">
        {skills.map((skill, index) => (
          <div key={index} className="border border-red-300 rounded-lg p-4 shadow-sm">
            
            <div  className="flex items-center gap-2 mb-3">
              <skill.icon className="text-black" size={20} />
              <p className="font-semibold text-black">
                {skill.title}
              </p>
            </div>
          </div>
        ))}
      </div>

       <div
  data-aos="fade-right"
  className="max-w-4xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 px-4 mt-10"
>
  {programming.map((item, index) => (
    <div
      key={index}
      className="relative h-40 border border-red-300 rounded-lg overflow-hidden shadow-sm"
    >
      {/* Background Image */}
      <Image
        src={item.src}
        alt={item.title}
        fill
        className="object-cover"
      />

     
      <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
        <p className="font-semibold text-white text-lg">
          {item.title}
        </p>
      </div>
    </div>
  ))}
</div>





      
    </section>
        </>
    );

}
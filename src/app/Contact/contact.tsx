"use client";
import Image from "next/image";

export default function Testimonials() {
    return (
        <>
        <section id="contacts" className="min-h-screen bg-white py-20">
             <h2 className="text-xl font-bold text-black text-center m-10 mb-10">CONTACTS</h2>

             <div className="flex items-center justify-center border border-red-600  p-3 m-6 w-auto h-auto bg-gray-200 rounded-2xl">
                <div className="border border-black p-5 max-w-4xl">
             <h3 className="text-red-600 text-2xl border text-start font-medium p-3">Get in touch</h3>
              <h1 className="flex text-6xl text-black p-1 font-semibold" >Let's discuss something <br></br> cool together</h1>
                <p className="text-black text-1xl p-3">I'm open to new opportunities and collaborations. Whether you have a project in mind, need assistance, or just want to say hello, feel free to reach out. Let's connect and explore how we can work together to create something amazing!</p>
              </div>

              
             </div>
        </section>
        </>
    );

}
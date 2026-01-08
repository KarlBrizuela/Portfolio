"use client";
import Image from "next/image";

export default function Testimonials() {
    return (
        <>
        <section id="contacts" className="min-h-screen  py-20">
             <h2 className="text-xl font-bold text-center m-10 mb-10">CONTACTS</h2>

             <div className=" flex items-center justify-center mx-auto border    p-3 m-6 max-w-7xl h-auto  rounded-4xl hover:border-red-600">
                <div className=" p-5 max-w-3xl">
             <h3 className="text-red-600 text-2xl  text-start font-medium p-3">Get in touch</h3>
              <h1 className="flex text-4xl  p-1 font-semibold" >Let's discuss something <br></br> cool together</h1>
                <p className="  p-3">I'm open to new opportunities and collaborations. Whether you have a project in mind, need assistance, or just want to say hello, feel free to reach out. Let's connect and explore how we can work together to create something amazing!</p>
              </div>

              <div className=" p-5 ">
                <div className=" flex align-center justify-center gap-7 p-3">
                <input type="text" placeholder="Enter your Full Name" className=" border  p-3 rounded-2xl w-64 hover:border-red-600">
               </input>
                <input type="number" placeholder="Enter your Phone number"className=" border  w-64 p-3 rounded-2xl hover:border-red-600"></input>
                </div>

                <div className=" p-3">
                 <input type="email" placeholder="Enter your Email" className=" border  w-135 p-3 rounded-2xl m-2 hover:border-red-600"></input>
                 <textarea placeholder="Type your message here..." className=" border  w-135 p-3 rounded-2xl m-2 h-64 resize-none hover:border-red-600"></textarea>
                  
                  <button className="border border-red-600  p-3 m-2 w-135 rounded-3xl bg-red-600" type="submit">Submit Appointment</button>
              </div>
     
              </div>
              
             </div>
        </section>
        </>
    );

}
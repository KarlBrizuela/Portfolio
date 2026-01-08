"use client";
import Image from "next/image";
import { useState } from "react";

export default function Testimonials() {

   const [loading, setLoading] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      phone: e.target.phone.value,
      email: e.target.email.value,
      message: e.target.message.value,
    };

    const res = await fetch("/api", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    setLoading(false);

    if (res.ok) {
      alert("Message sent successfully!");
      e.target.reset();
    } else {
      alert("Failed to send message. Try again later.");
    }
  };

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
                <form onSubmit={sendEmail}>
                <div className=" flex align-center justify-center gap-7 p-3">
                <input type="text" name="name" placeholder="Enter your Full Name" className=" border  p-3 rounded-2xl w-64 hover:border-red-600">
               </input>
                <input type="number" name="phone" placeholder="Enter your Phone number"className=" border  w-64 p-3 rounded-2xl hover:border-red-600"></input>
                </div>

                <div className=" p-3">
                 <input type="text" name="email" placeholder="Enter your Email" className=" border  w-135 p-3 rounded-2xl m-2 hover:border-red-600"></input>
                 <textarea name="message" placeholder="Type your message here..." className=" border  w-135 p-3 rounded-2xl m-2 h-64 resize-none hover:border-red-600"></textarea>
                  
                  <button type="submit" className={`border border-red-600 p-3 w-full rounded-3xl text-white ${loading ? "bg-gray-400" : "bg-red-600"}`} disabled={loading}>
                {loading ? "Sending..." : "Submit Appointment"}
              </button>
              </div>
                </form>
              </div>
              
             </div>
        </section>
        </>
    );

}
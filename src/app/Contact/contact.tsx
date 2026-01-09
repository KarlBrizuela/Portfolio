"use client";
import Image from "next/image";
import { useState, FormEvent } from "react";

export default function Testimonials() {

   const [loading, setLoading] = useState(false);

  const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    const target = e.target as HTMLFormElement;
    const formData = {
      name: (target.elements.namedItem('name') as HTMLInputElement).value,
      phone: (target.elements.namedItem('phone') as HTMLInputElement).value,
      email: (target.elements.namedItem('email') as HTMLInputElement).value,
      message: (target.elements.namedItem('message') as HTMLTextAreaElement).value,
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
        <section id="contacts" className="min-h-screen w-full py-12 md:py-20 px-4 sm:px-6 md:px-8">
             <h2 className="text-lg sm:text-xl font-bold text-center m-6 md:m-10 mb-10">CONTACTS</h2>

             <div className="flex flex-col lg:flex-row items-center justify-center gap-4 sm:gap-6 lg:gap-8 mx-auto border p-3 sm:p-6 lg:p-8 max-w-7xl h-auto rounded-4xl hover:border-red-600">
                <div className="p-3 sm:p-6 lg:p-8 w-full lg:w-auto">
             <h3 className="text-red-600 text-lg sm:text-2xl text-start font-medium p-2 lg:p-3">Get in touch</h3>
              <h1 className="text-xl sm:text-3xl lg:text-4xl p-1 font-semibold text-start">Let's discuss something cool together</h1>
                <p className="p-2 lg:p-3 text-xs sm:text-base leading-relaxed">I'm open to new opportunities and collaborations. Whether you have a project in mind, need assistance, or just want to say hello, feel free to reach out. Let's connect and explore how we can work together to create something amazing!</p>
              </div>

              <div className="p-3 sm:p-6 lg:p-8 w-full lg:w-auto">
                <form onSubmit={sendEmail} className="flex flex-col gap-4">
                <div className="flex flex-col sm:flex-row gap-4">
                <input type="text" name="name" placeholder="Enter your Full Name" className="border p-3 rounded-2xl w-full sm:w-56 lg:w-64 hover:border-red-600 text-sm">
               </input>
                <input type="number" name="phone" placeholder="Enter your Phone number" className="border w-full sm:w-56 lg:w-64 p-3 rounded-2xl hover:border-red-600 text-sm"></input>
                </div>

                <div className="flex flex-col gap-3">
                 <input type="text" name="email" placeholder="Enter your Email" className="border w-full p-3 rounded-2xl hover:border-red-600 text-sm"></input>
                 <textarea name="message" placeholder="Type your message here..." className="border w-full p-3 rounded-2xl h-32 sm:h-48 lg:h-64 resize-none hover:border-red-600 text-sm"></textarea>
                  
                  <button type="submit" className={`border border-red-600 p-3 w-full rounded-3xl text-white text-xs sm:text-base ${loading ? "bg-gray-400" : "bg-red-600"}`} disabled={loading}>
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
import React from "react";
import { SiGmail } from "react-icons/si";
import { FaGithub } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import  { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
const ContactMe = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);
    return (
        <section className="bg-purple-100 py-48"id="contact">
            <div className="max-w-4xl mx-auto text-center">
                <p className="text-lg text-primary font-semibold" data-aos="fade-up">Get in Touch</p>
                <h1 className="text-4xl font-bold mt-2 mb-14"data-aos="fade-up">Contact Me</h1>
                <div className="flex justify-center space-x-12">
                    <div className= " flex flex-col items-center group transition-transform transform hover:scale-110 hover:translate-y-2"data-aos="fade-right">
                        <a href="mailto:example@gmail.com" className="text-xl text-red-600  border-2 border-yellow-500 p-3 rounded-full">
                            <SiGmail />
                        </a>
                        <span className="mt-2 text-sm font-medium hidden group-hover:block">Gmail</span>
                    </div>
                    <div className="flex flex-col items-center group transition-transform transform hover:scale-110 hover:translate-y-1"data-aos="fade-up">
                        <a href="https://github.com/your-profile" className="text-xl text-gray-900 border-2 border-yellow-500 rounded-full p-3">
                            <FaGithub />
                        </a>
                        <span className="mt-2 text-sm font-medium hidden group-hover:block">Github</span>
                    </div>
                    <div className="flex flex-col items-center group transition-transform transform hover:scale-110 hover:translate-y-1"data-aos="fade-down">
                        <a href="https://linkedin.com/in/your-profile" className="text-2xl text-blue-800 border-2 border-yellow-500 rounded-full p-3">
                            <FaLinkedin />
                        </a>
                        <span className="mt-2 text-sm font-medium hidden group-hover:block">LinkedIn</span>
                    </div>

                    <div className="  flex flex-col items-center group transition-transform transform hover:scale-110 "data-aos="fade-left">
                        <a href="https://linkedin.com/in/your-profile" className=" border-2 border-yellow-500 text-2xl text-green-800 p-3 rounded-full">
                        <FaWhatsapp />
                        </a>
                        <span className="mt-2 text-sm font-medium hidden group-hover:block ">WhatsApp</span>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactMe;


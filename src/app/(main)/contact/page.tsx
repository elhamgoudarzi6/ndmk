"use client";

import { Mail, Phone, MapPin } from "lucide-react";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const ContactPage = () => {
    return (
        <section className="container flex items-center justify-center pt-20 md:px-0 text-gray-300">
            <div className="max-w-4xl">
                <h1 className="text-5xl font-semibold mb-6 border-b border-gray-800 pb-4">
                    Get in Touch
                </h1>

                <p className="mb-10 text-lg leading-relaxed">
                    Whether you&apos;re looking to collaborate, book a shoot, or just say hi — we&apos;d love to hear from you. Reach out through any of the channels below.
                </p>

                <div className="space-y-6 text-base">
                    <div className="flex items-center gap-3">
                        <Mail className="w-5 h-5" />
                        <span>hello@yourbrand.co.uk</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <Phone className="w-5 h-5" />
                        <span>+44 20 7946 0123</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5" />
                        <span>Shoreditch, London, UK</span>
                    </div>
                </div>

                <div className="mt-12">
                    <h2 className="text-lg font-medium mb-4">Follow us</h2>
                    <div className="flex gap-6 text-xl">
                        <a href="#"><FaInstagram className="hover:text-red-800 transition" /></a>
                        <a href="#"><FaTwitter className="hover:text-red-800 transition" /></a>
                        <a href="#"><FaLinkedin className="hover:text-red-800 transition" /></a>
                        <a href="#"><FaFacebook className="hover:text-red-800 transition" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ContactPage;

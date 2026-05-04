"use client";

import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1)] pt-12 text-gray-900">
      <div className="container mx-auto px-4 sm:px-6 md:px-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Quick Links */}
        <div>
          <h4 className="font-semibold text-[#B5893A] mb-4">Quick Links</h4>
          <ul className="space-y-2">
            <li>
              <a href="/services" className="hover:text-[#B5893A]">
                Services
              </a>
            </li>
            <li>
              <a href="/about" className="hover:text-[#B5893A]">
                About
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-[#B5893A]">
                Contact
              </a>
            </li>
            <li>
              <a href="/blog" className="hover:text-[#B5893A]">
                Blog
              </a>
            </li>
          </ul>
        </div>

        {/* Follow Us */}
        <div>
          <h4 className="font-semibold text-[#B5893A] mb-4">Follow Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2 hover:text-[#B5893A]">
              <Linkedin size={16} />
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#B5893A]">
              <Twitter size={16} />
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Twitter
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#B5893A]">
              <Facebook size={16} />
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Facebook
              </a>
            </li>
            <li className="flex items-center space-x-2 hover:text-[#B5893A]">
              <Instagram size={16} />
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </a>
            </li>
          </ul>
        </div>

        {/* Contact Us */}
        <div>
          <h4 className="font-semibold text-[#B5893A] mb-4">Contact Us</h4>
          <ul className="space-y-2">
            <li className="flex items-center space-x-2">
              <Mail size={20} />
              <a
                href="mailto:info@levelupcapital.com"
                className="hover:text-[#B5893A]"
              >
                info@levelupcapital.com
              </a>
            </li>
            <li className="flex items-center space-x-2">
              <Phone size={20} />
              <a href="tel:+11234567890" className="hover:text-[#B5893A]">
                +1 (123) 456-7890
              </a>
            </li>
            <li className="mt-2 text-sm sm:text-base">
              Address: 123 Finance Street, New York, NY
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className="font-semibold text-[#B5893A] mb-4">Newsletter</h4>
          <p className="mb-2 text-sm sm:text-base">
            Subscribe to get latest updates:
          </p>
          <form className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0">
            <input
              type="email"
              placeholder="Your email"
              className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#B5893A] flex-1"
            />
            <button className="px-4 py-2 bg-[#B5893A] text-white rounded-md hover:bg-[#b38e4b] transition">
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-10 text-[#B5893A] py-5 shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.05),0_10px_15px_-3px_rgba(0,0,0,0.1)] text-center text-sm">
        &copy; {new Date().getFullYear()} Level Up Capital. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;

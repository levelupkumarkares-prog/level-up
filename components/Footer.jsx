"use client";

import {
  Linkedin,
  Twitter,
  Facebook,
  Instagram,
  Mail,
  Phone,
  MapPin,
  ArrowRight,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-100">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-12 lg:py-16">
          {/* Brand */}
          <div>
            <h3 className="text-2xl font-bold tracking-tight text-gray-900">
              Level Up{" "}
              <span className="text-[#B5893A]">Capital</span>
            </h3>

            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
              Building financial confidence through strategic
              solutions, trusted partnerships, and long-term growth.
            </p>
          
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#B5893A]">
              Quick Links
            </h4>

            <ul className="space-y-3">
              <li>
                <a
                  href="/services"
                  className="text-sm text-gray-500 transition-colors hover:text-[#B5893A]"
                >
                  Services
                </a>
              </li>

              <li>
                <a
                  href="/about"
                  className="text-sm text-gray-500 transition-colors hover:text-[#B5893A]"
                >
                  About Us
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#B5893A]">
              Contact Us
            </h4>

            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Mail
                  size={18}
                  className="mt-0.5 shrink-0 text-[#B5893A]"
                />
                <a
                  href="mailto:info@levelupcapital.com"
                  className="break-all text-sm text-gray-500 transition-colors hover:text-[#B5893A]"
                >
                  info@levelupcapital.com
                </a>
              </li>
              

              <li className="flex items-start gap-3">
                <Phone
                  size={18}
                  className="mt-0.5 shrink-0 text-[#B5893A]"
                />
                <a
                  href="tel:+11234567890"
                  className="text-sm text-gray-500 transition-colors hover:text-[#B5893A]"
                >
                  + 1 (416)238-7120
                </a>
              </li>

              {/* Address with Location Icon */}
              <li className="flex items-start gap-3">
                <MapPin
                  size={18}
                  className="mt-0.5 shrink-0 text-[#B5893A]"
                />
                <p className="text-sm leading-6 text-gray-500">
                 4950 Yonge Street, 
                  <br />
                 Suite 2200, Toronto, ON M2N 6K1
                </p>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="mb-5 text-sm font-semibold uppercase tracking-wider text-[#B5893A]">
              Newsletter
            </h4>

            <p className="mb-4 text-sm leading-6 text-gray-500">
              Subscribe to receive the latest updates and insights.
            </p>

            <form className="flex flex-col gap-3">
              <input
                type="email"
                placeholder="Enter your email"
                aria-label="Email address"
                className="w-full rounded-lg border border-gray-200 bg-gray-50 px-4 py-3 text-sm text-gray-800 outline-none transition-all placeholder:text-gray-400 focus:border-[#B5893A] focus:bg-white focus:ring-2 focus:ring-[#B5893A]/20"
              />

              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-lg bg-[#B5893A] px-4 py-3 text-sm font-semibold text-white transition-all duration-300 hover:bg-[#96712D] hover:shadow-md"
              >
                Subscribe
                <ArrowRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100 bg-gray-50/70">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-5 py-5 text-center sm:flex-row sm:px-8 sm:text-left lg:px-12">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Level Up Capital.
            All rights reserved.
          </p>

          <div className="flex items-center gap-5 text-xs text-gray-500">
            <a
              href="/privacy-policy"
              className="transition-colors hover:text-[#B5893A]"
            >
              Privacy Policy
            </a>

            <a
              href="/terms"
              className="transition-colors hover:text-[#B5893A]"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
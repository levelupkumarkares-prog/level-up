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
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-white text-gray-700 border-t border-gray-100">
      <div className="container mx-auto px-5 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 gap-10 py-12 sm:grid-cols-2 lg:grid-cols-3 lg:gap-12 lg:py-16">
          {/* Brand */}
          <div>
            <Link href="/" className="flex w-25 h-20 items-center gap-2">
              <Image
                src="/logos/logo2.webp"
                alt="Level Up Capital Logo"
                width={120}
                height={80}
                className="object-contain"
                priority
              />
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-7 text-gray-500">
              Building financial confidence through strategic solutions, trusted
              partnerships, and long-term growth.
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
                <Mail size={18} className="mt-0.5 shrink-0 text-[#B5893A]" />
                <a
                  href="mailto:Raj@levelupcapitaladvisory.ca"
                  className="break-all text-sm text-gray-500 transition-colors hover:text-[#B5893A]"
                >
                  Raj@levelupcapitaladvisory.ca
                </a>
              </li>

              <li className="flex items-start gap-3">
                <Phone size={18} className="mt-0.5 shrink-0 text-[#B5893A]" />
                <a
                  href="tel:+11234567890"
                  className="text-sm text-gray-500 transition-colors hover:text-[#B5893A]"
                >
                  + 1 (416)238-7120
                </a>
              </li>

              {/* Address with Location Icon */}
              <li className="flex items-start gap-3">
                <MapPin size={18} className="mt-0.5 shrink-0 text-[#B5893A]" />
                <p className="text-sm leading-6 text-gray-500">
                  4950 Yonge Street,
                  <br />
                  Suite 2200, Toronto, ON M2N 6K1
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-gray-100 bg-gray-50/70">
        <div className="container mx-auto flex flex-col items-center justify-between gap-3 px-5 py-5 text-center  lg:px-12">
          <p className="text-xs text-gray-500">
            © {new Date().getFullYear()} Level Up Capital. All rights reserved.
          </p>

          {/* <div className="flex items-center gap-5 text-xs text-gray-500">
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
          </div> */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;

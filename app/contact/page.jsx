import { Mail, Phone, MapPin, ShieldCheck } from "lucide-react";

export default function ContactPage() {
  return (
    <div className="min-h-screen pb-24 pt-2 bg-[#fafafa]">
      <section className="text-black py-14">
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Contact Level Up Capital
          </h1>
          <p className="text-lg md:text-xl max-w-2xl mx-auto text-gray-700">
            Ready to strengthen your financial strategy, secure capital, or plan
            your next stage of growth? Connect with our team today.
          </p>
        </div>
      </section>

      <section className="container mx-auto max-w-8xl px-6 md:px-40 grid grid-cols-1 md:grid-cols-2 gap-14">
        <div className="bg-white shadow-[0_20px_50px_rgba(181,137,58,0.25)] rounded-2xl p-8 md:p-10">
          <h2 className="text-2xl font-semibold mb-8">Send Us a Message</h2>

          <form className="space-y-5">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Name
                </label>
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
                />
              </div>

              <div>
                <label className="block text-gray-700 font-medium mb-1">
                  Email
                </label>
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
                />
              </div>
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Contact Number
              </label>
              <input
                type="tel"
                placeholder="Your Contact Number"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
              />
            </div>

            <div>
              <label className="block text-gray-700 font-medium mb-1">
                Message
              </label>
              <textarea
                rows={6}
                placeholder="Tell us about your business goals or capital needs"
                className="w-full border border-gray-300 rounded-md p-3 focus:outline-none focus:ring-2 focus:ring-[#B5893A]"
              />
            </div>

            <button
              type="submit"
              className="bg-[#B5893A] text-white font-semibold px-8 py-3 rounded-md hover:bg-[#a4792e] transition"
            >
              Request a Consultation
            </button>

            <div className="flex items-center gap-2 text-sm text-gray-600 pt-2">
              <ShieldCheck className="w-4 h-4 text-[#B5893A]" />
              Your information is kept confidential. No spam.
            </div>
          </form>
        </div>

        <div className="space-y-8">
          <div className="bg-white shadow-[0_20px_50px_rgba(181,137,58,0.25)] rounded-2xl p-8">
            <h2 className="text-2xl font-semibold mb-6">
              Prefer to Reach Us Directly?
            </h2>

            <div className="space-y-4 text-gray-700">
              <p className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#B5893A]" />
                <a
                  href="mailto:Raj@levelupcapitaladvisory.ca"
                  className="hover:underline"
                >
                  Raj@levelupcapitaladvisory.ca
                </a>
              </p>

              <p className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#B5893A]" />
                <a href="tel:+11234567890" className="hover:underline">
                  + 1 (416)238-7120
                </a>
              </p>

              <p className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#B5893A] mt-1" />
                4950 Yonge Street, Country
              </p>
            </div>
          </div>
          <div className="rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(181,137,58,0.25)]">
            <div className="w-full h-96 md:h-125">
              <iframe
                src="https://maps.google.com/maps?q=4950%20Yonge%20Street%2C%20Suite%202200%2C%20Toronto%2C%20ON%20M2N%206K1&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

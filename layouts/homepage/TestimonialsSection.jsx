/* eslint-disable @next/next/no-img-element */
// components/TestimonialsSection.jsx
"use client";

const testimonials = [
  {
    quote:
      "Level Up Capital Advisors helped our business secure growth funding and structure our succession plan smoothly, giving us confidence for the future.",
    name: "Jane Doe",
    designation: "CEO, ABC Enterprises",
  },
  {
    quote:
      "Their expertise in mergers and acquisitions helped us navigate complex transactions with ease and achieve excellent results.",
    name: "John Smith",
    designation: "Founder, XYZ Corp",
  },
  {
    quote:
      "We received practical guidance and capital solutions that allowed us to expand internationally without risks.",
    name: "Emily Johnson",
    designation: "Managing Director, GlobalTech",
  },
];

// Sample partner logos (replace with your own)
const partnerLogos = [
  "/logos/logo1.png",
  "/logos/logo2.png",
  "/logos/logo3.png",
  "/logos/logo4.png",
  "/logos/logo5.png",
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="mx-auto container max-w-8xl px-15">
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-700 text-lg">
            Trusted by businesses across industries. Here’s what our clients and partners have to say about working with us.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-between"
            >
              <p className="text-gray-600 italic mb-4">“{testimonial.quote}”</p>
              <p className="font-semibold text-gray-900">{testimonial.name}</p>
              <p className="text-gray-500 text-sm">{testimonial.designation}</p>
            </div>
          ))}
        </div>

        {/* Partner Logos */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">
            Our Trusted Partners
          </h3>
          <div className="flex flex-wrap justify-center items-center gap-8">
            {partnerLogos.map((logo, index) => (
              <img
                key={index}
                src={logo}
                alt={`Partner ${index + 1}`}
                className="h-12 object-contain"
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;

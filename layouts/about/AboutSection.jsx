import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      <div className="relative container mx-auto max-w-8xl px-6 md:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 mb-10">
          <div className="relative">
            <div className="rounded-2xl h-125 overflow-hidden shadow-[0_40px_40px_rgba(181,137,58,0.25)]">
              <Image
                src="/about-us/img1.webp"
                alt="Corporate advisory meeting"
                width={700}
                height={500}
                className="w-full h-full object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 700px"
                priority
              />
            </div>

            <div className="absolute -bottom-10 -right-10 hidden md:block">
              <div className="rounded-xl h-62 w-65 overflow-hidden bg-white border border-gray-200 shadow-[0_10px_20px_rgba(181,137,58,0.3)]">
                <Image
                  src="/about-us/img2.webp"
                  alt="Business growth strategy"
                  width={320}
                  height={220}
                  className="w-full h-full object-cover"
                  sizes="(max-width: 768px) 0px, 320px"
                />
              </div>
            </div>
          </div>

          <div className="space-y-6 text-gray-700 leading-relaxed text-lg">
            <h2 className="text-3xl md:text-4xl font-semibold text-gray-900 mb-5">
              About Us
            </h2>

            <p>
             Level Up Capital Advisors is a corporate consulting and capital advisory
              firm dedicated to helping businesses grow, scale, and unlock
              long-term value through strategic financial solutions and expert
              guidance.
            </p>

            <p>
              We work with companies across multiple industries to deliver
              objective, high-level advisory services in capital structuring,
              financing, acquisitions, and growth planning.
            </p>

            <p>
              Our consulting frameworks and financial best practices support
              organizations seeking experienced, independent guidance on
              expansion strategies, project development, acquisitions, and
              access to capital.
            </p>

            <p>
              With extensive cross-industry experience, we deliver practical,
              results-driven strategies tailored to each client’s goals.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

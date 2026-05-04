import Image from "next/image";

const SelfSection = () => {
  return (
    <section className="container mx-auto max-w-8xl px-6 md:px-12">
      <div className="grid grid-cols-1">
        <div className="flex flex-col md:flex-row items-center gap-10">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-100 overflow-hidden rounded-2xl">
              <Image
                src="/about-us/person.webp"
                alt="Advisory team"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 520px"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 space-y-5">
            <h3 className="text-4xl font-semibold text-gray-900">Who We Are</h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              We are a team of experienced corporate consultants and financial
              advisors with deep cross-industry expertise, supporting businesses
              through complex financial and strategic decisions. Our work
              focuses on helping organizations grow, scale, and unlock long-term
              value through disciplined advisory, capital structuring, and
              transaction support.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              Drawing on extensive experience across multiple sectors, we
              provide independent, objective guidance tailored to each client’s
              goals and operating environment. We partner closely with business
              owners, developers, and management teams to evaluate
              opportunities, mitigate risk, and execute strategies with
              confidence and precision.
            </p>
          </div>
        </div>

        <div className="flex flex-col md:flex-row-reverse items-center gap-4">
          <div className="w-full md:w-2/5">
            <div className="relative w-full h-100 overflow-hidden rounded-2xl">
              <Image
                src="/about-us/data.webp"
                alt="Financial strategy"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 40vw, 520px"
              />
            </div>
          </div>

          <div className="w-full md:w-3/5 space-y-5">
            <h3 className="text-4xl font-semibold text-gray-900">What We Do</h3>

            <p className="text-gray-700 leading-relaxed text-lg">
              We provide integrated consulting and capital advisory solutions
              that support businesses at every stage of growth. Our services
              span financing, mergers and acquisitions advisory, project
              funding, and strategic growth planning, ensuring each decision is
              aligned with long-term value creation.
            </p>

            <p className="text-gray-700 leading-relaxed text-lg">
              By combining strategic insight with financial expertise, we help
              clients structure capital effectively, assess opportunities
              objectively, and execute complex transactions with confidence. Our
              approach goes beyond individual deals, delivering practical
              guidance that strengthens businesses and supports sustainable,
              scalable outcomes.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelfSection;

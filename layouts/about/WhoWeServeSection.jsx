import Image from "next/image";

const clients = [
  {
    title: "Small & Medium-Sized Enterprises",
    desc: "Established SMEs seeking strategic financial guidance, capital structuring, and sustainable growth solutions.",
    icon: "/about-us/serve/imgg1.webp",
  },
  {
    title: "Growing Businesses",
    desc: "Fast-scaling companies looking to optimize operations, secure funding, and expand into new markets.",
    icon: "/about-us/serve/img2.webp",
  },
  {
    title: "Developers & Project Sponsors",
    desc: "Real estate developers and sponsors requiring financial modeling, capital advisory, and investment strategy.",
    icon: "/about-us/serve/img4.webp",
  },
  {
    title: "Companies Preparing for Transition or Exit",
    desc: "Businesses planning mergers, acquisitions, restructuring, or successful exit strategies.",
    icon: "/about-us/serve/imgf.webp",
  },
];

const WhoWeServeSection = () => {
  return (
    <section className="relative pt-5 pb-10 overflow-hidden">
      <div className="container mx-auto max-w-8xl px-6 md:px-12">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-5">
            Who We Serve
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We partner with ambitious organizations that are ready to grow,
            scale, and unlock long-term value through strategic advisory.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10">
          {clients.map((item, index) => (
            <div
              key={index}
              className="group relative p-5 rounded-2xl gap-5 flex transition-all duration-300"
            >
              <div className="flex justify-center">
                <div className="w-40 h-full rounded-xl flex items-center justify-center transition">
                  <Image
                    src={item.icon}
                    alt={item.title}
                    width={130}
                    height={130}
                    className="object-contain w-full h-full"
                    sizes="(max-width: 640px) 80px, (max-width: 1024px) 100px, 130px"
                  />
                </div>
              </div>

              <div className="flex flex-col justify-center">
                <h3 className="text-xl font-semibold text-gray-900 mb-4 leading-snug">
                  {item.title}
                </h3>
                <p className="text-gray-600 w-[90%] text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoWeServeSection;

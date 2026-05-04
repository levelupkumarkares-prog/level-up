import Image from "next/image";
import LandingContent from "./LandingContent";

const LandingSection = () => {
  return (
    <div className="relative h-auto py-25 w-full flex items-center justify-center overflow-hidden">
      <Image
        src="/landing/bgfix.webp"
        alt="landing background"
        fill
        priority
        quality={75}
        sizes="100vw"
        className="object-cover"
      />
      <div className="absolute inset-0 bg-white/10" />
      <div className="relative z-10 text-center max-w-4xl px-6">
        <LandingContent />
      </div>

      <div className="absolute bottom-0 left-0 w-full h-70 bg-linear-to-t from-white/80 to-transparent pointer-events-none" />
    </div>
  );
};

export default LandingSection;

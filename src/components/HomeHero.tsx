import { Link } from "react-router-dom";

export default function HomeHero() {
  return (
    <section>
      <div className="bg-white flex flex-col items-start px-5 lg:px-20 mt-20 relative z-20">
        <h1 className="lg:mt-5 font-bold text-amber-950 tracking-widest text-2xl pt-5 font-serif">
          NATIONAL PARK GUIDE
        </h1>
        <h2
          className="text-3xl sm:text-6xl md:text-6xl max-w-full lg:max-w-1xl font-bold 
        text-teal-800 z-10 mt-5 mb-5"
        >
          {" "}
          Breathtaking Landscapes,
          <span className="block lg:block"> Endless Adventure</span>
        </h2>
        <p className="text-l lg:text-xl lg:max-w-3/5 tracking-wide leading-relaxed">
          {" "}
          Explore America’s national parks with Park Explorer — your ultimate
          guide to nature’s greatest wonders. From towering sequoias and
          erupting geysers to red rock canyons and serene mountain trails, these
          parks offer a perfect mix of adventure and tranquility.
        </p>
      </div>
      <div
        className="relative bg-[url('/yosemite.jpg')] bg-cover bg-center h-[40vh] md:h-[60vh] 
        lg:h-[130vh] max-w-full flex items-start mt-0"
      >
        <div
          className="absolute inset-0 bg-gradient-to-t from-teal-900 via-transparent
         to-white/100 z-10"
        />
        <div className="mt-10 relative z-20  px-5 lg:px-20">
          <Link
            to="/parks"
            className="bg-[var(--color-primary)] border-2 
            border-[var(--color-primary)] text-white px-6 py-3 rounded-full transition-all 
        duration-300 ease-in-out hover:cursor-pointer hover:bg-transparent hover:text-black 
        hover:border-[var(--color-primary)]"
          >
            Find a park
          </Link>
        </div>
      </div>
    </section>
  );
}

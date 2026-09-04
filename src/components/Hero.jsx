import profileImg from '../assets/profile.png';

export default function Hero() {
  return (
    <section className="max-w-5xl mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center gap-10">
      {/* Profile Image Container */}
      <div className="flex-shrink-0">
        <img
          src={profileImg}
          alt="James Edward L. Verceles"
          className="w-40 h-40 md:w-52 md:h-52 rounded-full object-cover border-4 border-gray-100 shadow-lg"
        />
      </div>

      {/* Hero Text Content */}
      <div className="text-center md:text-left">
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-blue-300 tracking-tight leading-tight mb-4">
          Hi, I'm <span className="text-blue-600">James Edward L. Verceles</span>, an aspiring Software Developer
        </h1>

        <p className="text-lg text-gray-600 max-w-2xl leading-relaxed">
          Computer Science graduate specializing in full-stack web applications, system automation, and backend troubleshooting.
        </p>
      </div>
    </section>
  );
}
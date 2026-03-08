"use client";

export default function AboutSection() {
  return (
    <section
      id="about"
      className="portfolio-section flex items-center px-6 py-10 md:px-12"
    >
      <div className="motion-fade-up mx-auto w-full max-w-5xl rounded-2xl border border-slate-700/70 bg-[rgba(16,23,38,0.72)] p-6 transition-transform duration-500 hover:-translate-y-0.5 sm:p-8 md:p-10">
        <h2 className="text-cyan-300 text-sm font-bold tracking-[0.2em] mb-8 uppercase">
          About
        </h2>

        <div className="grid gap-5 text-slate-300 leading-7 md:grid-cols-2 md:gap-8">
          <p>
            I love building projects that have a positive impact on
            people&apos;s lives. My side projects have mostly been focused on
            implementing something that I or someone can use on a daily basis,
            such as to learn something or to solve a problem.
          </p>

          <p>
            I enjoy the thrill of learning and applying them to solve
            challenges. Apart from technology, I am deeply interested in sports
            and outdoor activities, reading books, and sketching. From time to
            time, I learn new skills such as French and ASL, cooking, and
            history.
          </p>
        </div>
      </div>
    </section>
  );
}

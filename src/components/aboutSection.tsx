"use client";

export default function AboutSection() {

  return (
    <section id="about" className="w-full max-w-3xl px-16 py-20 bg-black">
      <h2 className="text-teal-500 dark:text-teal-500 text-sm font-bold tracking-widest mb-8 uppercase">
        About
      </h2>

      <div className="space-y-6 text-zinc-400 dark:text-zinc-400 leading-8">
        <p>
          I love building projects that have a positive impact on people's
          lives. My side projects have mostly been focused on implementing
          something that I or someone can use on a daily basis, such as to learn
          something or to solve a problem.
        </p>

        <p>
          I enjoy the thrill of learning and applying them to solve challenges.
          Apart from technolgy, I am deeply interested in sports/outdoor
          activities, reading books, and sketching. From time to time, I learn
          new skills or topics like languages such as French and ASL, cooking,
          history etc.
        </p>
      </div>
    </section>
  );
}

"use client";

import { useEffect, useRef, useState } from "react";

const stats = [
  { value: "200+", label: "Branches managed", color: "from-emerald-400 to-teal-500" },
  { value: "98%", label: "Compliance rate achieved", color: "from-violet-400 to-purple-600" },
  { value: "10×", label: "Faster operations reporting", color: "from-orange-400 to-rose-500" },
  { value: "60%", label: "Reduction in manual tasks", color: "from-blue-400 to-indigo-600" },
];

function useCountUp(target: number, duration = 2000, isVisible: boolean) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;
    let start = 0;
    const startTime = performance.now();

    function animate(now: number) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      // Ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setCount(Math.round(eased * target));
      if (progress < 1) requestAnimationFrame(animate);
    }
    requestAnimationFrame(animate);
  }, [target, duration, isVisible]);

  return count;
}

function StatCard({ stat, index }: { stat: typeof stats[0]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const numericValue = parseInt(stat.value.replace(/[^\d]/g, ""), 10);
  const suffix = stat.value.replace(/[\d]/g, "");
  const count = useCountUp(numericValue, 2000, isVisible);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.3 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className="rounded-3xl p-8 bg-gray-50 border border-black/[0.05] flex flex-col items-center justify-center text-center hover:-translate-y-1 transition-all duration-300 hover:shadow-lg"
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <span
        className={`text-5xl md:text-6xl font-extrabold bg-gradient-to-br ${stat.color} bg-clip-text text-transparent leading-none mb-3`}
      >
        {isVisible ? `${count}${suffix}` : stat.value}
      </span>
      <p className="text-sm text-gray-500 font-medium leading-snug">{stat.label}</p>
    </div>
  );
}

export default function Stats() {
  return (
    <section className="py-24 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-extrabold text-black mb-4">
            Real impact,{" "}
            <em className="font-serif" style={{ fontStyle: "italic" }}>real numbers</em>
          </h2>
          <p className="text-gray-500 text-lg max-w-md mx-auto">
            Organizations running on Saby AI see measurable results from day one.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {stats.map((s, i) => (
            <StatCard key={s.label} stat={s} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

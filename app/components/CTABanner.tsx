export default function CTABanner() {
  return (
    <section className="px-4 pb-0 bg-[#EFEFEF]">
      <div className="max-w-6xl mx-auto bg-black rounded-t-[40px] px-8 md:px-16 py-20 text-center relative overflow-hidden">
        {/* Subtle gradient blobs */}
        <div
          className="hero-gradient-blob w-72 h-72 opacity-20 animate-float"
          style={{
            background: "radial-gradient(circle, #34d399, #059669)",
            top: "-40px",
            left: "-40px",
          }}
        />
        <div
          className="hero-gradient-blob w-64 h-64 opacity-20 animate-float-slow"
          style={{
            background: "radial-gradient(circle, #a78bfa, #7c3aed)",
            bottom: "-20px",
            right: "-30px",
          }}
        />

        <div className="relative z-10">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
            Scale operations without
            <br />
            <em className="font-serif text-gray-300" style={{ fontStyle: "italic" }}>
              losing control.
            </em>
          </h2>
          <p className="text-gray-400 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            Join the organizations using Saby AI to run smarter, comply faster, and execute without limits — across every branch, team, and touchpoint.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <a
              href="#"
              className="px-7 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-gray-100 transition-all duration-200 shadow-lg hover:-translate-y-0.5"
            >
              Start for free
            </a>
            <a
              href="#"
              className="px-7 py-3.5 border border-white/20 text-white text-sm font-semibold rounded-full hover:bg-white/10 transition-all duration-200"
            >
              Book a demo
            </a>
          </div>
          <p className="text-gray-500 text-xs mt-6">
            14-day free trial · No credit card required · Cancel anytime
          </p>
        </div>
      </div>
    </section>
  );
}

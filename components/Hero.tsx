import Image from "next/image";

const PROPERTY_CATEGORIES = [
  "Apartments",
  "Villas",
  "Independent Houses",
  "Commercial",
];

export default function Hero() {
  return (
    <section
      id="home"
      className="relative w-full overflow-hidden bg-slate-900 min-h-[420px] sm:min-h-[480px] lg:min-h-[520px] flex items-center"
      aria-labelledby="hero-heading"
    >
      {/* Background Image with Responsive Gradient Overlay */}
      <figure className="absolute inset-0 z-0 m-0">
        <Image
          src="/hero.png"
          alt="Trayaksh Professional Property Inspector inspecting building"
          fill
          className="object-cover object-center lg:object-right"
          priority
          sizes="100vw"
        />
        {/* Full vertical gradient on mobile, switching to horizontal on desktop */}
        <span className="absolute inset-0 bg-gradient-to-b from-slate-950/90 via-slate-950/80 to-slate-950/90 sm:bg-gradient-to-r sm:from-slate-950/90 sm:via-slate-950/75 sm:to-transparent sm:w-2/3" />
      </figure>

      {/* Content Container */}
      <article className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 sm:py-12 lg:py-14 w-full">
        <header className="max-w-xl space-y-4 sm:space-y-5 text-center sm:text-left mx-auto sm:mx-0 flex flex-col items-center sm:items-start">
          
          {/* Brand Title inside Hero Header */}
          <hgroup className="space-y-1 select-none flex flex-col items-center sm:items-start">
            <span className="brand-name-light text-xl sm:text-2xl lg:text-[28px] block">
              TRAYAKSH
            </span>
            <p className="brand-subtitle-light text-[9px] sm:text-[11px] lg:text-[12px] block">
              Property Inspection &amp; Consulting
            </p>
          </hgroup>

          {/* Hero Main Heading */}
          <h1
            id="hero-heading"
            className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white leading-[1.12] sm:leading-[1.08] font-sans text-center sm:text-left"
          >
            See Beyond <br className="hidden sm:inline" />
            Inspection.
          </h1>

          {/* Subtitle Description */}
          <p className="text-sm sm:text-base md:text-lg text-slate-200 font-normal leading-relaxed max-w-md text-center sm:text-left">
            Make confident property decisions with professional, detailed and independent property inspections.
          </p>

          {/* CTA Button */}
          <div className="pt-1 sm:pt-0 w-full sm:w-auto flex justify-center sm:justify-start">
            <a
              href="#contact"
              className="group btn-gradient w-full sm:w-auto inline-flex items-center justify-center gap-3 rounded-md px-8 sm:px-12 lg:px-16 py-3 sm:py-3.5 text-sm sm:text-base font-medium text-white transition-all hover:brightness-110 active:scale-98"
              title="Book a Property Inspection"
            >
              <span>Book an Inspection</span>
              <span className="text-lg leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
            </a>
          </div>

          {/* Property Categories List (Semantic <nav>, <ul>, and <li>) */}
          <nav aria-label="Property Categories" className="pt-3 sm:pt-4">
            <ul className="text-xs sm:text-sm text-slate-300 font-normal flex flex-wrap items-center justify-center sm:justify-start gap-x-2.5 sm:gap-x-4 gap-y-1.5 select-none text-center sm:text-left">
              {PROPERTY_CATEGORIES.map((category, idx) => (
                <li key={category} className="inline-flex items-center gap-2.5 sm:gap-4">
                  <a
                    href={`#${category.toLowerCase().replace(/\s+/g, "-")}`}
                    className="hover:text-white transition-colors"
                  >
                    {category}
                  </a>
                  {idx < PROPERTY_CATEGORIES.length - 1 && (
                    <span className="text-slate-500 select-none" aria-hidden="true">|</span>
                  )}
                </li>
              ))}
            </ul>
          </nav>

        </header>
      </article>
    </section>
  );
}

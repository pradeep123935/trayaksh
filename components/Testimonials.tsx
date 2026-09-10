const SLIDES = [
  // Slide 1
  [
    {
      id: "1-1",
      rating: 5,
      text: "The inspection was extremely detailed and helped us identify several issues before taking possession of our apartment.",
      name: "Venkatesh Rao",
    },
    {
      id: "1-2",
      rating: 5,
      text: "Very professional and thorough. The report was easy to understand and gave us confidence before making the purchase.",
      name: "Sneha Reddy",
    },
    {
      id: "1-3",
      rating: 5,
      text: "Trayaksh helped us find construction and finishing issues that we would have completely missed ourselves.",
      name: "Anil Chowdary",
    },
  ],
  // Slide 2
  [
    {
      id: "2-1",
      rating: 5,
      text: "Extremely thorough inspection! Their thermal imaging detected hidden moisture seepage behind bathroom tiles early on.",
      name: "Harika Naidu",
    },
    {
      id: "2-2",
      rating: 5,
      text: "The handover checklist was comprehensive. The builder rectified 18 minor defects before we accepted the keys.",
      name: "Vamshi Krishna",
    },
    {
      id: "2-3",
      rating: 5,
      text: "Professional team with deep technical expertise. Their detailed PDF report gave us strong leverage during negotiation.",
      name: "Keerthi Varma",
    },
  ],
  // Slide 3
  [
    {
      id: "3-1",
      rating: 5,
      text: "Saved us thousands in future repair costs. The civil structure and electrical audit was spot on.",
      name: "Sai Ramakrishna",
    },
    {
      id: "3-2",
      rating: 5,
      text: "Prompt service, detailed photo evidence for every snag, and superb customer support from start to finish.",
      name: "Lavanya Teja",
    },
    {
      id: "3-3",
      rating: 5,
      text: "Outstanding re-inspection service. They verified all builder fixes line by line with clear documentation.",
      name: "Srinivas Rao",
    },
  ],
  // Slide 4
  [
    {
      id: "4-1",
      rating: 5,
      text: "Trayaksh is worth every penny. Independent, unbiased, and honest evaluation of our commercial property space.",
      name: "Venkata Ramana",
    },
    {
      id: "4-2",
      rating: 5,
      text: "Their plumbing and electrical safety inspection uncovered non-compliant wiring before handover. Truly invaluable!",
      name: "Bhargavi Alluri",
    },
    {
      id: "4-3",
      rating: 5,
      text: "Highly recommend Trayaksh to anyone buying a new property. Seamless process and crystal-clear insights.",
      name: "Madhav Konda",
    },
  ],
];

export default function Testimonials() {
  return (
    <section
      id="testimonials"
      className="w-full bg-[#082a28] text-white py-5 sm:py-6 lg:py-7"
      aria-labelledby="testimonials-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="mb-3.5 sm:mb-4 space-y-1 text-center lg:text-left max-w-2xl">
          <span className="text-xs font-bold tracking-widest text-[#2dd4bf] uppercase block">
            WHAT OUR CLIENTS SAY
          </span>
          <h2
            id="testimonials-heading"
            className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-white leading-tight"
          >
            Real Stories, <br className="hidden sm:inline" />
            Real Peace of Mind.
          </h2>
          <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed pt-0.5">
            Real experiences from clients who made better property decisions with Trayaksh.
          </p>
        </header>

        {/* Pure CSS 4-Slide Carousel Container */}
        <div className="relative">
          
          {/* Radio Inputs */}
          <input type="radio" name="testimonial-tab" id="t-slide-1" defaultChecked className="hidden" />
          <input type="radio" name="testimonial-tab" id="t-slide-2" className="hidden" />
          <input type="radio" name="testimonial-tab" id="t-slide-3" className="hidden" />
          <input type="radio" name="testimonial-tab" id="t-slide-4" className="hidden" />

          {/* Left Arrow Controls */}
          <div className="carousel-left-arrows absolute -left-2 sm:-left-5 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <label id="prev-1" htmlFor="t-slide-4" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Previous Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </label>
            <label id="prev-2" htmlFor="t-slide-1" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Previous Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </label>
            <label id="prev-3" htmlFor="t-slide-2" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Previous Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </label>
            <label id="prev-4" htmlFor="t-slide-3" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Previous Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" /></svg>
            </label>
          </div>

          {/* Right Arrow Controls */}
          <div className="carousel-right-arrows absolute -right-2 sm:-right-5 top-1/2 -translate-y-1/2 z-20 hidden md:block">
            <label id="next-1" htmlFor="t-slide-2" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Next Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </label>
            <label id="next-2" htmlFor="t-slide-3" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Next Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </label>
            <label id="next-3" htmlFor="t-slide-4" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Next Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </label>
            <label id="next-4" htmlFor="t-slide-1" className="arrow-btn h-9 w-9 items-center justify-center rounded-full bg-[#061e1c] border border-teal-700/60 text-white shadow-md hover:bg-[#0d3b3b] cursor-pointer transition-all active:scale-95">
              <span className="sr-only">Next Slide</span>
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" /></svg>
            </label>
          </div>

          {/* Carousel Body */}
          <div className="carousel-body w-full overflow-hidden">
            
            {/* Slide 1 (Active by Default) */}
            <div id="s-content-1" className="slide-content grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4.5">
              {SLIDES[0].map((item) => (
                <article key={item.id} className="flex flex-col justify-between rounded-xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-2xs">
                  <div className="space-y-2">
                    {/* 5 Stars */}
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    {/* Review Text */}
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                  {/* Author (Role removed) */}
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0f172a]">
                      {item.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            {/* Slide 2 */}
            <div id="s-content-2" className="slide-content grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4.5">
              {SLIDES[1].map((item) => (
                <article key={item.id} className="flex flex-col justify-between rounded-xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-2xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0f172a]">
                      {item.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            {/* Slide 3 */}
            <div id="s-content-3" className="slide-content grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4.5">
              {SLIDES[2].map((item) => (
                <article key={item.id} className="flex flex-col justify-between rounded-xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-2xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0f172a]">
                      {item.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

            {/* Slide 4 */}
            <div id="s-content-4" className="slide-content grid grid-cols-1 md:grid-cols-3 gap-3.5 sm:gap-4.5">
              {SLIDES[3].map((item) => (
                <article key={item.id} className="flex flex-col justify-between rounded-xl bg-white p-3 sm:p-3.5 border border-slate-200/80 shadow-2xs">
                  <div className="space-y-2">
                    <div className="flex items-center gap-1 text-amber-400">
                      {[...Array(item.rating)].map((_, i) => (
                        <svg key={i} className="w-3.5 h-3.5 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                    <p className="text-xs sm:text-sm text-slate-700 font-normal leading-relaxed">
                      &ldquo;{item.text}&rdquo;
                    </p>
                  </div>
                  <div className="mt-3 pt-2 border-t border-slate-100">
                    <h3 className="text-xs sm:text-sm font-bold text-[#0f172a]">
                      {item.name}
                    </h3>
                  </div>
                </article>
              ))}
            </div>

          </div>

          {/* 4 Pagination Dots */}
          <div className="carousel-dots mt-2.5 sm:mt-3 flex items-center justify-center gap-2">
            <label
              id="dot-1"
              htmlFor="t-slide-1"
              className="h-2 w-2 rounded-full cursor-pointer transition-all bg-slate-300 hover:bg-slate-400"
              title="Slide 1"
            />
            <label
              id="dot-2"
              htmlFor="t-slide-2"
              className="h-2 w-2 rounded-full cursor-pointer transition-all bg-slate-300 hover:bg-slate-400"
              title="Slide 2"
            />
            <label
              id="dot-3"
              htmlFor="t-slide-3"
              className="h-2 w-2 rounded-full cursor-pointer transition-all bg-slate-300 hover:bg-slate-400"
              title="Slide 3"
            />
            <label
              id="dot-4"
              htmlFor="t-slide-4"
              className="h-2 w-2 rounded-full cursor-pointer transition-all bg-slate-300 hover:bg-slate-400"
              title="Slide 4"
            />
          </div>

        </div>

      </div>
    </section>
  );
}

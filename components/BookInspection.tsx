export default function BookInspection() {
  return (
    <section
      id="contact"
      className="w-full bg-[#faf7f2] py-6 sm:py-7 lg:py-8 relative overflow-hidden"
      aria-labelledby="book-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center">
          
          {/* Left Column: Heading & Description (5/12) */}
          <div className="lg:col-span-5 space-y-2.5 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-[#a38753] uppercase block">
              BOOK AN INSPECTION
            </span>
            <h2
              id="book-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0f172a] leading-tight"
            >
              Let&apos;s Get Your <br className="hidden sm:inline" />
              Property Inspected
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Fill in the details below and our team will get in touch with you shortly to schedule your property inspection.
            </p>
          </div>

          {/* Right Column: 2-Column Grid Inspection Booking Form Card (7/12) */}
          <div className="lg:col-span-7">
            <div className="rounded-xl bg-white p-4 sm:p-5 lg:p-6 shadow-lg border border-teal-900/10">
              <form action="#" method="POST" className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-3.5">
                
                {/* Full Name */}
                <div className="space-y-1">
                  <label htmlFor="full-name" className="text-xs font-semibold text-[#0f172a]">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    name="full-name"
                    id="full-name"
                    required
                    placeholder="Enter your name"
                    className="w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:border-[#0d3b3b] focus:bg-white focus:outline-hidden transition-all"
                  />
                </div>

                {/* Email Address */}
                <div className="space-y-1">
                  <label htmlFor="email" className="text-xs font-semibold text-[#0f172a]">
                    Email Address <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    placeholder="Enter your email address"
                    className="w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:border-[#0d3b3b] focus:bg-white focus:outline-hidden transition-all"
                  />
                </div>

                {/* Phone Number */}
                <div className="space-y-1">
                  <label htmlFor="phone-number" className="text-xs font-semibold text-[#0f172a]">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    required
                    placeholder="Enter your phone number"
                    className="w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:border-[#0d3b3b] focus:bg-white focus:outline-hidden transition-all"
                  />
                </div>

                {/* Property Location */}
                <div className="space-y-1">
                  <label htmlFor="location" className="text-xs font-semibold text-[#0f172a]">
                    Property Location <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      name="location"
                      id="location"
                      required
                      placeholder="Enter property location"
                      className="w-full rounded-md border border-slate-200 bg-slate-50/50 pl-3 pr-8 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:border-[#0d3b3b] focus:bg-white focus:outline-hidden transition-all"
                    />
                    <div className="absolute inset-y-0 right-0 flex items-center pr-2.5 pointer-events-none text-slate-400">
                      <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                      </svg>
                    </div>
                  </div>
                </div>

                {/* Additional Details (Optional) - Full Width */}
                <div className="space-y-1 sm:col-span-2">
                  <label htmlFor="notes" className="text-xs font-semibold text-[#0f172a]">
                    Additional Details <span className="text-slate-400 font-normal">(Optional)</span>
                  </label>
                  <textarea
                    name="notes"
                    id="notes"
                    rows={2}
                    placeholder="Any specific requirements or notes?"
                    className="w-full rounded-md border border-slate-200 bg-slate-50/50 px-3 py-2 text-xs sm:text-sm text-[#0f172a] placeholder:text-slate-400 focus:border-[#0d3b3b] focus:bg-white focus:outline-hidden transition-all resize-none"
                  ></textarea>
                </div>

                {/* Submit Button - Full Width */}
                <div className="pt-1 sm:col-span-2">
                  <button
                    type="submit"
                    className="w-full btn-gradient flex items-center justify-center gap-2 rounded-md px-5 py-2.5 text-xs sm:text-sm font-semibold text-white shadow-xs transition-all hover:brightness-110 active:scale-98 cursor-pointer"
                  >
                    <span>Submit Request</span>
                    <span className="text-base leading-none" aria-hidden="true">&rarr;</span>
                  </button>
                </div>

                {/* Sub-text - Full Width */}
                <p className="text-[11px] text-center text-slate-500 font-normal sm:col-span-2">
                  We&apos;ll get back to you within 24 hours.
                </p>

              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

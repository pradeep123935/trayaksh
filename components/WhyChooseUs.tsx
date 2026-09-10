import Image from "next/image";

const COLUMN_1 = [
  {
    title: "Experienced & Certified Inspectors",
    icon: (
      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#0d3b3b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
      </svg>
    ),
  },
  {
    title: "Advanced Tools & Technology",
    icon: (
      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#0d3b3b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0z" />
      </svg>
    ),
  },
  {
    title: "Unbiased & Independent",
    icon: (
      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#0d3b3b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
      </svg>
    ),
  },
];

const COLUMN_2 = [
  {
    title: "Detailed & Easy-to-Understand Reports",
    icon: (
      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#0d3b3b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
      </svg>
    ),
  },
  {
    title: "Transparent Process",
    icon: (
      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#0d3b3b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Dedicated Support From Start to Finish",
    icon: (
      <svg className="w-5 sm:w-6 h-5 sm:h-6 text-[#0d3b3b] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 18v-5.25m0 0a6.01 6.01 0 001.5-.189m-1.5.189a6.01 6.01 0 01-1.5-.189m3.75 7.478a12 12 0 01-4.5 0m3.75 2.383a14.406 14.406 0 01-3 0M14.25 18v-.192c0-.983.658-1.823 1.508-2.316a7.5 7.5 0 10-7.517 0c.85.493 1.509 1.333 1.509 2.316V18" />
      </svg>
    ),
  },
];

export default function WhyChooseUs() {
  return (
    <section
      id="why-us"
      className="w-full bg-white py-6 sm:py-7 lg:py-8"
      aria-labelledby="why-us-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Building Image (3/12) */}
          <div className="lg:col-span-3 flex justify-center">
            <div className="relative w-full h-48 sm:h-56 lg:h-64 rounded-xl overflow-hidden shadow-2xs border border-slate-200/70">
              <Image
                src="/why_choose_us.jpg"
                alt="Modern residential apartment building inspected by Trayaksh"
                fill
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 25vw"
                quality={90}
              />
            </div>
          </div>

          {/* Middle Column: Heading & Description (4/12) */}
          <div className="lg:col-span-4 space-y-2 text-center lg:text-left">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block">
              WHY CHOOSE TRAYAKSH
            </span>
            <h2
              id="why-us-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0f172a] leading-tight"
            >
              Quality Inspections. <br className="hidden lg:inline" />
              Greater Peace of Mind.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed pt-1">
              We combine technical expertise, modern tools and a client-first approach to give you clear, unbiased insights about your property.
            </p>
          </div>

          {/* Right Column: 6 Features divided into 2 sub-columns with lighter vertical lines */}
          <div className="lg:col-span-5 lg:border-l lg:border-slate-200/80 lg:pl-6 py-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
              
              {/* Sub-column 1 (Points 1, 2, 3) */}
              <ul className="space-y-3.5 sm:space-y-4.5">
                {COLUMN_1.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-100/80">
                    {feature.icon}
                    <span className="text-sm sm:text-base font-semibold text-[#0f172a] leading-snug">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>

              {/* Sub-column 2 (Points 4, 5, 6 - starting with Detailed & Easy-to-Understand Reports) with lighter vertical line */}
              <ul className="space-y-3.5 sm:space-y-4.5 border-l border-slate-200/80 pl-4 sm:pl-6">
                {COLUMN_2.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3 bg-white sm:bg-transparent p-2.5 sm:p-0 rounded-lg sm:rounded-none border sm:border-0 border-slate-100/80">
                    {feature.icon}
                    <span className="text-sm sm:text-base font-semibold text-[#0f172a] leading-snug">
                      {feature.title}
                    </span>
                  </li>
                ))}
              </ul>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

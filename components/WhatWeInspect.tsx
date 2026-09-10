import Image from "next/image";

const CHECKLIST_ITEMS = [
  { id: "01", title: "Civil & Structure", image: "/inspect_01.jpg" },
  { id: "02", title: "Flooring & Tiling", image: "/inspect_02.jpg" },
  { id: "03", title: "Plumbing", image: "/inspect_03.jpg" },
  { id: "04", title: "Electrical", image: "/inspect_04.jpg" },
  { id: "05", title: "Doors & Windows", image: "/inspect_05.jpg" },
  { id: "06", title: "Bathrooms", image: "/inspect_06.jpg" },
  { id: "07", title: "Kitchen", image: "/inspect_07.jpg" },
  { id: "08", title: "Walls & Ceilings", image: "/inspect_08.jpg" },
  { id: "09", title: "Water Leakage", image: "/inspect_09.jpg" },
  { id: "10", title: "Safety & Finishing", image: "/inspect_10.jpg" },
];

export default function WhatWeInspect() {
  return (
    <section
      id="inspect"
      className="w-full bg-[#f0f7f4] py-6 sm:py-7 lg:py-8"
      aria-labelledby="inspect-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Description (4/12) */}
          <header className="lg:col-span-4 space-y-2 text-center lg:text-left">
            <div className="space-y-1">
              <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block">
                WHAT WE INSPECT
              </span>
              <h2
                id="inspect-heading"
                className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-[#0f172a] leading-tight"
              >
                We Look Beyond <br className="hidden lg:inline" />
                the Surface
              </h2>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Our detailed checklist covers every critical aspect of your property, 
              from structure to finishing, so you don&apos;t have to worry about what you can&apos;t see.
            </p>
          </header>

          {/* Right Column: 10 Inspection Cards Grid (8/12 - 5 Columns Desktop) */}
          <div className="lg:col-span-8">
            <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2.5 sm:gap-3">
              {CHECKLIST_ITEMS.map((item) => (
                <li key={item.id} className="flex">
                  <article className="group flex flex-col w-full rounded-xl bg-white border border-[#f5eee4] overflow-hidden shadow-2xs hover:shadow-sm transition-all">
                    
                    {/* Card Image Banner */}
                    <figure className="relative h-16 sm:h-18 w-full overflow-hidden bg-slate-100 m-0">
                      <Image
                        src={item.image}
                        alt={`${item.title} inspection detail`}
                        fill
                        className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                        sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 20vw"
                      />
                    </figure>

                    {/* Card Text Content */}
                    <div className="p-2 sm:p-2.5 flex flex-col justify-start">
                      <span className="text-[10px] font-mono font-semibold text-slate-400 mb-0.5 block">
                        {item.id}
                      </span>
                      <h3 className="text-xs font-bold text-[#0f172a] leading-snug">
                        {item.title}
                      </h3>
                    </div>

                  </article>
                </li>
              ))}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

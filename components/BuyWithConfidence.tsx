import { Search, FileText, ShieldCheck, CheckCircle2 } from "lucide-react";

const FEATURES = [
  {
    icon: Search,
    title: "200+",
    subtitle: "Inspection Points",
  },
  {
    icon: FileText,
    title: "Detailed",
    subtitle: "Inspection Reports",
  },
  {
    icon: ShieldCheck,
    title: "Independent",
    subtitle: "Professional Assessment",
  },
  {
    icon: CheckCircle2,
    title: "Actionable",
    subtitle: "Defect Recommendations",
  },
];

export default function BuyWithConfidence() {
  return (
    <section
      id="confidence"
      className="w-full bg-[#fdfbf7] py-6 sm:py-7 lg:py-8 border-b border-[#f5eee4]"
      aria-labelledby="confidence-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center">
          
          {/* Left Column: Heading & Description (4/12) */}
          <header className="lg:col-span-4 space-y-2.5 text-center lg:text-left">
            <span className="text-xs sm:text-sm font-bold tracking-widest text-slate-500 uppercase block">
              BUY WITH CONFIDENCE
            </span>
            <h2
              id="confidence-heading"
              className="text-xl sm:text-2xl lg:text-3xl font-serif sm:font-sans font-semibold tracking-tight text-[#0f172a] leading-tight"
            >
              A beautiful property <br className="hidden sm:inline lg:hidden" />
              can still hide problems <br className="hidden lg:inline" />
              you can&apos;t see.
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 font-normal leading-relaxed max-w-md mx-auto lg:mx-0">
              Our inspectors systematically examine your property before you take possession.
            </p>
          </header>

          {/* Right Column: 4 Feature Cards (Slightly Increased Width) */}
          <div className="lg:col-span-8 lg:pl-2">
            <ul className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 sm:gap-3.5">
              {FEATURES.map((item) => {
                const Icon = item.icon;
                return (
                  <li key={item.subtitle}>
                    <article className="h-full flex flex-col justify-start gap-1.5 sm:gap-2 rounded-xl bg-white px-4 py-3.5 sm:px-5 sm:py-4 shadow-2xs border border-[#f5eee4] hover:shadow-sm transition-all">
                      <Icon className="h-9 w-9 sm:h-10 sm:w-10 text-[#0d3b3b] stroke-[1.5]" aria-hidden="true" />
                      <div className="space-y-0.5">
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold text-[#0f172a] tracking-tight">
                          {item.title}
                        </h3>
                        <p className="text-[11px] sm:text-xs font-medium text-slate-500 leading-tight">
                          {item.subtitle}
                        </p>
                      </div>
                    </article>
                  </li>
                );
              })}
            </ul>
          </div>

        </div>
      </div>
    </section>
  );
}

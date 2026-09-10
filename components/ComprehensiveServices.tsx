import Image from "next/image";
import { Building2, Home, RotateCw, FileText } from "lucide-react";

const SERVICES = [
  {
    title: "Pre-Handover Inspection",
    description: "Before accepting possession from the builder.",
    image: "/service_pre_handover.jpg",
    icon: Building2,
  },
  {
    title: "New Property Inspection",
    description: "Identify construction and finishing defects.",
    image: "/service_new_property.jpg",
    icon: Home,
  },
  {
    title: "Pre-Purchase Inspection",
    description: "Inspect a property before you buy.",
    image: "/service_pre_purchase.jpg",
    icon: Home,
  },
  {
    title: "Re-Inspection",
    description: "Verify whether reported defects were fixed.",
    image: "/service_reinspection.jpg",
    icon: RotateCw,
  },
  {
    title: "Commercial Property Inspection",
    description: "Inspection for offices and commercial spaces.",
    image: "/service_commercial.jpg",
    icon: Building2,
  },
  {
    title: "Property Consulting",
    description: "Professional assessment and guidance.",
    image: "/service_consulting.jpg",
    icon: FileText,
  },
];

export default function ComprehensiveServices() {
  return (
    <section
      id="services"
      className="w-full bg-white py-6 sm:py-8 lg:py-10"
      aria-labelledby="services-heading"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <header className="flex flex-col md:flex-row md:items-end justify-between gap-3 mb-6 sm:mb-8">
          <div className="space-y-1">
            <span className="text-xs font-bold tracking-widest text-slate-500 uppercase block">
              OUR SERVICES
            </span>
            <h2
              id="services-heading"
              className="text-xl sm:text-2xl lg:text-3xl font-semibold tracking-tight text-[#0f172a]"
            >
              Comprehensive Property Inspection Services
            </h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-500 font-normal max-w-xs leading-relaxed md:text-right">
            From handover to purchase, we help you make informed decisions with expert advice.
          </p>
        </header>

        {/* 6 Services Cards Grid */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-6 gap-3.5 sm:gap-4">
          {SERVICES.map((service) => {
            const Icon = service.icon;
            return (
              <li key={service.title} className="flex">
                <article className="group flex flex-col w-full rounded-xl bg-white border border-slate-200/70 overflow-hidden shadow-2xs hover:shadow-sm hover:border-slate-300 transition-all">
                  
                  {/* Card Image (Compact height) */}
                  <figure className="relative h-24 sm:h-28 w-full overflow-hidden bg-slate-100 m-0">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 33vw, 16vw"
                    />
                  </figure>

                  {/* Card Content Body (Standalone Icons without background color) */}
                  <div className="flex-1 p-3 sm:p-3.5 flex flex-col justify-between space-y-2">
                    <div>
                      <Icon className="h-5 w-5 text-[#0d3b3b] stroke-[1.75] mb-2" aria-hidden="true" />
                      <h3 className="text-xs sm:text-sm font-bold text-[#0f172a] tracking-tight leading-snug">
                        {service.title}
                      </h3>
                    </div>
                    <p className="text-[11px] sm:text-xs text-slate-500 font-normal leading-relaxed">
                      {service.description}
                    </p>
                  </div>

                </article>
              </li>
            );
          })}
        </ul>

      </div>
    </section>
  );
}

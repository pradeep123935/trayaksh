import Image from "next/image";
import { Menu } from "lucide-react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About Us", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "What We Inspect", href: "#inspect" },
  { name: "Why Us", href: "#why-us" },
  { name: "Reviews", href: "#testimonials" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow-xs">
      <div className="mx-auto flex h-16 sm:h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 relative">
        
        {/* Brand Logo & Title */}
        <a
          href="#home"
          className="flex items-center gap-2.5 sm:gap-3.5 group rounded-lg focus:outline-hidden"
          title="Trayaksh - Property Inspection & Consulting"
        >
          <span className="flex items-center justify-center shrink-0">
            <Image
              src="/logo.svg"
              alt="Trayaksh Property Inspection Logo"
              width={48}
              height={42}
              className="h-8 sm:h-11 w-auto object-contain transition-transform group-hover:scale-105"
              priority
            />
          </span>
          <span className="brand flex flex-col justify-center select-none">
            <span className="brand-name text-lg sm:text-2xl">TRAYAKSH</span>
            <span className="brand-subtitle text-[8px] sm:text-[10px]">
              Property Inspection &amp; Consulting
            </span>
          </span>
        </a>

        {/* Desktop Navigation Links (Semantic <nav> and <ul>) */}
        <nav className="hidden md:flex items-center" aria-label="Main Navigation">
          <ul className="flex items-center gap-3 lg:gap-6 text-xs lg:text-sm font-medium text-[#172525]">
            {NAV_LINKS.map((link, index) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className={`transition-colors py-1 hover:text-[#0d3b3b] ${
                    index === 0 ? "nav-link-active" : "text-slate-700"
                  }`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Action Button & Pure CSS Mobile Menu Toggle */}
        <div className="flex items-center gap-3 sm:gap-4">
          <a
            href="#contact"
            className="group btn-gradient hidden sm:inline-flex items-center justify-center gap-2 rounded-md px-4 sm:px-5 py-2 sm:py-2.5 text-xs sm:text-sm font-medium text-white transition-all hover:brightness-110 active:scale-98"
            title="Book a Property Inspection"
          >
            <span>Book an Inspection</span>
            <span className="text-base leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
          </a>

          {/* Pure HTML/CSS Checkbox Toggle for Mobile Menu */}
          <input
            type="checkbox"
            id="mobile-menu-toggle"
            className="peer hidden"
            aria-label="Toggle Navigation Menu"
          />
          <label
            htmlFor="mobile-menu-toggle"
            className="flex h-9 w-9 sm:h-10 sm:w-10 items-center justify-center rounded-lg border border-slate-200 text-[#0d3b3b] md:hidden cursor-pointer hover:bg-slate-50 active:scale-95 transition-all"
            title="Toggle Navigation Menu"
          >
            <Menu className="h-5 w-5" />
          </label>

          {/* Mobile Navigation Drawer (Pure CSS Toggle using peer-checked) */}
          <nav
            className="absolute top-full left-0 right-0 hidden peer-checked:block md:peer-checked:hidden border-t border-slate-100 bg-white px-4 pt-3 pb-6 shadow-xl z-50"
            aria-label="Mobile Navigation Drawer"
          >
            <ul className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block rounded-lg px-3 py-2.5 text-sm sm:text-base font-medium text-slate-700 hover:bg-slate-50 hover:text-[#0d3b3b] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-3 pt-3 border-t border-slate-100">
              <a
                href="#contact"
                className="group btn-gradient flex w-full items-center justify-center gap-2 rounded-md px-4 py-3 text-sm font-medium text-white shadow-md"
              >
                <span>Book an Inspection</span>
                <span className="text-base leading-none transition-transform group-hover:translate-x-1" aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}

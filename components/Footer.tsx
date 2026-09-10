import Image from "next/image";

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#061e1c] text-white overflow-hidden">
      
      {/* Background Dusk Building Image */}
      <Image
        src="/footer_bg.png"
        alt="Trayaksh luxury apartment building at dusk"
        fill
        className="object-cover object-right pointer-events-none opacity-85"
        priority
      />

      {/* Rich Dark Green Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#061e1c] via-[#061e1c]/95 to-[#061e1c]/35 z-10 pointer-events-none" />

      {/* Main Footer Content */}
      <div className="relative z-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-10 sm:pt-12 lg:pt-14 pb-3 sm:pb-4">
        
        {/* Main 4-Column Footer Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-6 lg:gap-10 pb-4">
          
          {/* Column 1: Brand & Logo (4/12) */}
          <div className="lg:col-span-4 space-y-3.5">
            <div className="flex items-center gap-3">
              <Image
                src="/logo.svg"
                alt="Trayaksh Logo"
                width={36}
                height={36}
                className="h-8 w-auto brightness-0 invert"
              />
              <div className="flex flex-col">
                <span className="brand-name-light text-lg tracking-[4px]">TRAYAKSH</span>
                <span className="brand-subtitle-light text-[9px]">Property Inspection &amp; Consulting</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-slate-300 font-normal leading-relaxed max-w-sm">
              Independent, comprehensive property inspection and technical consulting services to help you make informed, confident real estate decisions.
            </p>
          </div>

          {/* Column 2: Our Services (3/12) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold tracking-widest text-[#2dd4bf] uppercase">
              OUR SERVICES
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#services" className="hover:text-white transition-colors">Pre-Handover Inspection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">New Property Inspection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pre-Purchase Inspection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Re-inspection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Property Inspection</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Property Consulting</a></li>
            </ul>
          </div>

          {/* Column 3: Navigation Links (2/12) */}
          <div className="lg:col-span-2 space-y-3">
            <h3 className="text-xs font-bold tracking-widest text-[#2dd4bf] uppercase">
              NAVIGATION
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-slate-300">
              <li><a href="#home" className="hover:text-white transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#inspect" className="hover:text-white transition-colors">What We Inspect</a></li>
              <li><a href="#why-us" className="hover:text-white transition-colors">Why Choose Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Book Inspection</a></li>
            </ul>
          </div>

          {/* Column 4: Contact Us (3/12) */}
          <div className="lg:col-span-3 space-y-3">
            <h3 className="text-xs font-bold tracking-widest text-[#2dd4bf] uppercase">
              CONTACT US
            </h3>
            <ul className="space-y-2.5 text-xs sm:text-sm text-slate-300">
              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#2dd4bf] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-2.826-1.47-5.114-3.758-6.584-6.584l1.293-.97c.362-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                <a href="tel:+919876543210" className="hover:text-white transition-colors">+91 98765 43210</a>
              </li>

              <li className="flex items-center gap-2.5">
                <svg className="w-4 h-4 text-[#2dd4bf] shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                <a href="mailto:hello@trayaksh.com" className="hover:text-white transition-colors">hello@trayaksh.com</a>
              </li>

              <li className="flex items-start gap-2.5">
                <svg className="w-4 h-4 text-[#2dd4bf] shrink-0 mt-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <span>Hyderabad, Telangana, India</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Centered Copyright */}
        <div className="pt-3 text-center text-xs text-slate-400">
          <p>&copy; {new Date().getFullYear()} Trayaksh. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}

import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-slate-100 border-t border-slate-200 py-16 mt-20">
      <div className="container mx-auto px-4 grid md:grid-cols-4 gap-10">

        {/* LOGO + ABOUT */}
        <div className="space-y-4">
          <div className="flex items-center gap-3">
            <Image 
              src="/logo.svg" 
              alt="Langford Dentistry Logo" 
              width={50}
              height={50}
              className="rounded-full"
            />
            <div className="flex flex-col leading-tight">
              <span className="text-xl font-semibold text-slate-900">Langford</span>
            <span className="text-xl font-semibold text-blue-900">Dentistry</span>
            </div>
          </div>

          <p className="text-slate-600 text-sm max-w-xs">
            Providing modern, personalised dental care in the heart of Liverpool. 
            Trusted by families, professionals, and patients seeking high-quality treatment.
          </p>
        </div>

        {/* QUICK LINKS */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Quick Links</h3>
          <ul className="space-y-2 text-slate-600">
            <li><Link href="/" className="hover:text-blue-600">Home</Link></li>
            <li><Link href="/why-us" className="hover:text-blue-600">Why Us</Link></li>
            <li><Link href="/treatments" className="hover:text-blue-600">Treatments</Link></li>
            <li><Link href="/contact" className="hover:text-blue-600">Contact</Link></li>
          </ul>
        </div>

        {/* CONTACT DETAILS */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Contact</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>📍 12 Langford Street, Liverpool L1</li>
            <li>📞 0151 123 4567</li>
            <li>✉️ info@langforddental.co.uk</li>
          </ul>
        </div>

        {/* OPENING HOURS */}
        <div>
          <h3 className="text-lg font-semibold text-slate-900 mb-4">Opening Hours</h3>
          <ul className="space-y-2 text-slate-600 text-sm">
            <li>Mon – Fri: 9:00am – 6:00pm</li>
            <li>Saturday: 10:00am – 4:00pm</li>
            <li>Sunday: Closed</li>
          </ul>
        </div>

      </div>

      {/* COPYRIGHT */}
      <div className="border-t border-slate-300 mt-12 pt-8 text-center text-sm text-slate-600">
        © {new Date().getFullYear()} Langford Dentistry. All rights reserved.
      </div>
    </footer>
  );
}

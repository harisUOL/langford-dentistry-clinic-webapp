"use client";

import Image from "next/image";
import Link from "next/link";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";

export function Navbar() {
  return (
    <header className="w-full border-b border-slate-200 bg-white sticky top-0 z-50">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">

        {/* Logo + Brand */}
        <Link href="/" className="flex items-center gap-3">
          <Image 
            src="/logo.svg" 
            alt="Langford Dentistry Logo" 
            width={60}
            height={60}
            className="rounded-full"
          />
          <div className="flex flex-col leading-tight">
            <span className="text-xl font-semibold text-slate-900">Langford</span>
            <span className="text-xl font-semibold text-blue-900">Dentistry</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8 text-slate-700 text-lg">
          <Link href="/" className="hover:text-blue-600">Home</Link>
          <Link href="/why-us" className="hover:text-blue-600">Why Us</Link>
          <Link href="/treatments" className="hover:text-blue-600">Treatments</Link>
          <Link href="/contact" className="hover:text-blue-600">Contact</Link>
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:block">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-6">
          <Link href="/book">
            Book Appointment
          </Link>
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <button>
                <Menu size={28} className="text-slate-800" />
              </button>
            </SheetTrigger>

            <SheetContent side="right" className="w-64 bg-white">
              <nav className="flex flex-col gap-6 mt-10 text-lg text-slate-700">
                <Link href="/" className="hover:text-blue-600">Home</Link>
                <Link href="/why-us" className="hover:text-blue-600">Why Us</Link>
                <Link href="/treatments" className="hover:text-blue-600">Treatments</Link>
                <Link href="/contact" className="hover:text-blue-600">Contact</Link>

                <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl mt-4">
                  Book Appointment
                </Button>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

      </div>
    </header>
  );
}

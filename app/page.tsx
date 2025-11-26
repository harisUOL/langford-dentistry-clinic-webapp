"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";


import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="bg-white">

       {/* PREMIUM HERO */}
      <section className="relative w-full bg-[#63c9cb] text-white overflow-hidden">
        

        {/* Hero Content */}
        <div className="container mx-auto px-6 py-28 grid md:grid-cols-2 gap-12 items-center">
          
          {/* LEFT IMAGE (Dentist Team / Clinic) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <Image
              src="/hero.png"  // <-- replace with your group cutout image
              alt="Dental Team"
              width={650}
              height={650}
              className="rounded-2xl object-cover"
              priority
            />
          </motion.div>

          {/* RIGHT TEXT */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h1 className="text-5xl md:text-6xl font-bold leading-tight">
              Number One Private<br />Dentist in Liverpool.
            </h1>

            <p className="text-lg text-white max-w-lg">
              Book your free consultation with the No. 1, multi-award-winning 
              private dentist in Liverpool today.
            </p>

            {/* Rounded CTA Button */}
            <Link href="/contact">
              <button className="px-10 py-4 bg-white text-[#0f2a3d] rounded-full text-lg font-semibold shadow-lg hover:bg-slate-100 transition flex items-center gap-3">
                Get in touch 
                <span>→</span>
              </button>
            </Link>
          </motion.div>
        </div>

      </section>


      {/* ================== SERVICES SECTION ================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-14">

          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold text-slate-900">Our Key Treatments</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              High-quality dental treatments tailored to your needs.
            </p>
          </div>

          {/* SERVICES GRID */}
          <div className="grid md:grid-cols-4 gap-10">

            {[
              { title: "Teeth Whitening", img: "/service-1.jpg" },
              { title: "Invisalign & Aligners", img: "/service-2.jpg" },
              { title: "Cosmetic Dentistry", img: "/service-3.jpg" },
              { title: "General Dentistry", img: "/service-4.jpg" },
            ].map((item, index) => (
              <div
                key={index}
                className="rounded-2xl shadow-md overflow-hidden bg-white hover:shadow-xl transition"
              >
                <Image src={item.img} alt={item.title} width={400} height={300} className="h-48 w-full object-cover" />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold text-slate-900">{item.title}</h3>
                </div>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================== WHY CHOOSE US ================== */}
      <section className="py-24   bg-[#b8e8e9]">
        <div className="container mx-auto px-4 space-y-14">

          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold text-slate-900">Why Choose Langford Dentistry?</h2>
            <p className="text-slate-600 max-w-2xl mx-auto">
              A modern clinic built around comfort, transparency, and exceptional care.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              {
                title: "Experienced Team",
                desc: "Highly trained dentists with years of clinical expertise."
              },
              {
                title: "Advanced Technology",
                desc: "State-of-the-art treatments for accurate diagnosis and comfort."
              },
              {
                title: "Patient-First Approach",
                desc: "We prioritise comfort, clarity, and personalised care."
              },
            ].map((i, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                <h3 className="text-2xl font-semibold text-slate-900 mb-3">{i.title}</h3>
                <p className="text-slate-600">{i.desc}</p>
              </div>
            ))}
          </div>

        </div>
      </section>


      {/* ================== TREATMENTS GRID ================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-14">
          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold text-slate-900">Explore Our Treatments</h2>
            <p className="text-slate-600">We offer a wide range of dental services for every need.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-10">
            {[
              "Dental Implants",
              "Veneers",
              "Composite Bonding",
              "Crowns & Bridges",
              "Emergency Dentistry",
              "Hygienist Appointments"
            ].map((t, i) => (
              <div key={i} className="p-8 rounded-2xl bg-slate-50 hover:bg-slate-100 transition text-center border border-slate-200">
                <h3 className="text-xl font-semibold text-slate-900">{t}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ================== TESTIMONIALS ================== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 space-y-14">

          <div className="text-center space-y-4">
            <h2 className="text-4xl font-semibold text-slate-900">What Our Patients Say</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-10">

            {[
              "Amazing experience, friendly staff and painless treatment!",
              "The best dentist I’ve ever visited — highly recommended.",
              "Modern clinic, very clean and professional service."
            ].map((review, idx) => (
              <div key={idx} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
                <p className="text-slate-600 italic">“{review}”</p>
              </div>
            ))}

          </div>

        </div>
      </section>


      {/* ================== GALLERY ================== */}
      <section className="py-24 bg-white">
        <div className="container mx-auto px-4 space-y-14">

          <h2 className="text-4xl font-semibold text-slate-900 text-center">Our Clinic</h2>

          <div className="grid md:grid-cols-3 gap-10">
            {["/gallery-1.jpg", "/gallery-2.jpg", "/gallery-3.jpg"].map((img, i) => (
              <Image
                key={i}
                src={img}
                width={400}
                height={300}
                alt="Clinic Gallery"
                className="rounded-2xl shadow-lg object-cover h-72"
              />
            ))}
          </div>

        </div>
      </section>


      {/* ================== CTA ================== */}
      <section className="py-24 bg-blue-600">
        <div className="container mx-auto px-4 text-center space-y-6">

          <h2 className="text-4xl font-semibold text-white">
            Ready to Transform Your Smile?
          </h2>

          <p className="text-blue-100 max-w-xl mx-auto">
            Book your appointment today and start your journey to a healthier, brighter smile.
          </p>

          <Button className="bg-white text-blue-600 hover:bg-blue-100 px-8 py-6 text-lg rounded-xl">
            Book Appointment
          </Button>

        </div>
      </section>

    </main>
  );
}

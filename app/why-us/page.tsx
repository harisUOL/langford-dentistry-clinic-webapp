import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function WhyUsPage() {
  return (
    <main className="bg-white">

      {/* ================== HERO ================== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
            Why Choose Langford Dentistry?
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Modern, patient-centred care built on trust, expertise, and comfort.
          </p>
        </div>
      </section>

      {/* ================== CORE VALUES ================== */}
      <section className="py-24 container mx-auto px-4">

        <div className="grid md:grid-cols-3 gap-12">

          {/* EXPERIENCE */}
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Experienced Clinicians
            </h3>
            <p className="text-slate-600">
              Our team brings years of dental expertise, delivering safe and 
              professional care using the latest clinical techniques.
            </p>
          </div>

          {/* TECHNOLOGY */}
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Modern Technology
            </h3>
            <p className="text-slate-600">
              We use state-of-the-art equipment for precise diagnostics, 
              comfortable treatments, and long-lasting results.
            </p>
          </div>

          {/* COMFORT */}
          <div className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition">
            <h3 className="text-2xl font-semibold text-slate-900 mb-3">
              Comfort-Focused Care
            </h3>
            <p className="text-slate-600">
              From online bookings to pain-free treatment options, we ensure 
              every patient feels relaxed and supported.
            </p>
          </div>

        </div>

      </section>

      {/* ================== IMAGE SPLIT SECTION ================== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-16 items-center">

          <div>
            <Image
              src="/clinic-hero.jpg"
              alt="Dental Clinic"
              width={600}
              height={450}
              className="rounded-2xl shadow-xl object-cover"
            />
          </div>

          <div className="space-y-6">
            <h2 className="text-3xl font-semibold text-slate-900">
              A Clinic Built Around You
            </h2>
            <p className="text-slate-600 leading-relaxed">
              We believe exceptional dentistry starts with compassion, clear 
              communication, and personalised care. That’s why every appointment 
              at Langford Dentistry is tailored to your needs — from simple 
              check-ups to transformative smile treatments.
            </p>

            <p className="text-slate-600 leading-relaxed">
              Our goal is to create a calm, welcoming environment where you feel 
              confident in the quality of your care and fully informed at every step.
            </p>
          </div>

        </div>
      </section>

      {/* ================== HIGHLIGHTS ================== */}
      <section className="py-24 container mx-auto px-4 space-y-16">

        <div className="text-center space-y-4">
          <h2 className="text-4xl font-semibold text-slate-900">
            What Makes Us Different
          </h2>
          <p className="text-slate-600 max-w-2xl mx-auto">
            A modern clinic with a focus on comfort, clarity, and clinical excellence.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-12">
          
          <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Transparent Pricing</h3>
            <p className="text-slate-600">Clear, honest pricing with no hidden fees.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Advanced Treatments</h3>
            <p className="text-slate-600">From Invisalign to implants — all in one place.</p>
          </div>

          <div className="p-8 bg-white rounded-2xl border border-slate-200 text-center">
            <h3 className="text-xl font-semibold text-blue-600 mb-3">Friendly Team</h3>
            <p className="text-slate-600">A welcoming environment for all ages.</p>
          </div>

        </div>

      </section>

      {/* ================== CTA ================== */}
      <section className="py-20 bg-blue-600 text-center">
        <h2 className="text-4xl font-semibold text-white">
          Ready to Experience Better Dental Care?
        </h2>

        <p className="text-blue-100 max-w-xl mx-auto mt-4">
          Book an appointment today and let our team take care of your smile.
        </p>

        <Button className="mt-8 bg-white text-blue-600 hover:bg-blue-100 px-8 py-6 rounded-xl text-lg">
          Book an Appointment
        </Button>
      </section>

    </main>
  );
}

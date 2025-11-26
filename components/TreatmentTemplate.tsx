import Image from "next/image";
import { Button } from "@/components/ui/button";

interface TreatmentProps {
  title: string;
  description: string;
  image: string;
  benefits: string[];
  steps: string[];
}

export default function TreatmentTemplate({
  title,
  description,
  image,
  benefits,
  steps,
}: TreatmentProps) {
  return (
    <main className="bg-white">

      {/* HERO */}
      <section className="py-20 bg-slate-50">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
            {title}
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">{description}</p>
        </div>
      </section>

      {/* IMAGE + CONTENT */}
      <section className="py-24 container mx-auto px-4 grid md:grid-cols-2 gap-14 items-center">

        {/* Treatment Image */}
        <Image
          src={image}
          alt={title}
          width={600}
          height={450}
          className="rounded-2xl shadow-xl object-cover"
        />

        {/* Benefits */}
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-slate-900">
            Benefits of {title}
          </h2>

          <ul className="space-y-3 text-slate-600">
            {benefits.map((item, i) => (
              <li key={i} className="flex gap-3">
                <span className="text-blue-600">✔</span>
                {item}
              </li>
            ))}
          </ul>

          <Button className="bg-blue-600 hover:bg-blue-700 text-white rounded-xl px-8 py-6 text-lg">
            Book an Appointment
          </Button>
        </div>
      </section>

      {/* TREATMENT STEPS */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 space-y-10">
          <h2 className="text-3xl font-semibold text-slate-900 text-center">
            How the Treatment Works
          </h2>

          <div className="grid md:grid-cols-3 gap-12">
            {steps.map((step, i) => (
              <div key={i} className="p-8 bg-white rounded-2xl shadow-md hover:shadow-xl transition text-center">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Step {i + 1}</h3>
                <p className="text-slate-600">{step}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-center">
        <h2 className="text-3xl font-semibold text-white">
          Ready to Begin Your {title} Journey?
        </h2>
        <p className="text-blue-100 max-w-xl mx-auto mt-4">
          Book a consultation today and let our expert team guide you.
        </p>

        <Button className="mt-8 bg-white text-blue-600 hover:bg-blue-100 px-8 py-6 text-lg rounded-xl">
          Book an Appointment
        </Button>
      </section>

    </main>
  );
}

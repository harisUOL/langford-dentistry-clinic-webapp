import Image from "next/image";
import Link from "next/link";

export default function TreatmentsPage() {
  return (
    <main className="bg-white">

      {/* ================== HERO ================== */}
      <section className="py-24 bg-slate-50">
        <div className="container mx-auto px-4 text-center space-y-6">
          <h1 className="text-4xl md:text-5xl font-semibold text-slate-900">
            Our Treatments
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Explore our full range of dental treatments designed to help you achieve 
            a healthy, confident smile.
          </p>
        </div>
      </section>


      {/* ================== COSMETIC DENTISTRY ================== */}
      <section className="py-20 container mx-auto px-4 space-y-10">

        <h2 className="text-3xl font-semibold text-slate-900">Cosmetic Dentistry</h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              name: "Teeth Whitening",
              img: "/service-1.jpg",
              link: "/treatments/whitening"
            },
            {
              name: "Composite Bonding",
              img: "/service-3.jpg",
              link: "/treatments/composite-bonding"
            },
            {
              name: "Veneers",
              img: "/gallery-3.jpg",
              link: "/treatments/veneers"
            }
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="rounded-2xl shadow-md hover:shadow-xl transition bg-white overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </section>


      {/* ================== ORTHODONTICS ================== */}
      <section className="py-20 container mx-auto px-4 space-y-10">

        <h2 className="text-3xl font-semibold text-slate-900">Orthodontics</h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              name: "Invisalign Clear Aligners",
              img: "/service-2.jpg",
              link: "/treatments/invisalign"
            },
            {
              name: "Smile Makeovers",
              img: "/service-3.jpg",
              link: "/treatments/smile-makeover"
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="rounded-2xl shadow-md hover:shadow-xl transition bg-white overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </section>


      {/* ================== GENERAL DENTISTRY ================== */}
      <section className="py-20 container mx-auto px-4 space-y-10">

        <h2 className="text-3xl font-semibold text-slate-900">General Dentistry</h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              name: "Dental Check-Ups",
              img: "/service-4.jpg",
              link: "/treatments/checkup"
            },
            {
              name: "Fillings",
              img: "/service-4.jpg",
              link: "/treatments/fillings"
            },
            {
              name: "Hygienist Appointment",
              img: "/gallery-1.jpg",
              link: "/treatments/hygienist"
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="rounded-2xl shadow-md hover:shadow-xl transition bg-white overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </section>


      {/* ================== RESTORATIVE DENTISTRY ================== */}
      <section className="py-20 container mx-auto px-4 space-y-10">

        <h2 className="text-3xl font-semibold text-slate-900">Restorative Dentistry</h2>

        <div className="grid md:grid-cols-3 gap-10">

          {[
            {
              name: "Dental Implants",
              img: "/gallery-2.jpg",
              link: "/treatments/implants"
            },
            {
              name: "Crowns & Bridges",
              img: "/gallery-3.jpg",
              link: "/treatments/crowns-bridges"
            },
            {
              name: "Dentures",
              img: "/gallery-1.jpg",
              link: "/treatments/dentures"
            },
          ].map((item, i) => (
            <Link
              key={i}
              href={item.link}
              className="rounded-2xl shadow-md hover:shadow-xl transition bg-white overflow-hidden"
            >
              <Image
                src={item.img}
                alt={item.name}
                width={400}
                height={300}
                className="h-48 w-full object-cover"
              />
              <div className="p-6 text-center">
                <h3 className="text-xl font-semibold text-slate-900">
                  {item.name}
                </h3>
              </div>
            </Link>
          ))}

        </div>
      </section>

      {/* ================== CTA ================== */}
      <section className="py-20 bg-blue-600 text-center">
        <h2 className="text-4xl font-semibold text-white">
          Not Sure Which Treatment You Need?
        </h2>

        <p className="text-blue-100 max-w-xl mx-auto mt-4">
          Book a consultation and our team will guide you to the right treatment.
        </p>

        <Link href="/book">
          <button className="mt-8 bg-white text-blue-600 hover:bg-blue-100 px-8 py-6 rounded-xl text-lg">
            Book an Appointment
          </button>
        </Link>
      </section>

    </main>
  );
}

"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function ContactPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    const res = await fetch("/api/contact", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    } else {
      alert("Something went wrong. Try again.");
    }
  }

  return (
    <main className="bg-white">
      <section className="py-24 container mx-auto px-4 space-y-16">

        {/* Page Title */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900">
            Contact Langford Dentistry
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Have questions or want to schedule an appointment? We are here to help.
          </p>
        </div>

        {/* GRID: FORM + CONTACT INFO */}
        <div className="grid md:grid-cols-2 gap-16">

          {/* CONTACT FORM */}
          <div>
            <h2 className="text-2xl font-semibold text-slate-900 mb-6">
              Send Us a Message
            </h2>

            {success ? (
              <div className="p-6 rounded-xl bg-green-100 text-green-800">
                Thank you! Your message has been sent. We’ll get back to you shortly.
              </div>
            ) : (
              <form
                action={handleSubmit}
                className="space-y-6"
              >
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Your Name
                  </label>
                  <Input name="name" required placeholder="John Doe" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Email Address
                  </label>
                  <Input name="email" type="email" required placeholder="john@example.com" />
                </div>

                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">
                    Message
                  </label>
                  <Textarea
                    name="message"
                    required
                    placeholder="How can we help?"
                    className="min-h-[140px]"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={loading}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-6 rounded-xl w-full"
                >
                  {loading ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* CONTACT DETAILS */}
          <div className="space-y-8">
            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Clinic Information</h2>
              <p className="text-slate-600">
                📍 <strong>Address:</strong><br />
                12 Langford Street, Liverpool L1
              </p>
              <p className="text-slate-600 mt-4">
                📞 <strong>Phone:</strong><br />
                0151 123 4567
              </p>
              <p className="text-slate-600 mt-4">
                ✉️ <strong>Email:</strong><br />
                info@langforddental.co.uk
              </p>
            </div>

            <div>
              <h2 className="text-2xl font-semibold text-slate-900 mb-4">Opening Hours</h2>
              <ul className="text-slate-600 space-y-1">
                <li>Mon – Fri: 9:00am – 6:00pm</li>
                <li>Saturday: 10:00am – 4:00pm</li>
                <li>Sunday: Closed</li>
              </ul>
            </div>

            {/* MAP PLACEHOLDER */}
            <div className="rounded-xl overflow-hidden shadow-md">
              <iframe
                src="https://maps.google.com/maps?q=liverpool&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-64"
                loading="lazy"
              />
            </div>
          </div>

        </div>
      </section>
    </main>
  );
}

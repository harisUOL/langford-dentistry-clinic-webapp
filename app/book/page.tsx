"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export default function BookPage() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  async function handleSubmit(formData: FormData) {
    setLoading(true);

    // This will send data to /api/book (we will build backend later)
    const res = await fetch("/api/book", {
      method: "POST",
      body: formData,
    });

    setLoading(false);

    if (res.ok) {
      setSuccess(true);
    } else {
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <main className="bg-white">
      <section className="py-24 container mx-auto px-4 space-y-16">

        {/* PAGE HEADER */}
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-semibold text-slate-900">
            Book an Appointment
          </h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Fill in the details below and our team will contact you to confirm your appointment.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">

          {/* SUCCESS MESSAGE */}
          {success ? (
            <div className="p-6 rounded-xl bg-green-100 text-green-800 text-center">
              Thank you! Your booking request has been received.
              <br />We will contact you soon to confirm your appointment.
            </div>
          ) : (
            <form action={handleSubmit} className="space-y-6">

              {/* FULL NAME */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Full Name
                </label>
                <Input
                  name="name"
                  required
                  placeholder="John Doe"
                />
              </div>

              {/* EMAIL */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Email Address
                </label>
                <Input
                  name="email"
                  type="email"
                  required
                  placeholder="john@example.com"
                />
              </div>

              {/* PHONE */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Phone Number
                </label>
                <Input
                  name="phone"
                  type="tel"
                  required
                  placeholder="0151 000 0000"
                />
              </div>

              {/* TREATMENT SELECT */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Treatment
                </label>
                <select
                  name="treatment"
                  required
                  className="w-full border border-slate-300 rounded-xl px-4 py-3 text-slate-700 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  <option value="">Select a Treatment</option>
                  <option>Teeth Whitening</option>
                  <option>Invisalign</option>
                  <option>Dental Implants</option>
                  <option>Veneers</option>
                  <option>Composite Bonding</option>
                  <option>General Check-Up</option>
                  <option>Hygienist Appointment</option>
                </select>
              </div>

              {/* DATE */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Preferred Date
                </label>
                <Input
                  type="date"
                  name="date"
                  required
                />
              </div>

              {/* TIME */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Preferred Time
                </label>
                <Input
                  type="time"
                  name="time"
                  required
                />
              </div>

              {/* NOTES */}
              <div>
                <label className="block text-sm font-medium text-slate-700 mb-1">
                  Additional Notes (Optional)
                </label>
                <Textarea
                  name="notes"
                  placeholder="Tell us anything we should know in advance..."
                  className="min-h-[120px]"
                />
              </div>

              {/* SUBMIT BUTTON */}
              <Button
                type="submit"
                disabled={loading}
                className="bg-blue-600 hover:bg-blue-700 text-white w-full py-6 rounded-xl text-lg"
              >
                {loading ? "Submitting..." : "Submit Booking Request"}
              </Button>
            </form>
          )}
        </div>

      </section>
    </main>
  );
}

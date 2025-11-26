import "./globals.css"
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

export const metadata = {
  title: "Langford Dentistry",
  description: "Premium private dentist in Liverpool",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode; // FIXED TYPE
}) {
  return (
    <html lang="en">
      <body className="bg-white">
        <Navbar />  {/* NAVBAR SHOWS HERE */}
        {children}
        <Footer />
      </body>
    </html>
  );
}

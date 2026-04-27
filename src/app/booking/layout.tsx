import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import BookingProgressBar from "@/components/booking/BookingProgressBar";
import { Suspense } from "react";

export const metadata = {
  title: "Book a Mobile Mechanic — Garage Gaffer",
  description: "Book a trusted, vetted mobile mechanic in Bristol. Get an instant price and choose your availability.",
};

export default function BookingLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Nav />
      <Suspense fallback={
        <div style={{ background: "#fff", borderBottom: "1px solid #DADCDB", height: 72 }} />
      }>
        <BookingProgressBar />
      </Suspense>
      <main style={{ minHeight: "calc(100vh - 144px)", background: "var(--color-bg)" }}>
        {children}
      </main>
      <Footer />
    </>
  );
}

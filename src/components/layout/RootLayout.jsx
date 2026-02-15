import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Suspense } from "react";
import BackToTop from "../ui/BackToTop";

export default function RootLayout() {
  return (
    <div className="relative max-w-screen flex flex-col py-6 px-4 md:py-9 md:px-6 text-left">
      <Navbar />
      <main id="main-content" className="min-h-dvh flex-1 flex-center py-24 ">
        <Suspense
          fallback={<div className="h-screen flex-center">Loading...</div>}
        >
          <Outlet />
        </Suspense>
      </main>
      <BackToTop />
      <Footer />
    </div>
  );
}

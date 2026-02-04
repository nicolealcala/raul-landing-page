import { Outlet } from "react-router";
import Footer from "./Footer";
import Navbar from "./Navbar";
import { Suspense } from "react";

export default function RootLayout() {
  return (
    <div className="min-h-dvh max-w-screen overflow-hidden flex flex-col gap-y-24 py-6 px-4 md:py-9 md:px-6 xl:px-0 text-left">
      <Navbar />
      <main id="main-content" className="flex-1 flex-center">
        <Suspense
          fallback={<div className="h-screen flex-center">Loading...</div>}
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}

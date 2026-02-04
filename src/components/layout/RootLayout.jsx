import Footer from "./Footer";
import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <div className="min-h-dvh max-w-screen overflow-hidden flex flex-col gap-y-24 py-6 px-4 md:py-9 md:px-6 xl:px-0 text-left">
      <Navbar />
      <main>{children}</main>
      <Footer />
    </div>
  );
}

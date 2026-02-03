import Navbar from "./Navbar";

export default function RootLayout({ children }) {
  return (
    <main className="min-h-dvh flex flex-col max-w-7xl py-6 md:py-9 px-4 md:px-6 text-left">
      <Navbar />
      {children}
    </main>
  );
}

import { footerLinks } from "../../lib/data/footer-links";

export default function Footer() {
  return (
    <footer className="flex flex-col gap-y-3 justify-center items-center md:flex-row md:justify-between w-full max-w-7xl mx-auto font-semibold">
      <div className="flex gap-x-6">
        {footerLinks.map((item) => (
          <a key={item.label.replaceAll(" ", "-")} href={item.link}>
            {item.label}
          </a>
        ))}
      </div>
      <span className="text-center md:text-left">
        &copy; 2024 By Enative. All Rights Reserved.
      </span>
    </footer>
  );
}

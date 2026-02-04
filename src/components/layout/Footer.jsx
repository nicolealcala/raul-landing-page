import { footerLinks } from "../../lib/data/footer-links";

export default function Footer() {
  return (
    <footer className="flex justify-between w-full max-w-7xl mx-auto font-semibold">
      <div className="flex gap-x-6">
        {footerLinks.map((item) => (
          <a href={item.link}>{item.label}</a>
        ))}
      </div>
      <span>&copy;2024 By Enative. All Rights Reserved.</span>
    </footer>
  );
}

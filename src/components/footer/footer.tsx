"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";

type ContactLink = {
  icon?: React.ReactNode;
  label: string;
  href: string;
};

type FooterProps = {
  year?: number;
  brandLine?: string; // متن کوتاه کنار آواتار
  avatarSrc?: string; // اختیاری: لوگو/آواتار
  contacts?: ContactLink[];
  columns?: { title?: string; items: { label: string; href: string }[] }[];
  className?: string;
};

const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M2 6.5A2.5 2.5 0 0 1 4.5 4h15A2.5 2.5 0 0 1 22 6.5v11A2.5 2.5 0 0 1 19.5 20h-15A2.5 2.5 0 0 1 2 17.5v-11Zm2.2-.3 7.3 5.2c.3.2.7.2 1 0l7.3-5.2a1 1 0 0 0-.6-.2h-15a1 1 0 0 0-.6.2Zm17.1 1.9-6.9 4.9a3 3 0 0 1-3.6 0L4 8.1v9.4A.5.5 0 0 0 4.5 18h15a.5.5 0 0 0 .5-.5V8.1Z"/>
  </svg>
);

const TelegramIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M9.9 15.6 9.7 19c.3 0 .5-.1.7-.3l1.7-1.6 3.5 2.6c.6.3 1.1.1 1.3-.6l2.4-10c.2-.9-.3-1.3-1.1-1L3.6 11.3c-.9.3-.9.8-.2 1l4.5 1.4 10.4-6.6-8.4 8.5Z"/>
  </svg>
);

const WhatsappIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M20 3.9A10 10 0 0 0 3.2 17.7L2 22l4.4-1.2A10 10 0 0 0 20 3.9Zm-1.7 13.9a8 8 0 0 1-11.6.9l-.3-.3-2.6.7.7-2.6-.3-.3a8 8 0 0 1 13.1-8.9 8 8 0 0 1 1 10.5ZM8.6 7.8c-.2-.4-.4-.3-.6-.3h-.5c-.2 0-.5.1-.8.4s-1 1-1 2.5 1 2.9 1.1 3.1 2 3.1 4.8 4.2c2.4 1 2.9.8 3.4.8.5 0 1.7-.7 1.9-1.4.2-.7.2-1.3.1-1.4-.1-.1-.2-.1-.5-.3l-1.6-.7c-.3-.1-.5-.1-.6.1l-.8 1c-.2.2-.4.2-.6.1-.3-.1-1.1-.4-2.1-1.3-1-.9-1.3-1.8-1.4-2.1 0-.2 0-.4.2-.6l.7-.8c.1-.2.1-.3.1-.5l-.7-1.6Z"/>
  </svg>
);

const PhoneIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
    <path d="M6.6 2h2.1c.5 0 .9.4 1 .9l.4 3.3c0 .5-.2 1-.7 1.2l-1.3.7a13.4 13.4 0 0 0 5.8 5.8l.7-1.3c.2-.5.7-.7 1.2-.7l3.3.4c.5.1.9.5.9 1v2.1c0 .6-.5 1.1-1.1 1.2A18.5 18.5 0 0 1 4.9 3.1C4.8 2.5 5.3 2 5.9 2h.7Z"/>
  </svg>
);

const cls = (...s: (string | false | undefined)[]) => s.filter(Boolean).join(" ");

export default function Footer({
  year = new Date().getFullYear(),
  brandLine = "پلتفرمی برای نظرات واقعی و بدون تبلیغ.",
  avatarSrc,
  className,
  contacts = [
    { icon: <MailIcon className="w-5 h-5" />, label: "commm@gmail.com", href: "mailto:commm@gmail.com" },
    { icon: <TelegramIcon className="w-5 h-5" />, label: "t.me/asdasdsd", href: "https://t.me/asdasdsd" },
    { icon: <WhatsappIcon className="w-5 h-5" />, label: "commm@gmail.com", href: "mailto:commm@gmail.com" },
    { icon: <PhoneIcon className="w-5 h-5" />, label: "+989164532683", href: "tel:+989164532683" },
  ],
  columns = [
    {
      title: "",
      items: [
        { label: "«صفحه اصلی»", href: "/" },
        { label: "«محصولات / شرکت‌ها»", href: "/products" },
        { label: "«ثبتِ نظر»", href: "/review" },
        { label: "«درباره ما»", href: "/about" },
      ],
    },
    {
      title: "",
      items: [
        { label: "«قوانین و مقررات»", href: "/terms" },
        { label: "«حریم خصوصی»", href: "/privacy" },
        { label: "«ارتباط با ما»", href: "/contact" },
      ],
    },
  ],
}: FooterProps) {
  return (
    <footer
      dir="rtl"
      className={cls(
        "mx-auto my-12 max-w-6xl rounded-[28px] bg-[#0c4a4e] text-white shadow-xl",
        "px-6 py-8 md:px-10 md:py-10",
        className
      )}
    >
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 items-start">
        {/* Contacts */}
        <ul className="space-y-4">
          {contacts.map((c, i) => (
            <li key={i} className="flex items-center gap-3">
              <span className="grid place-items-center rounded-md bg-white/10 p-2">
                {c.icon}
              </span>
              <a
                href={c.href}
                className="hover:underline decoration-white/40 underline-offset-4"
              >
                {c.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Link columns */}
        <div className="grid grid-cols-2 gap-6 text-white/90">
          {columns.map((col, i) => (
            <nav key={i} aria-label={col.title ?? `لینک‌های ${i + 1}`}>
              {col.title && <p className="mb-2 font-medium">{col.title}</p>}
              <ul className="space-y-3">
                {col.items.map((it, k) => (
                  <li key={k}>
                    <Link href={it.href} className="hover:opacity-80">
                      {it.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        {/* Brand / Avatar */}
        <div className="flex items-center justify-between md:justify-end gap-6">
          <p className="text-sm md:text-base text-white/90">{brandLine}</p>
          <div className="h-20 w-20 shrink-0 rounded-full bg-white/70 overflow-hidden">
            {avatarSrc ? (
              <Image
                src={avatarSrc}
                alt="Avatar"
                width={80}
                height={80}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="h-full w-full" />
            )}
          </div>
        </div>
      </div>

      {/* Divider + bottom line */}
      <div className="mt-8 border-t border-white/10 pt-4 text-center text-sm text-white/70">
        © {year} — همه حقوق محفوظ است.
      </div>
    </footer>
  );
}

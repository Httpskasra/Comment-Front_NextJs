"use client";

import Image from "next/image";
import React from "react";

type TopBarProps = {
  avatarSrc?: string;
  onLogin?: () => void;
  onCreateReview?: () => void;
  onSearch?: (q: string) => void;
  placeholder?: string;
  className?: string;
  searchIconSrc?: string; // پیش‌فرض /images/search.png
  plusIconSrc?: string; // پیش‌فرض /images/plus.png
};

export default function Header({
  avatarSrc,
  onLogin,
  onCreateReview,
  onSearch,
  placeholder = "جستجوی کالای مورد نظر...",
  className,
  searchIconSrc = "/images/searchIcon.png",
  plusIconSrc = "/images/plus.svg",
}: TopBarProps) {
  const [q, setQ] = React.useState("");

  function submit() {
    const val = q.trim();
    if (val) onSearch?.(val);
  }

  return (
    <div
      dir="rtl"
      className={[
        "mx-auto mt-6 max-w-6xl rounded-[36px] bg-[#0c4a4e] px-4 py-4 shadow-2xl",
        "md:px-6 md:py-5",
        className || "",
      ].join(" ")}
      role="search">
      <div className="flex items-center justify-around  md:flex-nowrap items-center gap-4 md:gap-6 w-full ">
        {/* Avatar */}
        <div className="h-16 w-16 shrink-0 rounded-full bg-white/70 overflow-hidden">
          {avatarSrc ? (
            <Image
              src={avatarSrc}
              alt="Avatar"
              width={64}
              height={64}
              className="h-full w-full object-cover"
            />
          ) : (
            <div className="h-full w-full" />
          )}
        </div>
        {/* Create Review */}
        <button
          onClick={onCreateReview}
          className="inline-flex items-center gap-2 whitespace-nowrap rounded-2xl border border-white/80 px-4 py-2 text-white hover:bg-white/10 transition">
          ثبت نظر
          <Image
            src={plusIconSrc}
            alt="افزودن"
            width={16}
            height={16}
            className="block"
          />
        </button>
        {/* Search */}
        <div className="flex-1 min-w-[260px] max-w-[50%]">
          <div className="relative flex items-center">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              aria-label="جستجو"
              placeholder={placeholder}
              className="w-full rounded-3xl bg-white py-3 pr-12 pl-12 text-right shadow-md outline-none placeholder:text-gray-500"
            />

            {/* search icon (right, داخل اینپوت) */}
            <span className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 inline-flex items-center justify-center">
              <Image
                src={searchIconSrc}
                alt="آیکن جستجو"
                width={22}
                height={22}
                className="block"
                priority
              />
            </span>
            {/* اگر دکمه جستجو می‌خواهی:
            <button
              onClick={submit}
              className="absolute left-2 top-1/2 -translate-y-1/2 rounded-xl bg-[#0c4a4e] px-3 py-1 text-white"
            >
              جستجو
            </button> */}
          </div>
        </div>

        {/* Login / Signup */}
        <button
          onClick={onLogin}
          className="inline-flex items-center justify-center whitespace-nowrap rounded-2xl border border-white/80 px-4 py-2 text-white hover:bg-white/10 transition min-w-[138px]">
          ورود / عضویت
        </button>
      </div>
    </div>
  );
}

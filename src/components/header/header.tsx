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
  avatarSrc = "/logo.jpg",
  onLogin,
  onCreateReview,
  onSearch,
  placeholder = "جستجو ...",
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
        "mx-auto mt-4 max-w-6xl rounded-[24px] bg-[#0c4a4e] px-3 py-3 shadow-xl",
        "sm:rounded-[28px] sm:px-4 sm:py-4 md:mt-6 md:px-6 md:py-5 md:rounded-[36px]",
        className || "",
      ].join(" ")}
      role="search">
      <div className="flex items-center justify-center mx-auto gap-2 sm:gap-4 md:gap-6 w-[90%] sm:w-[90%] md:w-[90%]">
        {/* Avatar */}
        <div className="h-10 w-10 sm:h-12 sm:w-12 md:h-16 md:w-16 shrink-0 rounded-full bg-white/70 overflow-hidden">
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
          className="
        inline-flex items-center gap-1 sm:gap-2 whitespace-nowrap rounded-2xl 
        border border-white/80 px-4 py-1.5 text-xs
        sm:px-4 sm:py-2 sm:text-sm 
        md:px-8 md:py-3 md:text-base
        text-white hover:bg-white hover:text-[#064D4F] cursor-pointer transition
      ">
          ثبت نظر
          <Image
            src={plusIconSrc}
            alt="افزودن"
            width={14}
            height={14}
            className="block"
          />
        </button>

        {/* Search */}
        <div className="flex w-full justify-center">
          <div className="relative w-full max-w-[200px] sm:max-w-sm md:max-w-md">
            <input
              value={q}
              onChange={(e) => setQ(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && submit()}
              aria-label="جستجو"
              placeholder={placeholder}
              className="
            w-full rounded-2xl sm:rounded-3xl 
            bg-white py-2 sm:py-2.5 md:py-3 
            pr-10 pl-10 sm:pr-12 sm:pl-12 
            text-center text-sm sm:text-base md:text-lg
            shadow-md outline-none placeholder:text-gray-500
          "
            />
            {/* آیکن جستجو */}
            <span className="pointer-events-none absolute right-3 sm:right-4 top-1/2 -translate-y-1/2">
              <Image
                src={searchIconSrc}
                alt="آیکن جستجو"
                width={18}
                height={18}
                className="sm:w-[20px] sm:h-[20px] md:w-[22px] md:h-[22px] block"
                priority
              />
            </span>
          </div>
        </div>

        {/* Login / Signup */}
        <button
          onClick={onLogin}
          className="
        inline-flex items-center justify-center whitespace-nowrap rounded-2xl 
        border border-white/80 min-w-[90px] sm:min-w-[110px] md:min-w-[138px]
        px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm md:px-6 md:py-3 md:text-base
        text-white hover:bg-white hover:text-[#064D4F] cursor-pointer transition
      ">
          ورود / عضویت
        </button>
      </div>
    </div>
  );
}

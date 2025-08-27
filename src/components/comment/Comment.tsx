"use client";

import Image from "next/image";
import React from "react";

type ProductCardProps = {
  title: string;
  score?: number; // 0..100
  images?: string[];
  pros?: string[];
  cons?: string[];
  description?: string;
  className?: string;
};

export default function CommentCard({
  title,
  score = 80,
  images = ["/product/Untitled.jpg", "/product/Untitled.jpg"],
  pros = ["بد", "بد", "بد", "بد"],
  cons = ["بد", "بد", "بد", "بد"],
  description = "لورم ایپسوم متن ساختگی ...",
  className,
}: ProductCardProps) {
  const targetScore = Math.max(0, Math.min(100, score));
  const [progress, setProgress] = React.useState(0);
  const ref = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            let current = 0;
            const step = () => {
              current += 1; // سرعت افزایش
              if (current <= targetScore) {
                setProgress(current);
                requestAnimationFrame(step);
              } else {
                setProgress(targetScore);
              }
            };
            requestAnimationFrame(step);
            observer.unobserve(entry.target); // فقط یک بار
          }
        });
      },
      { threshold: 0.4 }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [targetScore]);

  return (
    <article
      ref={ref}
      dir="rtl"
      className={[
        "w-[385px] h-[293px]",
        "bg-white rounded-[17px] shadow-[4px_4px_10.4px_rgba(0,0,0,0.25)]",
        "p-3 sm:p-4 max-w-full",
        className || "",
      ].join(" ")}>
      {/* بالا: تصاویر + عنوان + نوار پیشرفت */}
      <div className="grid grid-cols-[auto_1fr] gap-3">
        {/* تصاویر */}
        <div className="flex gap-2">
          {images.slice(0, 2).map((src, i) => (
            <div
              key={src + i}
              className="h-16 w-12 overflow-hidden rounded-md bg-gray-100">
              <Image
                src={src}
                alt=""
                width={90}
                height={120}
                className="h-full w-full object-cover"
              />
            </div>
          ))}
        </div>

        {/* عنوان + Progress */}
        <div className="flex flex-col gap-2">
          <h3 className="text-[22px] font-extrabold text-[#00A0E9] leading-6">
            {title}
          </h3>

          <div className="relative h-6 w-full overflow-hidden rounded-full bg-gray-200 shadow-inner">
            <div
              className={`h-full rounded-full transition-all duration-200 ${
                progress < 40
                  ? "bg-red-500"
                  : progress < 70
                  ? "bg-yellow-400"
                  : "bg-green-500"
              }`}
              style={{ width: `${progress}%` }}
            />
            <span className="absolute inset-0 flex items-center justify-center text-xs font-bold text-white drop-shadow">
              {progress}%
            </span>
          </div>
        </div>
      </div>

      {/* معایب + مزایا */}
      <div className="mt-2 grid grid-cols-2 gap-2">
        <ul className="space-y-1 pr-1">
          {cons.map((t, i) => (
            <li
              key={`cons-${i}`}
              className="flex items-center gap-2 text-red-600">
              <span>•</span>
              <span className="text-[15px]">{t}</span>
            </li>
          ))}
        </ul>
        <ul className="space-y-1 pr-1">
          {pros.map((t, i) => (
            <li
              key={`pros-${i}`}
              className="flex items-center gap-2 text-green-600">
              <span>•</span>
              <span className="text-[15px]">{t}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* توضیحات */}
      <p className="mt-2 line-clamp-3 text-[15px] leading-6 text-gray-700">
        {description}
      </p>
    </article>
  );
}

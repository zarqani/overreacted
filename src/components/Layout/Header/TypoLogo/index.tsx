"use client";

import { montserrat } from "@/config/fonts";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function TypoLogo() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";

  return (
    <Link
      href="/"
      className={[
        montserrat.className,
        "inline-block text-2xl font-black",
        isHomePage ? "" : "hover:scale-[1.02]",
      ].join(" ")}
    >
      <span
        className={`${
          isHomePage
            ? "text-inherit"
            : "from-primary to-secondary dark:from-primary-100 dark:to-secondary-100 text-transparent"
        } bg-gradient-to-r bg-clip-text transition-all`}
      >
        overreacted
      </span>
    </Link>
  );
}

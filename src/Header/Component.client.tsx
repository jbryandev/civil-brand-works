"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

import { DraftingCompass } from "lucide-react";

import type { Header } from "@/payload-types";
import { useHeaderTheme } from "@/providers/HeaderTheme";

import { HeaderNav } from "./Nav";

interface HeaderClientProps {
  data: Header;
}

export const HeaderClient: React.FC<HeaderClientProps> = ({ data }) => {
  /* Storing the value in a useState to avoid hydration errors */
  const [theme, setTheme] = useState<string | null>(null);
  const { headerTheme, setHeaderTheme } = useHeaderTheme();
  const pathname = usePathname();

  useEffect(() => {
    setHeaderTheme(null);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  useEffect(() => {
    if (headerTheme && headerTheme !== theme) setTheme(headerTheme);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headerTheme]);

  return (
    <header
      className="absolute z-20 w-full"
      {...(theme ? { "data-theme": theme } : {})}
    >
      <div className="container">
        <div className="flex justify-between py-8">
          <Link href="/" className="flex items-center space-x-2 text-slate-50">
            <DraftingCompass className="h-6 w-6" />
            <p className="font-medium uppercase">Civil Brand Works</p>
          </Link>
          <HeaderNav data={data} />
        </div>
      </div>
    </header>
  );
};

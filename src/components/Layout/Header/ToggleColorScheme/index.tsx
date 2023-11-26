"use client";

import IconSun from "@/components/Icons/IconSun";
import IconMoonStars from "@/components/Icons/IconMoonStars";
import { toggleColorScheme } from "@/lib/store/global/global.slice";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDarkClassName } from "@/utils/common";

export default function ToggleColorScheme() {
  const dispatch = useDispatch();
  const colorScheme =
    useSelector((state) => state?.global?.colorScheme) ||
    localStorage?.colorScheme;

  useEffect(() => {
    if (!colorScheme) dispatch(toggleColorScheme());
    else setDarkClassName();
  });

  return (
    <button
      className="w-8 h-8 bg-opacity-10 bg-primary rounded-full"
      onClick={() => dispatch(toggleColorScheme())}
    >
      {colorScheme === "dark" ? (
        <IconSun size={28} />
      ) : (
        <IconMoonStars size={28} />
      )}
    </button>
  );
}

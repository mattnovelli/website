"use client";
import { convertAniBinaryToCSS } from "ani-cursor";
import { useEffect } from "react";

interface CustomCursorProps {
  data: Uint8Array;
}

export default function CustomCursor({ data }: CustomCursorProps) {
  useEffect(() => {
    const style = document.createElement("style");
    style.innerText = convertAniBinaryToCSS("html", data);

    document.head.appendChild(style);
  }, [data]);
  return null;
}

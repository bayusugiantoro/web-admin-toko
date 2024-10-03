import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const formatter = new Intl.NumberFormat("id-ID", {
  maximumFractionDigits: 0,
  style: "currency",
  currency: "IDR",
});

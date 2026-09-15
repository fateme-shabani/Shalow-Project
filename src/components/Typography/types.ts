import type { ReactNode } from "react";

export type TypographySize = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

export type TypographyWeight = "regular" | "medium" | "semibold" | "bold";

export type TypographyColor =
  | "primary"
  | "secondary"
  | "muted"
  | "danger"
  | "success";

export interface TypographyProps {
  children: ReactNode;
  size?: TypographySize;
  weight?: TypographyWeight;
  color?: TypographyColor;
  align?: "left" | "center" | "right";
  className?: string;
}

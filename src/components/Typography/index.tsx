import type { TypographyProps } from "./types";

const sizeClasses = {
  xs: "text-xs",
  sm: "text-sm",
  md: "text-base",
  lg: "text-lg",
  xl: "text-xl",
  "2xl": "text-2xl",
};

const weightClasses = {
  regular: "font-normal",
  medium: "font-medium",
  semibold: "font-semibold",
  bold: "font-bold",
};

const colorClasses = {
  primary: "text-gray-900",
  secondary: "text-gray-700",
  muted: "text-gray-500",
  danger: "text-red-600",
  success: "text-green-600",
};

const alignClasses = {
  left: "text-left",
  center: "text-center",
  right: "text-right",
};

export function Typography({
  children,
  size = "lg",
  weight = "regular",
  color = "primary",
  align = "right",
  className = "",
}: TypographyProps) {
  return (
    <p
      className={`${sizeClasses[size]} ${colorClasses[color]} ${weightClasses[weight]} ${alignClasses[align]} ${className}`}
    >
      {children}
    </p>
  );
}

import { Icon } from "@iconify/react";

interface AppIconProps {
  icon: string;
  size: string | number;
  className: string;
}

export function AppIcons({ icon, size, className }:AppIconProps) {
  return <Icon icon={icon} width={size} height={size} className={className} />;
}

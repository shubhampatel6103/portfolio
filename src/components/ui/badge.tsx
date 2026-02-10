import React from "react";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-teal-900/40 text-teal-400 border border-teal-700/20",
  secondary: "bg-teal-900/40 text-teal-400 border border-teal-700/20",
  destructive: "bg-red-900/40 text-red-400 border border-red-800/20",
  outline: "bg-transparent text-teal-400 border border-teal-700/20",
};

function Badge({ className = "", variant = "default", ...props }: BadgeProps) {
  const baseStyles =
    "inline-flex items-center rounded-full px-3 py-1 text-xs font-medium transition-colors";
  const variantStyle = variantStyles[variant];

  return (
    <div className={`${baseStyles} ${variantStyle} ${className}`} {...props} />
  );
}

export { Badge };

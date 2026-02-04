import React from "react";

type BadgeVariant = "default" | "secondary" | "destructive" | "outline";

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-gray-700 text-gray-100 border border-gray-600",
  secondary: "bg-gray-800 text-gray-300 border border-gray-700",
  destructive: "bg-red-900 text-red-100 border border-red-800",
  outline: "bg-transparent text-gray-300 border border-gray-600",
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

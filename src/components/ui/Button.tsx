import { cn } from "../../lib/utils";
import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  href?: string;
  asChild?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", href, ...props }, ref) => {
    const baseStyles = "font-display px-8 py-4 uppercase tracking-tighter transition-colors rounded-none inline-flex items-center justify-center gap-2 border-2 text-xl font-bold";
    
    const variants = {
      primary: "bg-brand-primary text-black hover:bg-white hover:text-black border-transparent",
      secondary: "bg-transparent text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-black",
      outline: "border border-brand-surface-var text-brand-text hover:border-brand-text",
    };

    const Comp = href ? "a" : "button";

    return (
      <Comp
        ref={ref as any}
        className={cn(baseStyles, variants[variant], className)}
        {...(href ? { href } : {})}
        {...props as any}
      />
    );
  }
);
Button.displayName = "Button";

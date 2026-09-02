import { ReactNode } from "react";

type CardVariant = "surface" | "elevated" | "outline" | "ghost";

const variantClasses: Record<CardVariant, string> = {
  surface: "bg-slate-50 border border-slate-100",
  elevated: "bg-white border border-slate-100 shadow-sm",
  outline: "bg-white border border-slate-200",
  ghost: "bg-transparent",
}

interface CardProps {
    variant?: CardVariant; 
    className?: string;
    children: ReactNode;
}

export function Card({ variant = "surface", className = "", children}: CardProps) {
    return (
        <div className={`rounded-2xl p-6 md:p-8 ${variantClasses[variant]} ${className}`}>
            {children}
        </div>
    )
}

export function CardIcon({ children, className = "" }: { children: ReactNode; className?: string }) {
  return (
    <div
      className={`mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-600 text-white ${className}`}
    >
      {children}
    </div>
  );
}

export function CardTitle({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <h3 className={`text-xl font-bold text-slate-900 ${className}`}>{children}</h3>;
}

export function CardDescription({ children, className = "" }: { children: ReactNode; className?: string }) {
  return <p className={`mt-2 leading-relaxed text-slate-500 ${className}`}>{children}</p>;
}
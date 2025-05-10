"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { cva, type VariantProps } from "class-variance-authority";
import { LucideIcon } from "lucide-react";

const cardMetricVariants = cva("", {
  variants: {
    variant: {
      default: "bg-[#13133A] border border-[#1D1D4D]",
      success: "bg-[#13133A] border border-emerald-600/30",
      warning: "bg-[#13133A] border border-amber-600/30",
      danger: "bg-[#13133A] border border-red-600/30",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

const iconVariants = cva("p-2 rounded-lg", {
  variants: {
    variant: {
      default: "bg-blue-500/20 text-blue-400",
      success: "bg-emerald-500/20 text-emerald-400",
      warning: "bg-amber-500/20 text-amber-400",
      danger: "bg-red-500/20 text-red-400",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

interface CardMetricProps extends VariantProps<typeof cardMetricVariants> {
  title: string;
  value: string | number;
  description?: string;
  icon?: LucideIcon;
  trend?: {
    value: number;
    isPositive: boolean;
  };
  className?: string;
}

export function CardMetric({
  title,
  value,
  description,
  icon: Icon,
  trend,
  variant,
  className,
}: CardMetricProps) {
  return (
    <Card className={cn(cardMetricVariants({ variant }), className)}>
      <CardHeader className="flex flex-row items-center justify-between pb-2">
        <CardTitle className="text-sm font-medium text-[#B4B4CF]">{title}</CardTitle>
        {Icon && (
          <div className={cn(iconVariants({ variant }))}>
            <Icon className="h-4 w-4" />
          </div>
        )}
      </CardHeader>
      <CardContent>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-2xl font-bold text-white"
        >
          {value}
        </motion.div>
        {description && <p className="mt-1 text-xs text-[#B4B4CF]">{description}</p>}
        {trend && (
          <div className="mt-2 flex items-center">
            <span
              className={cn(
                "text-xs font-medium",
                trend.isPositive ? "text-emerald-400" : "text-red-400"
              )}
            >
              {trend.isPositive ? "+" : "-"}
              {Math.abs(trend.value)}%
            </span>
            <span className="ml-1 text-xs text-[#B4B4CF]">vs last month</span>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
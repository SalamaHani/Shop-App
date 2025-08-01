"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  TrendingUp,
  TrendingDown,
  DollarSign,
  Users,
  ShoppingCart,
  Star,
  Package,
  Eye,
} from "lucide-react";
import { useEffect, useState } from "react";

interface AnimatedNumberProps {
  value: string;
  duration?: number;
  delay?: number;
}

function AnimatedNumber({
  value,
  duration = 2000,
  delay = 0,
}: AnimatedNumberProps) {
  const [displayValue, setDisplayValue] = useState("0");

  useEffect(() => {
    const timer = setTimeout(() => {
      // Extract numeric part and suffix
      const numericMatch = value.match(/[\d,]+\.?\d*/);
      const numericPart = numericMatch
        ? numericMatch[0].replace(/,/g, "")
        : "0";
      const suffix = value.replace(numericMatch?.[0] || "", "");

      const targetValue = Number.parseFloat(numericPart);
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        // Easing function for smooth animation
        const easeOutQuart = 1 - Math.pow(1 - progress, 4);
        const currentValue = targetValue * easeOutQuart;

        // Format the number with commas if needed
        let formattedValue = currentValue.toFixed(targetValue < 10 ? 1 : 0);
        if (targetValue >= 1000) {
          formattedValue = Math.floor(currentValue).toLocaleString();
        }

        setDisplayValue(formattedValue + suffix);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [value, duration, delay]);

  return <span>{displayValue}</span>;
}

interface AnimatedPercentageProps {
  value: string;
  duration?: number;
  delay?: number;
}

function AnimatedPercentage({
  value,
  duration = 1500,
  delay = 0,
}: AnimatedPercentageProps) {
  const [displayValue, setDisplayValue] = useState("0%");

  useEffect(() => {
    const timer = setTimeout(() => {
      const numericPart = Number.parseFloat(value.replace(/[+\-%]/g, ""));
      const prefix = value.includes("+") ? "+" : value.includes("-") ? "-" : "";
      const startTime = Date.now();

      const animate = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);

        const easeOutCubic = 1 - Math.pow(1 - progress, 3);
        const currentValue = numericPart * easeOutCubic;

        setDisplayValue(`${prefix}${currentValue.toFixed(1)}%`);

        if (progress < 1) {
          requestAnimationFrame(animate);
        }
      };

      animate();
    }, delay);

    return () => clearTimeout(timer);
  }, [value, duration, delay]);

  return <span>{displayValue}</span>;
}

export function DashboardStats() {
  const stats = [
    {
      title: "Total Revenue",
      value: "$45,231.89",
      change: "+20.1%",
      changeType: "increase" as const,
      icon: DollarSign,
      description: "from last month",
    },
    {
      title: "Active Users",
      value: "2,350",
      change: "+180.1%",
      changeType: "increase" as const,
      icon: Users,
      description: "from last month",
    },
    {
      title: "Total Orders",
      value: "12,234",
      change: "+19%",
      changeType: "increase" as const,
      icon: ShoppingCart,
      description: "from last month",
    },
    {
      title: "Average Rating",
      value: "4.8",
      change: "+0.2",
      changeType: "increase" as const,
      icon: Star,
      description: "from last month",
    },
    {
      title: "Products Sold",
      value: "573",
      change: "-2%",
      changeType: "decrease" as const,
      icon: Package,
      description: "from last month",
    },
    {
      title: "Page Views",
      value: "89,432",
      change: "+12.5%",
      changeType: "increase" as const,
      icon: Eye,
      description: "from last month",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <Card
            key={stat.title}
            className="hover:shadow-lg transition-all  hover:scale-105 animate-in fade-in duration-500 group"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600 dark:text-gray-400">
                {stat.title}
              </CardTitle>
              <div className="p-2 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-white rounded-lg group-hover:scale-110 transition-transform duration-300">
                <Icon className="h-4 w-4 text-black dark:text-black" />
              </div>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-1 tabular-nums">
                <AnimatedNumber value={stat.value} delay={index * 200} />
              </div>
              <div className="flex items-center gap-2">
                <Badge
                  variant={
                    stat.changeType === "increase" ? "default" : "destructive"
                  }
                  className="flex items-center gap-1 text-xs animate-in slide-in-from-left duration-500"
                  style={{ animationDelay: `${index * 200 + 1000}ms` }}
                >
                  {stat.changeType === "increase" ? (
                    <TrendingUp
                      className="h-3 w-3 animate-bounce"
                      style={{ animationDelay: `${index * 100 + 1500}ms` }}
                    />
                  ) : (
                    <TrendingDown
                      className="h-3 w-3 animate-bounce"
                      style={{ animationDelay: `${index * 100 + 1500}ms` }}
                    />
                  )}
                  <AnimatedPercentage
                    value={stat.change}
                    delay={index * 200 + 1200}
                  />
                </Badge>
                <span
                  className="text-xs text-gray-500 dark:text-gray-400 animate-in fade-in duration-500"
                  style={{ animationDelay: `${index * 200 + 1400}ms` }}
                >
                  {stat.description}
                </span>
              </div>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}

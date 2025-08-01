"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { TrendingUp, BarChart3 } from "lucide-react";

export function DashboardCharts() {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
      {/* Revenue Chart */}
      <Card className="lg:col-span-2">
        <CardHeader>
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="flex items-center gap-2">
                <BarChart3 className="h-5 w-5 text-black dark:text-white" />
                Revenue Overview
              </CardTitle>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Monthly revenue and order trends
              </p>
            </div>
            <Badge className="bg-green-100 dark:bg-green-900 text-green-600 dark:text-green-400">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12.5%
            </Badge>
          </div>
        </CardHeader>
        <CardContent>
          <div className="h-64 bg-gradient-to-r from-gray-100 to-gray-100 dark:from-black dark:to-gray-950 rounded-lg flex items-center justify-center">
            <div className="text-center">
              <BarChart3 className="h-12 w-12 mx-auto mb-4 text-black-600 dark:text-gray-400 opacity-50" />
              <p className="text-gray-600 dark:text-gray-400">
                Chart visualization would go here
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-500">
                Integration with Chart.js or Recharts recommended
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}

"use client";

import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";

const data = [
  { name: "Jan", revenue: 4000, profit: 2400 },
  { name: "Feb", revenue: 5000, profit: 2800 },
  { name: "Mar", revenue: 3000, profit: 1500 },
  { name: "Apr", revenue: 7000, profit: 3500 },
  { name: "May", revenue: 4500, profit: 2300 },
  { name: "Jun", revenue: 6000, profit: 3100 },
  { name: "Jul", revenue: 8000, profit: 4200 },
  { name: "Aug", revenue: 7000, profit: 3800 },
  { name: "Sep", revenue: 9000, profit: 4800 },
  { name: "Oct", revenue: 8500, profit: 4400 },
  { name: "Nov", revenue: 11000, profit: 5800 },
  { name: "Dec", revenue: 15000, profit: 8000 },
];

type TimeRange = "1W" | "1M" | "3M" | "6M" | "1Y" | "ALL";

export function SalesChart() {
  const [timeRange, setTimeRange] = useState<TimeRange>("1Y");
  
  const ranges = [
    { label: "1W", value: "1W" },
    { label: "1M", value: "1M" },
    { label: "3M", value: "3M" },
    { label: "6M", value: "6M" },
    { label: "1Y", value: "1Y" },
    { label: "ALL", value: "ALL" },
  ];

  const filteredData = (() => {
    const currentData = [...data];
    switch (timeRange) {
      case "1W":
        return currentData.slice(-1);
      case "1M":
        return currentData.slice(-1);
      case "3M":
        return currentData.slice(-3);
      case "6M":
        return currentData.slice(-6);
      case "1Y":
        return currentData;
      case "ALL":
        return currentData;
      default:
        return currentData;
    }
  })();

  return (
    <Card className="bg-[#13133A] border-[#1D1D4D]">
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle className="text-white">Revenue & Profit</CardTitle>
          <CardDescription className="text-[#B4B4CF]">
            Sales performance over time
          </CardDescription>
        </div>
        <div className="flex space-x-1">
          {ranges.map((range) => (
            <Button
              key={range.value}
              variant="ghost"
              size="sm"
              onClick={() => setTimeRange(range.value as TimeRange)}
              className={cn(
                "text-xs h-7 px-2",
                timeRange === range.value
                  ? "bg-[#1D1D4D] text-white"
                  : "text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]"
              )}
            >
              {range.label}
            </Button>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={filteredData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#4169E1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#4169E1" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorProfit" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#00CED1" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#00CED1" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#1D1D4D" />
              <XAxis 
                dataKey="name" 
                stroke="#B4B4CF" 
                tick={{ fill: "#B4B4CF" }} 
                axisLine={{ stroke: "#1D1D4D" }} 
              />
              <YAxis 
                stroke="#B4B4CF" 
                tick={{ fill: "#B4B4CF" }} 
                axisLine={{ stroke: "#1D1D4D" }}
                tickFormatter={(value) => `$${value}`}
              />
              <Tooltip 
                contentStyle={{ 
                  backgroundColor: "#13133A", 
                  borderColor: "#1D1D4D", 
                  color: "white" 
                }}
                itemStyle={{ color: "white" }}
                labelStyle={{ color: "white" }}
                formatter={(value) => [`$${value}`, ""]}
              />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#4169E1"
                fillOpacity={1}
                fill="url(#colorRevenue)"
                name="Revenue"
              />
              <Area
                type="monotone"
                dataKey="profit"
                stroke="#00CED1"
                fillOpacity={1}
                fill="url(#colorProfit)"
                name="Profit"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
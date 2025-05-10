"use client";

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const currentYearData = [
  { name: "Jan", revenue: 14000, expenses: 8000, profit: 6000 },
  { name: "Feb", revenue: 16000, expenses: 10000, profit: 6000 },
  { name: "Mar", revenue: 19000, expenses: 12000, profit: 7000 },
  { name: "Apr", revenue: 23000, expenses: 13000, profit: 10000 },
  { name: "May", revenue: 25000, expenses: 14000, profit: 11000 },
  { name: "Jun", revenue: 27000, expenses: 15000, profit: 12000 },
  { name: "Jul", revenue: 28000, expenses: 16000, profit: 12000 },
  { name: "Aug", revenue: 29000, expenses: 16000, profit: 13000 },
  { name: "Sep", revenue: 31000, expenses: 17000, profit: 14000 },
  { name: "Oct", revenue: 33000, expenses: 18000, profit: 15000 },
  { name: "Nov", revenue: 35000, expenses: 19000, profit: 16000 },
  { name: "Dec", revenue: 37000, expenses: 20000, profit: 17000 },
];

const previousYearData = [
  { name: "Jan", revenue: 12000, expenses: 7000, profit: 5000 },
  { name: "Feb", revenue: 14000, expenses: 8000, profit: 6000 },
  { name: "Mar", revenue: 16000, expenses: 9000, profit: 7000 },
  { name: "Apr", revenue: 18000, expenses: 10000, profit: 8000 },
  { name: "May", revenue: 20000, expenses: 11000, profit: 9000 },
  { name: "Jun", revenue: 22000, expenses: 12000, profit: 10000 },
  { name: "Jul", revenue: 24000, expenses: 13000, profit: 11000 },
  { name: "Aug", revenue: 26000, expenses: 14000, profit: 12000 },
  { name: "Sep", revenue: 28000, expenses: 15000, profit: 13000 },
  { name: "Oct", revenue: 30000, expenses: 16000, profit: 14000 },
  { name: "Nov", revenue: 32000, expenses: 17000, profit: 15000 },
  { name: "Dec", revenue: 34000, expenses: 18000, profit: 16000 },
];

type ChartMode = "revenue" | "profit" | "expenses";

export function RevenueChart() {
  const [mode, setMode] = useState<ChartMode>("revenue");
  const [year, setYear] = useState<"current" | "previous">("current");
  
  const chartData = year === "current" ? currentYearData : previousYearData;

  return (
    <Card className="bg-[#13133A] border-[#1D1D4D]">
      <CardHeader className="flex flex-row items-center justify-between flex-wrap gap-4">
        <div>
          <CardTitle className="text-white capitalize">{mode} Analysis</CardTitle>
          <CardDescription className="text-[#B4B4CF]">
            {year === "current" ? "2025" : "2024"} financial performance
          </CardDescription>
        </div>
        <div className="flex flex-col space-y-2 sm:flex-row sm:space-y-0 sm:space-x-2">
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMode("revenue")}
              className={cn(
                "text-xs h-7 px-2",
                mode === "revenue"
                  ? "bg-[#1D1D4D] text-white"
                  : "text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]"
              )}
            >
              Revenue
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMode("profit")}
              className={cn(
                "text-xs h-7 px-2",
                mode === "profit"
                  ? "bg-[#1D1D4D] text-white"
                  : "text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]"
              )}
            >
              Profit
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setMode("expenses")}
              className={cn(
                "text-xs h-7 px-2",
                mode === "expenses"
                  ? "bg-[#1D1D4D] text-white"
                  : "text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]"
              )}
            >
              Expenses
            </Button>
          </div>
          <div className="flex space-x-1">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setYear("current")}
              className={cn(
                "text-xs h-7 px-2",
                year === "current"
                  ? "bg-[#1D1D4D] text-white"
                  : "text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]"
              )}
            >
              2025
            </Button>
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setYear("previous")}
              className={cn(
                "text-xs h-7 px-2",
                year === "previous"
                  ? "bg-[#1D1D4D] text-white"
                  : "text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]"
              )}
            >
              2024
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart
              data={chartData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0,
              }}
            >
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
                tickFormatter={(value) => `$${value / 1000}k`}
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
              <Legend 
                wrapperStyle={{ color: "#B4B4CF" }} 
                formatter={(value) => <span style={{ color: "#B4B4CF" }}>{value}</span>}
              />
              {mode === "revenue" && (
                <Bar dataKey="revenue" name="Revenue" fill="#4169E1" radius={[4, 4, 0, 0]} />
              )}
              {mode === "expenses" && (
                <Bar dataKey="expenses" name="Expenses" fill="#FF6347" radius={[4, 4, 0, 0]} />
              )}
              {mode === "profit" && (
                <Bar dataKey="profit" name="Profit" fill="#2ECC71" radius={[4, 4, 0, 0]} />
              )}
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}
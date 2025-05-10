"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CardMetric } from "@/components/ui/card-metric";
import { RevenueChart } from "@/components/dashboard/erp/RevenueChart";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Briefcase,
  TrendingUp,
  CreditCard,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

export default function ERP() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white mb-2">ERP Dashboard</h1>
          <p className="text-[#B4B4CF] mb-6">
            Financial performance and business metrics
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <CardMetric
            title="Total Revenue"
            value="$1,358,750"
            description="YTD 2025"
            trend={{ value: 15, isPositive: true }}
            icon={TrendingUp}
            variant="success"
          />
          <CardMetric
            title="Operating Expenses"
            value="$782,500"
            description="YTD 2025"
            trend={{ value: 8, isPositive: false }}
            icon={CreditCard}
            variant="default"
          />
          <CardMetric
            title="Net Profit"
            value="$576,250"
            description="42.4% margin"
            trend={{ value: 9, isPositive: true }}
            icon={Briefcase}
            variant="default"
          />
          <CardMetric
            title="Budget Utilization"
            value="73%"
            description="$850K / $1.16M"
            trend={{ value: 5, isPositive: true }}
            icon={CreditCard}
            variant="warning"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <RevenueChart />
          </div>
          <div className="lg:col-span-1">
            <Card className="bg-[#13133A] border-[#1D1D4D] h-full">
              <CardHeader>
                <CardTitle className="text-white">Budget Overview</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Marketing</span>
                      <span className="text-xs text-[#B4B4CF]">$125K / $150K</span>
                    </div>
                    <span className="text-sm font-medium text-white">83%</span>
                  </div>
                  <Progress value={83} className="h-2 bg-[#29293A]" indicatorClassName="bg-blue-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Operations</span>
                      <span className="text-xs text-[#B4B4CF]">$320K / $400K</span>
                    </div>
                    <span className="text-sm font-medium text-white">80%</span>
                  </div>
                  <Progress value={80} className="h-2 bg-[#29293A]" indicatorClassName="bg-emerald-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">R&D</span>
                      <span className="text-xs text-[#B4B4CF]">$240K / $250K</span>
                    </div>
                    <span className="text-sm font-medium text-white">96%</span>
                  </div>
                  <Progress value={96} className="h-2 bg-[#29293A]" indicatorClassName="bg-amber-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Sales</span>
                      <span className="text-xs text-[#B4B4CF]">$165K / $250K</span>
                    </div>
                    <span className="text-sm font-medium text-white">66%</span>
                  </div>
                  <Progress value={66} className="h-2 bg-[#29293A]" indicatorClassName="bg-purple-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Administration</span>
                      <span className="text-xs text-[#B4B4CF]">$95K / $110K</span>
                    </div>
                    <span className="text-sm font-medium text-white">86%</span>
                  </div>
                  <Progress value={86} className="h-2 bg-[#29293A]" indicatorClassName="bg-cyan-500" />
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#13133A] border-[#1D1D4D]">
            <CardHeader>
              <CardTitle className="text-white">Cash Flow</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-emerald-500/20 p-2 rounded-full mr-4">
                      <ArrowUpRight className="h-5 w-5 text-emerald-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Accounts Receivable</p>
                      <p className="text-sm text-[#B4B4CF]">Outstanding customer payments</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white">$187,500</p>
                    <p className="text-sm text-emerald-400">+12.4% vs last month</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-red-500/20 p-2 rounded-full mr-4">
                      <ArrowDownRight className="h-5 w-5 text-red-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Accounts Payable</p>
                      <p className="text-sm text-[#B4B4CF]">Pending vendor payments</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white">$93,750</p>
                    <p className="text-sm text-red-400">-5.2% vs last month</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div className="flex items-center">
                    <div className="bg-blue-500/20 p-2 rounded-full mr-4">
                      <TrendingUp className="h-5 w-5 text-blue-400" />
                    </div>
                    <div>
                      <p className="font-medium text-white">Net Cash Position</p>
                      <p className="text-sm text-[#B4B4CF]">Available operating funds</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="text-xl font-bold text-white">$423,500</p>
                    <p className="text-sm text-blue-400">+8.7% vs last month</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#13133A] border-[#1D1D4D]">
            <CardHeader>
              <CardTitle className="text-white">Upcoming Payments</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Equipment Lease</p>
                    <p className="text-sm text-[#B4B4CF]">Due in 3 days</p>
                  </div>
                  <p className="text-lg font-semibold text-white">$18,500</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Software Subscription</p>
                    <p className="text-sm text-[#B4B4CF]">Due in 5 days</p>
                  </div>
                  <p className="text-lg font-semibold text-white">$4,299</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Vendor Payment - TechCorp</p>
                    <p className="text-sm text-[#B4B4CF]">Due in 7 days</p>
                  </div>
                  <p className="text-lg font-semibold text-white">$42,750</p>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Quarterly Taxes</p>
                    <p className="text-sm text-[#B4B4CF]">Due in 14 days</p>
                  </div>
                  <p className="text-lg font-semibold text-white">$68,250</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
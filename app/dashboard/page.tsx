"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CardMetric } from "@/components/ui/card-metric";
import { SalesChart } from "@/components/dashboard/pos/SalesChart";
import { TransactionTable } from "@/components/dashboard/pos/TransactionTable";
import { 
  BarChart3, 
  CreditCard, 
  DollarSign, 
  ShoppingCart, 
  Users 
} from "lucide-react";

export default function Dashboard() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white mb-2">POS Dashboard</h1>
          <p className="text-[#B4B4CF] mb-6">
            Overview of your point of sale performance and recent transactions
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <CardMetric
            title="Today's Sales"
            value="$4,329.75"
            description="58 transactions today"
            trend={{ value: 12, isPositive: true }}
            icon={DollarSign}
            variant="default"
          />
          <CardMetric
            title="Active Customers"
            value="387"
            description="12 new today"
            trend={{ value: 8, isPositive: true }}
            icon={Users}
            variant="success"
          />
          <CardMetric
            title="Average Order"
            value="$74.65"
            description="Per transaction"
            trend={{ value: 2, isPositive: true }}
            icon={ShoppingCart}
            variant="default"
          />
          <CardMetric
            title="Refund Rate"
            value="2.1%"
            description="3 refunds today"
            trend={{ value: 0.5, isPositive: false }}
            icon={CreditCard}
            variant="warning"
          />
        </div>

        <div className="grid grid-cols-1 gap-6 mb-6">
          <SalesChart />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <TransactionTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
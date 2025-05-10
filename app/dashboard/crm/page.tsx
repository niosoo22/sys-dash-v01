"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CardMetric } from "@/components/ui/card-metric";
import { CustomerTable } from "@/components/dashboard/crm/CustomerTable";
import { 
  Users,
  UserPlus,
  CircleDollarSign,
  BadgePercent
} from "lucide-react";

export default function CRM() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white mb-2">CRM Dashboard</h1>
          <p className="text-[#B4B4CF] mb-6">
            Manage customer relationships and track engagement
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <CardMetric
            title="Total Customers"
            value="1,247"
            description="Active customer base"
            trend={{ value: 4, isPositive: true }}
            icon={Users}
            variant="default"
          />
          <CardMetric
            title="New Customers"
            value="38"
            description="Last 30 days"
            trend={{ value: 12, isPositive: true }}
            icon={UserPlus}
            variant="success"
          />
          <CardMetric
            title="Customer Lifetime Value"
            value="$1,893"
            description="Average per customer"
            trend={{ value: 3, isPositive: true }}
            icon={CircleDollarSign}
            variant="default"
          />
          <CardMetric
            title="Retention Rate"
            value="86%"
            description="Last 12 months"
            trend={{ value: 2, isPositive: false }}
            icon={BadgePercent}
            variant="warning"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <CustomerTable />
        </div>
      </div>
    </DashboardLayout>
  );
}
"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CardMetric } from "@/components/ui/card-metric";
import { MapView } from "@/components/dashboard/fleet/MapView";
import { 
  Truck,
  Route,
  Fuel,
  Activity,
  AlertTriangle
} from "lucide-react";

export default function Fleet() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white mb-2">Fleet Management</h1>
          <p className="text-[#B4B4CF] mb-6">
            Track and manage your vehicle fleet in real-time
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <CardMetric
            title="Active Vehicles"
            value="12"
            description="4 in transit, 8 idle"
            icon={Truck}
            variant="success"
          />
          <CardMetric
            title="Total Distance"
            value="1,487 mi"
            description="This month"
            trend={{ value: 12, isPositive: true }}
            icon={Route}
            variant="default"
          />
          <CardMetric
            title="Fuel Consumption"
            value="485 gal"
            description="$1,842 spent"
            trend={{ value: 3, isPositive: false }}
            icon={Fuel}
            variant="default"
          />
          <CardMetric
            title="Maintenance Alerts"
            value="3"
            description="Requiring attention"
            icon={AlertTriangle}
            variant="danger"
          />
        </div>

        <div className="grid grid-cols-1 gap-6">
          <MapView />
        </div>
      </div>
    </DashboardLayout>
  );
}
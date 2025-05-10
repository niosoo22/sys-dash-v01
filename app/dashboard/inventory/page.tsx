"use client";

import { DashboardLayout } from "@/components/layout/DashboardLayout";
import { CardMetric } from "@/components/ui/card-metric";
import { StockLevels } from "@/components/dashboard/inventory/StockLevels";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { 
  Package,
  PackageOpen,
  TruckIcon,
  AlertTriangle,
  BarChart4
} from "lucide-react";

export default function Inventory() {
  return (
    <DashboardLayout>
      <div className="p-6">
        <div className="flex flex-col">
          <h1 className="text-2xl font-bold text-white mb-2">Inventory Management</h1>
          <p className="text-[#B4B4CF] mb-6">
            Track and manage your product inventory across all locations
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
          <CardMetric
            title="Total Products"
            value="1,874"
            description="Across all warehouses"
            icon={Package}
            variant="default"
          />
          <CardMetric
            title="Stock Value"
            value="$2.4M"
            description="Inventory assets"
            trend={{ value: 4, isPositive: true }}
            icon={BarChart4}
            variant="default"
          />
          <CardMetric
            title="Low Stock Items"
            value="24"
            description="Below 20% threshold"
            trend={{ value: 2, isPositive: false }}
            icon={AlertTriangle}
            variant="danger"
          />
          <CardMetric
            title="Pending Orders"
            value="18"
            description="Arriving soon"
            trend={{ value: 5, isPositive: true }}
            icon={TruckIcon}
            variant="success"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
          <div className="lg:col-span-2">
            <StockLevels />
          </div>
          <div className="lg:col-span-1">
            <Card className="bg-[#13133A] border-[#1D1D4D] h-full">
              <CardHeader>
                <CardTitle className="text-white">Warehouse Capacity</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Warehouse A</span>
                      <span className="text-xs text-[#B4B4CF]">Electronics & Wearables</span>
                    </div>
                    <span className="text-sm font-medium text-white">78%</span>
                  </div>
                  <Progress value={78} className="h-2 bg-[#29293A]" indicatorClassName="bg-blue-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Warehouse B</span>
                      <span className="text-xs text-[#B4B4CF]">Furniture & Decor</span>
                    </div>
                    <span className="text-sm font-medium text-white">45%</span>
                  </div>
                  <Progress value={45} className="h-2 bg-[#29293A]" indicatorClassName="bg-emerald-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Warehouse C</span>
                      <span className="text-xs text-[#B4B4CF]">Kitchen & Appliances</span>
                    </div>
                    <span className="text-sm font-medium text-white">92%</span>
                  </div>
                  <Progress value={92} className="h-2 bg-[#29293A]" indicatorClassName="bg-amber-500" />
                </div>

                <div className="space-y-2">
                  <div className="flex justify-between items-center">
                    <div className="flex flex-col">
                      <span className="text-sm font-medium text-white">Warehouse D</span>
                      <span className="text-xs text-[#B4B4CF]">Seasonal Items</span>
                    </div>
                    <span className="text-sm font-medium text-white">12%</span>
                  </div>
                  <Progress value={12} className="h-2 bg-[#29293A]" indicatorClassName="bg-purple-500" />
                </div>

                <div className="px-4 py-3 bg-[#1D1D4D]/30 rounded-lg mt-4">
                  <h4 className="font-medium text-white mb-2">Warehouse Alerts</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center text-amber-400">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      Warehouse C nearing capacity
                    </li>
                    <li className="flex items-center text-[#B4B4CF]">
                      <PackageOpen className="h-4 w-4 mr-2" />
                      18 orders pending receipt at Warehouse B
                    </li>
                    <li className="flex items-center text-[#B4B4CF]">
                      <TruckIcon className="h-4 w-4 mr-2" />
                      Shipment arriving tomorrow at Warehouse A
                    </li>
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-[#13133A] border-[#1D1D4D]">
            <CardHeader>
              <CardTitle className="text-white">Recent Stock Movements</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Ultra HD Smart TV</p>
                    <p className="text-sm text-[#B4B4CF]">10 units received</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-emerald-400">+ Inbound</p>
                    <p className="text-xs text-[#B4B4CF]">Today, 10:24 AM</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Wireless Headphones</p>
                    <p className="text-sm text-[#B4B4CF]">15 units sold</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-blue-400">- Outbound</p>
                    <p className="text-xs text-[#B4B4CF]">Today, 9:15 AM</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Coffee Maker</p>
                    <p className="text-sm text-[#B4B4CF]">8 units returned</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-amber-400">↺ Return</p>
                    <p className="text-xs text-[#B4B4CF]">Yesterday, 3:42 PM</p>
                  </div>
                </div>

                <div className="flex items-center justify-between p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div>
                    <p className="font-medium text-white">Ergonomic Office Chair</p>
                    <p className="text-sm text-[#B4B4CF]">12 units received</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-medium text-emerald-400">+ Inbound</p>
                    <p className="text-xs text-[#B4B4CF]">Yesterday, 11:30 AM</p>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-[#13133A] border-[#1D1D4D]">
            <CardHeader>
              <CardTitle className="text-white">Inventory Categories</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-white">Electronics</h4>
                    <span className="text-sm text-white">458 products</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#B4B4CF]">
                    <span>Total Value: $845,750</span>
                    <span>38% of inventory</span>
                  </div>
                </div>

                <div className="p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-white">Furniture</h4>
                    <span className="text-sm text-white">324 products</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#B4B4CF]">
                    <span>Total Value: $624,500</span>
                    <span>27% of inventory</span>
                  </div>
                </div>

                <div className="p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-white">Kitchen</h4>
                    <span className="text-sm text-white">256 products</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#B4B4CF]">
                    <span>Total Value: $412,800</span>
                    <span>18% of inventory</span>
                  </div>
                </div>

                <div className="p-4 bg-[#1D1D4D]/30 rounded-lg">
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-white">Wearables</h4>
                    <span className="text-sm text-white">198 products</span>
                  </div>
                  <div className="flex justify-between items-center text-sm text-[#B4B4CF]">
                    <span>Total Value: $367,200</span>
                    <span>16% of inventory</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </DashboardLayout>
  );
}
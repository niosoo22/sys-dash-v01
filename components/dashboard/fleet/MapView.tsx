"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useEffect, useState } from 'react';
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { Icon } from 'leaflet';
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { 
  Activity, 
  AlertTriangle, 
  Calendar, 
  CheckCircle, 
  Clock, 
  Fuel, 
  MapPin, 
  RotateCcw, 
  Truck as TruckIcon
} from "lucide-react";

// Only import this component in client-side code after checking for window
const MapComponent = () => {
  const trucks = [
    { id: 'T001', name: 'Truck 101', lat: 37.7749, lng: -122.4194, status: 'active', driver: 'John Doe', destination: 'San Francisco' },
    { id: 'T002', name: 'Truck 102', lat: 37.3382, lng: -121.8863, status: 'active', driver: 'Jane Smith', destination: 'San Jose' },
    { id: 'T003', name: 'Truck 103', lat: 37.8044, lng: -122.2712, status: 'maintenance', driver: 'Mike Johnson', destination: 'Oakland' },
    { id: 'T004', name: 'Truck 104', lat: 36.7783, lng: -119.4179, status: 'inactive', driver: 'Sarah Williams', destination: 'Fresno' },
  ];

  const truckIcon = new Icon({
    iconUrl: 'https://cdn.jsdelivr.net/npm/leaflet@1.7.1/dist/images/marker-icon.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
  });

  return (
    <MapContainer 
      center={[37.7749, -122.4194]} 
      zoom={7} 
      style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {trucks.map(truck => (
        <Marker 
          key={truck.id} 
          position={[truck.lat, truck.lng]}
          icon={truckIcon}
        >
          <Popup>
            <div className="p-1">
              <h3 className="font-medium">{truck.name}</h3>
              <p className="text-sm">Driver: {truck.driver}</p>
              <p className="text-sm">Destination: {truck.destination}</p>
              <Badge 
                variant="outline" 
                className={
                  truck.status === 'active' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20' :
                  truck.status === 'maintenance' ? 'bg-amber-500/10 text-amber-400 border-amber-500/20' :
                  'bg-red-500/10 text-red-400 border-red-500/20'
                }
              >
                {truck.status}
              </Badge>
            </div>
          </Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export function MapView() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <Card className="bg-[#13133A] border-[#1D1D4D]">
      <CardHeader>
        <CardTitle className="text-white">Fleet Tracking</CardTitle>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="map" className="space-y-4">
          <TabsList className="bg-[#1D1D4D] grid grid-cols-2 h-10">
            <TabsTrigger 
              value="map" 
              className="data-[state=active]:bg-[#292968] data-[state=active]:text-white"
            >
              <MapPin className="h-4 w-4 mr-2" />
              Map View
            </TabsTrigger>
            <TabsTrigger 
              value="status" 
              className="data-[state=active]:bg-[#292968] data-[state=active]:text-white"
            >
              <Activity className="h-4 w-4 mr-2" />
              Status
            </TabsTrigger>
          </TabsList>
          <TabsContent value="map" className="m-0">
            <div className="h-[400px] relative rounded-md overflow-hidden border border-[#1D1D4D]">
              {isClient && <MapComponent />}
              <div className="absolute top-4 right-4 space-y-2">
                <Button size="sm" className="bg-[#13133A]/90 hover:bg-[#13133A] text-white">
                  <TruckIcon className="h-4 w-4 mr-2" />
                  All Vehicles
                </Button>
                <Button size="sm" variant="outline" className="bg-[#13133A]/90 border-[#1D1D4D] hover:bg-[#13133A] text-[#B4B4CF]">
                  <RotateCcw className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </TabsContent>
          <TabsContent value="status" className="m-0">
            <div className="border border-[#1D1D4D] rounded-md">
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4">
                <div className="bg-[#1D1D4D]/30 p-4 rounded-lg flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">Truck 101</h3>
                      <p className="text-[#B4B4CF] text-sm">John Doe</p>
                    </div>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      Active
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center text-[#B4B4CF]">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>San Francisco</span>
                    </div>
                    <div className="flex items-center text-[#B4B4CF]">
                      <Fuel className="h-4 w-4 mr-2" />
                      <span>85% Fuel</span>
                    </div>
                    <div className="flex items-center text-[#B4B4CF]">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>8 hrs in transit</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1D1D4D]/30 p-4 rounded-lg flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">Truck 102</h3>
                      <p className="text-[#B4B4CF] text-sm">Jane Smith</p>
                    </div>
                    <Badge variant="outline" className="bg-emerald-500/10 text-emerald-400 border-emerald-500/20">
                      Active
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center text-[#B4B4CF]">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>San Jose</span>
                    </div>
                    <div className="flex items-center text-[#B4B4CF]">
                      <Fuel className="h-4 w-4 mr-2" />
                      <span>62% Fuel</span>
                    </div>
                    <div className="flex items-center text-[#B4B4CF]">
                      <Clock className="h-4 w-4 mr-2" />
                      <span>4 hrs in transit</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1D1D4D]/30 p-4 rounded-lg flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">Truck 103</h3>
                      <p className="text-[#B4B4CF] text-sm">Mike Johnson</p>
                    </div>
                    <Badge variant="outline" className="bg-amber-500/10 text-amber-400 border-amber-500/20">
                      Maintenance
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center text-[#B4B4CF]">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Oakland</span>
                    </div>
                    <div className="flex items-center text-amber-400">
                      <AlertTriangle className="h-4 w-4 mr-2" />
                      <span>Engine check</span>
                    </div>
                    <div className="flex items-center text-[#B4B4CF]">
                      <Calendar className="h-4 w-4 mr-2" />
                      <span>Service: Tomorrow</span>
                    </div>
                  </div>
                </div>

                <div className="bg-[#1D1D4D]/30 p-4 rounded-lg flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-medium text-white">Truck 104</h3>
                      <p className="text-[#B4B4CF] text-sm">Sarah Williams</p>
                    </div>
                    <Badge variant="outline" className="bg-red-500/10 text-red-400 border-red-500/20">
                      Inactive
                    </Badge>
                  </div>
                  <div className="mt-4 space-y-2 text-sm">
                    <div className="flex items-center text-[#B4B4CF]">
                      <MapPin className="h-4 w-4 mr-2" />
                      <span>Fresno</span>
                    </div>
                    <div className="flex items-center text-[#B4B4CF]">
                      <Fuel className="h-4 w-4 mr-2" />
                      <span>100% Fuel</span>
                    </div>
                    <div className="flex items-center text-[#B4B4CF]">
                      <CheckCircle className="h-4 w-4 mr-2" />
                      <span>Maintenance completed</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
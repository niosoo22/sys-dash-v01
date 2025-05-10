"use client";

import { useState } from "react";
import { Search, Filter } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Progress } from "@/components/ui/progress";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { cn } from "@/lib/utils";

type Product = {
  id: string;
  name: string;
  category: string;
  stock: number;
  capacity: number;
  location: string;
};

const products: Product[] = [
  {
    id: "P001",
    name: "Ultra HD Smart TV",
    category: "Electronics",
    stock: 42,
    capacity: 100,
    location: "Warehouse A",
  },
  {
    id: "P002",
    name: "Wireless Headphones",
    category: "Electronics",
    stock: 85,
    capacity: 200,
    location: "Warehouse A",
  },
  {
    id: "P003",
    name: "Ergonomic Office Chair",
    category: "Furniture",
    stock: 18,
    capacity: 50,
    location: "Warehouse B",
  },
  {
    id: "P004",
    name: "Coffee Maker",
    category: "Kitchen",
    stock: 12,
    capacity: 60,
    location: "Warehouse C",
  },
  {
    id: "P005",
    name: "Laptop Pro",
    category: "Electronics",
    stock: 7,
    capacity: 50,
    location: "Warehouse A",
  },
  {
    id: "P006",
    name: "Fitness Tracker",
    category: "Wearables",
    stock: 34,
    capacity: 100,
    location: "Warehouse A",
  },
  {
    id: "P007",
    name: "Dining Table",
    category: "Furniture",
    stock: 5,
    capacity: 30,
    location: "Warehouse B",
  },
  {
    id: "P008",
    name: "Blender",
    category: "Kitchen",
    stock: 28,
    capacity: 80,
    location: "Warehouse C",
  },
];

const categories = ["All", "Electronics", "Furniture", "Kitchen", "Wearables"];
const locations = ["All", "Warehouse A", "Warehouse B", "Warehouse C"];

export function StockLevels() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedLocation, setSelectedLocation] = useState("All");

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(search.toLowerCase()) || 
                          product.id.toLowerCase().includes(search.toLowerCase());
    const matchesCategory = selectedCategory === "All" || product.category === selectedCategory;
    const matchesLocation = selectedLocation === "All" || product.location === selectedLocation;
    
    return matchesSearch && matchesCategory && matchesLocation;
  });

  return (
    <Card className="bg-[#13133A] border-[#1D1D4D]">
      <CardHeader className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <CardTitle className="text-white">Stock Levels</CardTitle>
        <div className="flex flex-col sm:flex-row gap-2">
          <div className="relative">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#B4B4CF]" />
            <Input
              type="search"
              placeholder="Search products..."
              className="pl-8 bg-[#1D1D4D] border-[#292968] text-white placeholder:text-[#B4B4CF] w-full sm:w-auto"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
          <div className="flex gap-2">
            <Select 
              value={selectedCategory} 
              onValueChange={setSelectedCategory}
            >
              <SelectTrigger 
                className="w-[130px] bg-[#1D1D4D] border-[#292968] text-white"
              >
                <SelectValue placeholder="Category" />
              </SelectTrigger>
              <SelectContent className="bg-[#13133A] border-[#1D1D4D] text-white">
                {categories.map((category) => (
                  <SelectItem key={category} value={category} className="hover:bg-[#1D1D4D]">
                    {category}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
            <Select 
              value={selectedLocation} 
              onValueChange={setSelectedLocation}
            >
              <SelectTrigger 
                className="w-[130px] bg-[#1D1D4D] border-[#292968] text-white"
              >
                <SelectValue placeholder="Location" />
              </SelectTrigger>
              <SelectContent className="bg-[#13133A] border-[#1D1D4D] text-white">
                {locations.map((location) => (
                  <SelectItem key={location} value={location} className="hover:bg-[#1D1D4D]">
                    {location}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => {
              const percentage = Math.round((product.stock / product.capacity) * 100);
              const isLowStock = percentage <= 20;
              
              return (
                <div key={product.id} className="bg-[#1D1D4D]/30 p-4 rounded-lg">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-medium text-white">{product.name}</h3>
                      <div className="flex items-center text-xs text-[#B4B4CF] space-x-2">
                        <span>{product.id}</span>
                        <span>•</span>
                        <span>{product.category}</span>
                        <span>•</span>
                        <span>{product.location}</span>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium text-white">
                        {product.stock} / {product.capacity}
                      </div>
                      <div className="text-xs text-[#B4B4CF]">
                        {percentage}% filled
                      </div>
                    </div>
                  </div>
                  <div className="relative">
                    <Progress 
                      value={percentage} 
                      className={cn(
                        "h-2", 
                        isLowStock ? "bg-[#29293A]" : "bg-[#29293A]",
                      )}
                      indicatorClassName={cn(
                        isLowStock ? "bg-red-500" : percentage < 50 ? "bg-amber-500" : "bg-emerald-500"
                      )}
                    />
                    {isLowStock && (
                      <span className="absolute top-2 left-0 text-xs font-medium text-red-400">
                        Low stock
                      </span>
                    )}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="text-center py-8 text-[#B4B4CF]">
              No products found matching your criteria.
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
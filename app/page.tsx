"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0A0A1F]">
      <div className="max-w-md mx-auto p-8 text-center">
        <h1 className="text-4xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white to-blue-400 mb-6">
          Silky Systems
        </h1>
        <p className="text-lg text-[#B4B4CF] mb-8">
          Comprehensive business management platform with integrated POS, CRM, ERP, Inventory, and Fleet Management solutions.
        </p>
        <Link href="/dashboard">
          <Button className="bg-blue-600 hover:bg-blue-700 text-white">
            Go to Dashboard
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
}
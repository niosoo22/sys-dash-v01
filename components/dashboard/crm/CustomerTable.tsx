"use client";

import { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { 
  ChevronLeft, 
  ChevronRight, 
  Search, 
  SlidersHorizontal,
  Download, 
  UserPlus,
  MoreVertical,
  Mail,
  Phone,
  Trash,
  Edit
} from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";

type Customer = {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: "active" | "inactive" | "pending";
  revenue: number;
  lastPurchase: string;
};

const customers: Customer[] = [
  {
    id: "CUST-001",
    name: "John Smith",
    email: "john.smith@example.com",
    phone: "+1 (555) 123-4567",
    status: "active",
    revenue: 2499.95,
    lastPurchase: "2025-01-15T14:30:00",
  },
  {
    id: "CUST-002",
    name: "Emma Wilson",
    email: "emma.wilson@example.com",
    phone: "+1 (555) 987-6543",
    status: "active",
    revenue: 1899.50,
    lastPurchase: "2025-01-28T10:15:00",
  },
  {
    id: "CUST-003",
    name: "Michael Brown",
    email: "michael.brown@example.com",
    phone: "+1 (555) 456-7890",
    status: "inactive",
    revenue: 750.25,
    lastPurchase: "2024-11-05T16:45:00",
  },
  {
    id: "CUST-004",
    name: "Sophia Garcia",
    email: "sophia.garcia@example.com",
    phone: "+1 (555) 789-0123",
    status: "active",
    revenue: 3250.75,
    lastPurchase: "2025-02-02T09:20:00",
  },
  {
    id: "CUST-005",
    name: "James Johnson",
    email: "james.johnson@example.com",
    phone: "+1 (555) 234-5678",
    status: "pending",
    revenue: 0,
    lastPurchase: "",
  },
  {
    id: "CUST-006",
    name: "Olivia Martinez",
    email: "olivia.martinez@example.com",
    phone: "+1 (555) 876-5432",
    status: "active",
    revenue: 1575.40,
    lastPurchase: "2025-01-20T13:10:00",
  },
  {
    id: "CUST-007",
    name: "William Davis",
    email: "william.davis@example.com",
    phone: "+1 (555) 345-6789",
    status: "inactive",
    revenue: 890.60,
    lastPurchase: "2024-10-12T11:30:00",
  },
];

const statusStyles = {
  active: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  inactive: "bg-red-500/10 text-red-400 border-red-500/20",
  pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
};

export function CustomerTable() {
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(1);
  const pageSize = 5;
  
  const filteredCustomers = customers.filter(
    (customer) => 
      customer.name.toLowerCase().includes(search.toLowerCase()) ||
      customer.email.toLowerCase().includes(search.toLowerCase()) ||
      customer.id.toLowerCase().includes(search.toLowerCase())
  );
  
  const totalPages = Math.ceil(filteredCustomers.length / pageSize);
  const paginatedCustomers = filteredCustomers.slice(
    (page - 1) * pageSize,
    page * pageSize
  );

  const formatDate = (dateString: string) => {
    if (!dateString) return "Never";
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      year: "numeric",
      month: "short",
      day: "numeric",
    }).format(date);
  };

  return (
    <Card className="bg-[#13133A] border-[#1D1D4D]">
      <CardHeader>
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <div>
            <CardTitle className="text-white">Customers</CardTitle>
            <CardDescription className="text-[#B4B4CF]">
              Manage your customer database
            </CardDescription>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Button variant="outline" size="sm" className="bg-[#1D1D4D] border-[#292968] text-white hover:bg-[#292968]">
              <Download className="h-4 w-4 mr-2" />
              Export
            </Button>
            <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
              <UserPlus className="h-4 w-4 mr-2" />
              Add Customer
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col sm:flex-row justify-between space-y-2 sm:space-y-0 pb-4">
          <div className="relative w-full sm:w-72">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-[#B4B4CF]" />
            <Input
              type="search"
              placeholder="Search customers..."
              className="pl-8 bg-[#1D1D4D] border-[#292968] text-white placeholder:text-[#B4B4CF] w-full"
              value={search}
              onChange={(e) => {
                setSearch(e.target.value);
                setPage(1); // Reset to first page on new search
              }}
            />
          </div>
          <Button variant="outline" size="icon" className="bg-[#1D1D4D] border-[#292968] text-white hover:bg-[#292968]">
            <SlidersHorizontal className="h-4 w-4" />
            <span className="sr-only">Filter</span>
          </Button>
        </div>

        <div className="rounded-md border border-[#1D1D4D] overflow-hidden">
          <Table>
            <TableHeader className="bg-[#1D1D4D]/30">
              <TableRow className="hover:bg-[#1D1D4D]/50 border-b border-[#1D1D4D]">
                <TableHead className="text-[#B4B4CF] font-medium">Customer</TableHead>
                <TableHead className="text-[#B4B4CF] font-medium">Contact</TableHead>
                <TableHead className="text-[#B4B4CF] font-medium text-center">Status</TableHead>
                <TableHead className="text-[#B4B4CF] font-medium text-right">Revenue</TableHead>
                <TableHead className="text-[#B4B4CF] font-medium">Last Purchase</TableHead>
                <TableHead className="text-[#B4B4CF] font-medium text-right">Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {paginatedCustomers.length > 0 ? (
                paginatedCustomers.map((customer) => (
                  <TableRow 
                    key={customer.id} 
                    className="hover:bg-[#1D1D4D]/30 border-b border-[#1D1D4D]"
                  >
                    <TableCell>
                      <div className="flex flex-col">
                        <span className="font-medium text-white">{customer.name}</span>
                        <span className="text-xs text-[#B4B4CF]">{customer.id}</span>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex flex-col text-[#B4B4CF]">
                        <span>{customer.email}</span>
                        <span>{customer.phone}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-center">
                      <Badge
                        variant="outline"
                        className={cn("capitalize", statusStyles[customer.status])}
                      >
                        {customer.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-right font-medium text-white">
                      ${customer.revenue.toFixed(2)}
                    </TableCell>
                    <TableCell className="text-[#B4B4CF]">
                      {formatDate(customer.lastPurchase)}
                    </TableCell>
                    <TableCell className="text-right">
                      <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                          <Button variant="ghost" size="icon" className="h-8 w-8 text-[#B4B4CF] hover:text-white hover:bg-[#1D1D4D]">
                            <MoreVertical className="h-4 w-4" />
                            <span className="sr-only">Actions</span>
                          </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent align="end" className="w-48 bg-[#13133A] border-[#1D1D4D] text-white">
                          <DropdownMenuItem className="hover:bg-[#1D1D4D] cursor-pointer">
                            <Edit className="h-4 w-4 mr-2" />
                            Edit
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-[#1D1D4D] cursor-pointer">
                            <Mail className="h-4 w-4 mr-2" />
                            Email
                          </DropdownMenuItem>
                          <DropdownMenuItem className="hover:bg-[#1D1D4D] cursor-pointer">
                            <Phone className="h-4 w-4 mr-2" />
                            Call
                          </DropdownMenuItem>
                          <DropdownMenuSeparator className="bg-[#1D1D4D]" />
                          <DropdownMenuItem className="text-red-400 hover:bg-[#1D1D4D] cursor-pointer">
                            <Trash className="h-4 w-4 mr-2" />
                            Delete
                          </DropdownMenuItem>
                        </DropdownMenuContent>
                      </DropdownMenu>
                    </TableCell>
                  </TableRow>
                ))
              ) : (
                <TableRow>
                  <TableCell colSpan={6} className="h-24 text-center text-[#B4B4CF]">
                    No results found.
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>

        <div className="flex items-center justify-between py-4">
          <div className="text-sm text-[#B4B4CF]">
            Showing <span className="font-medium text-white">{Math.min(filteredCustomers.length, page * pageSize)}</span> of <span className="font-medium text-white">{filteredCustomers.length}</span> customers
          </div>
          <div className="flex items-center space-x-2">
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page > 1 ? page - 1 : 1)}
              disabled={page === 1}
              className="h-8 w-8 p-0 bg-[#1D1D4D] border-[#292968] text-white hover:bg-[#292968]"
            >
              <ChevronLeft className="h-4 w-4" />
              <span className="sr-only">Previous page</span>
            </Button>
            <div className="text-sm text-[#B4B4CF]">
              Page {page} of {totalPages || 1}
            </div>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
              disabled={page === totalPages || totalPages === 0}
              className="h-8 w-8 p-0 bg-[#1D1D4D] border-[#292968] text-white hover:bg-[#292968]"
            >
              <ChevronRight className="h-4 w-4" />
              <span className="sr-only">Next page</span>
            </Button>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
"use client";

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
import { cn } from "@/lib/utils";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

type Transaction = {
  id: string;
  customer: string;
  amount: number;
  status: "completed" | "pending" | "failed";
  date: string;
  items: number;
};

const transactions: Transaction[] = [
  {
    id: "TX-123456",
    customer: "John Smith",
    amount: 129.99,
    status: "completed",
    date: "2025-02-10T14:30:00",
    items: 3,
  },
  {
    id: "TX-123457",
    customer: "Emma Wilson",
    amount: 79.95,
    status: "completed",
    date: "2025-02-10T12:15:00",
    items: 2,
  },
  {
    id: "TX-123458",
    customer: "Michael Brown",
    amount: 249.99,
    status: "pending",
    date: "2025-02-10T10:45:00",
    items: 1,
  },
  {
    id: "TX-123459",
    customer: "Sophia Garcia",
    amount: 45.50,
    status: "completed",
    date: "2025-02-09T16:20:00",
    items: 4,
  },
  {
    id: "TX-123460",
    customer: "James Johnson",
    amount: 199.99,
    status: "failed",
    date: "2025-02-09T09:10:00",
    items: 2,
  },
];

const statusStyles = {
  completed: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  pending: "bg-amber-500/10 text-amber-400 border-amber-500/20",
  failed: "bg-red-500/10 text-red-400 border-red-500/20",
};

export function TransactionTable() {
  const [page, setPage] = useState(1);
  const totalPages = Math.ceil(transactions.length / 5);

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return new Intl.DateTimeFormat("en-US", {
      month: "short",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      hour12: true,
    }).format(date);
  };

  return (
    <Card className="bg-[#13133A] border-[#1D1D4D]">
      <CardHeader>
        <CardTitle className="text-white">Recent Transactions</CardTitle>
        <CardDescription className="text-[#B4B4CF]">
          Latest customer purchases
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader className="bg-[#1D1D4D]/30">
            <TableRow className="hover:bg-[#1D1D4D]/50 border-b border-[#1D1D4D]">
              <TableHead className="text-[#B4B4CF] font-medium">Transaction</TableHead>
              <TableHead className="text-[#B4B4CF] font-medium">Customer</TableHead>
              <TableHead className="text-[#B4B4CF] font-medium text-right">Amount</TableHead>
              <TableHead className="text-[#B4B4CF] font-medium text-center">Status</TableHead>
              <TableHead className="text-[#B4B4CF] font-medium">Date</TableHead>
              <TableHead className="text-[#B4B4CF] font-medium text-right">Items</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {transactions.map((transaction) => (
              <TableRow 
                key={transaction.id} 
                className="hover:bg-[#1D1D4D]/30 border-b border-[#1D1D4D]"
              >
                <TableCell className="font-medium text-white">
                  {transaction.id}
                </TableCell>
                <TableCell className="text-[#B4B4CF]">{transaction.customer}</TableCell>
                <TableCell className="text-right text-white">
                  ${transaction.amount.toFixed(2)}
                </TableCell>
                <TableCell className="text-center">
                  <Badge
                    variant="outline"
                    className={cn("capitalize", statusStyles[transaction.status])}
                  >
                    {transaction.status}
                  </Badge>
                </TableCell>
                <TableCell className="text-[#B4B4CF]">
                  {formatDate(transaction.date)}
                </TableCell>
                <TableCell className="text-right text-[#B4B4CF]">
                  {transaction.items}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        <div className="flex items-center justify-end space-x-2 py-4">
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
            Page {page} of {totalPages}
          </div>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setPage(page < totalPages ? page + 1 : totalPages)}
            disabled={page === totalPages}
            className="h-8 w-8 p-0 bg-[#1D1D4D] border-[#292968] text-white hover:bg-[#292968]"
          >
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
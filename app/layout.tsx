"use client";

import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { ThemeProvider } from '@/contexts/ThemeProvider';
import { Toaster } from '@/components/ui/toaster';
import {DashboardProvider} from '@/contexts/DashboardContext';

const inter = Inter({ subsets: ['latin'] });

const metadata: Metadata = {
  title: 'Silky Systems - Dashboard',
  description: 'Modern SaaS dashboard for Silky Systems',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
          <DashboardProvider>
            {children}
          </DashboardProvider>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  );
}
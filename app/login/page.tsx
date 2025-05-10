"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useToast } from "@/components/ui/use-toast";
import { Eye, EyeOff, ArrowRight, LogIn } from "lucide-react";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    try {
      // Simulate login - replace with actual authentication
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push("/dashboard");
    } catch (error) {
      toast({
        title: "Error",
        description: "Invalid credentials. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#021DA5] to-[#134F88] dark:from-[#0A0A1F] dark:to-[#13133A] flex items-center justify-center p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="w-full max-w-md"
      >
        <div className="bg-white dark:bg-[#13133A] rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            <div className="text-center mb-8">
              <motion.h1 
                className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#021DA5] to-[#49B8BF] dark:from-white dark:to-[#49B8BF]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                Silky Systems
              </motion.h1>
              <motion.p 
                className="mt-2 text-gray-600 dark:text-[#B4B4CF]"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3 }}
              >
                Sign in to your account
              </motion.p>
            </div>

            <motion.form 
              onSubmit={handleSubmit}
              className="space-y-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <div className="space-y-2">
                <Label htmlFor="email" className="text-gray-700 dark:text-white">
                  Email
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full bg-gray-50 dark:bg-[#1D1D4D] border-gray-200 dark:border-[#292968] text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#B4B4CF] focus:border-[#021DA5] dark:focus:border-[#49B8BF]"
                  required
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-gray-700 dark:text-white">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full bg-gray-50 dark:bg-[#1D1D4D] border-gray-200 dark:border-[#292968] text-gray-900 dark:text-white placeholder:text-gray-500 dark:placeholder:text-[#B4B4CF] focus:border-[#021DA5] dark:focus:border-[#49B8BF] pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 dark:text-[#B4B4CF] hover:text-gray-700 dark:hover:text-white"
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <label className="flex items-center space-x-2">
                  <input
                    type="checkbox"
                    className="w-4 h-4 rounded border-gray-300 dark:border-[#292968] text-[#021DA5] dark:text-[#49B8BF] focus:ring-[#021DA5] dark:focus:ring-[#49B8BF]"
                  />
                  <span className="text-sm text-gray-600 dark:text-[#B4B4CF]">
                    Remember me
                  </span>
                </label>
                <Link
                  href="/forgot-password"
                  className="text-sm text-[#021DA5] dark:text-[#49B8BF] hover:text-[#134F88] dark:hover:text-[#11ЕЗАВ]"
                >
                  Forgot password?
                </Link>
              </div>

              <Button
                type="submit"
                className="w-full bg-[#021DA5] hover:bg-[#134F88] dark:bg-[#49B8BF] dark:hover:bg-[#11ЕЗАВ] text-white"
                disabled={isLoading}
              >
                {isLoading ? (
                  <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="flex items-center justify-center"
                  >
                    <div className="h-5 w-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2" />
                    Signing in...
                  </motion.div>
                ) : (
                  <span className="flex items-center justify-center">
                    <LogIn className="mr-2 h-5 w-5" />
                    Sign in
                  </span>
                )}
              </Button>

              <div className="text-center">
                <span className="text-gray-600 dark:text-[#B4B4CF]">
                  Don't have an account?{" "}
                </span>
                <Link
                  href="/register"
                  className="text-[#021DA5] dark:text-[#49B8BF] hover:text-[#134F88] dark:hover:text-[#11ЕЗАВ] font-medium"
                >
                  Sign up
                  <ArrowRight className="inline-block ml-1 h-4 w-4" />
                </Link>
              </div>
            </motion.form>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
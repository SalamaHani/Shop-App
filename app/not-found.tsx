import { Button } from "@/components/ui/button";
import { Home, ShoppingBag } from "lucide-react";
import React from "react";
import Link from "next/link";

export default function Notfound() {
  return (
    <div className="min-h-full flex flex-col">
      <div className="flex-1 flex flex-col items-center justify-center p-6 text-center">
        <div className="max-w-2xl mx-auto space-y-8">
          <div className="space-y-4">
            <h1 className="mb-4 text-7xl tracking-tight font-extrabold lg:text-9xl text-primary-600 dark:text-primary-500">
              404
            </h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Sorry, we can`t find that page. You`ll find lots to explore on the
              home page. !
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6">
            <Button asChild size="lg">
              <Link href="/">
                <Home className="h-5 w-5" />
                Back to Home
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline">
              <Link href="/products">
                <ShoppingBag className="h-5 w-5" />
                Product Shopping
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

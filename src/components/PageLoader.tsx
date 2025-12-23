import React, { useState, useEffect } from 'react';
import { Skeleton } from '@/components/ui/skeleton';

interface PageLoaderProps {
  children: React.ReactNode;
  delay?: number;
}

const PageLoader = ({ children, delay = 300 }: PageLoaderProps) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, delay);

    return () => clearTimeout(timer);
  }, [delay]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-background">
        {/* Navigation Skeleton */}
        <div className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
          <div className="container mx-auto px-6 py-4 flex items-center justify-between">
            <Skeleton className="h-8 w-32" />
            <div className="hidden md:flex gap-6">
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
              <Skeleton className="h-4 w-16" />
            </div>
            <Skeleton className="h-9 w-9 rounded-md" />
          </div>
        </div>

        {/* Hero Skeleton */}
        <section className="min-h-screen flex items-center pt-20">
          <div className="container mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Skeleton className="h-6 w-48" />
                <Skeleton className="h-14 w-full max-w-md" />
                <Skeleton className="h-14 w-3/4" />
                <Skeleton className="h-20 w-full" />
                <div className="flex gap-4 pt-4">
                  <Skeleton className="h-12 w-32 rounded-lg" />
                  <Skeleton className="h-12 w-32 rounded-lg" />
                </div>
              </div>
              <div className="flex justify-center">
                <Skeleton className="w-72 h-72 lg:w-96 lg:h-96 rounded-2xl" />
              </div>
            </div>
          </div>
        </section>

        {/* About Skeleton */}
        <section className="py-24">
          <div className="container mx-auto px-6">
            <div className="text-center mb-12">
              <Skeleton className="h-4 w-24 mx-auto mb-4" />
              <Skeleton className="h-10 w-64 mx-auto mb-4" />
              <Skeleton className="h-16 w-full max-w-2xl mx-auto" />
            </div>
          </div>
        </section>
      </div>
    );
  }

  return <>{children}</>;
};

export default PageLoader;

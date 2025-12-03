'use client';

import { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

export function TestimonialsSection() {
  useEffect(() => {
    // Load Elfsight script if not already loaded
    if (
      !document.querySelector(
        'script[src="https://elfsightcdn.com/platform.js"]'
      )
    ) {
      const script = document.createElement('script');
      script.src = 'https://elfsightcdn.com/platform.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Customer Reviews
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            What Our Customers Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don&apos;t just take our word for it — hear from our satisfied
            customers on Google
          </p>
        </div>

        {/* Elfsight Google Reviews Widget */}
        <div className="flex justify-center">
          <div
            className="elfsight-app-96546290-cc49-4e04-b7ff-5e3bf338bf5a"
            data-elfsight-app-lazy
          />
        </div>
      </div>
    </section>
  );
}

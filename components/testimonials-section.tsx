'use client';

import { useEffect } from 'react';
import { Badge } from '@/components/ui/badge';

declare global {
  interface Window {
    Featurable?: {
      load?: () => void;
    };
  }
}

export function TestimonialsSection() {
  useEffect(() => {
    const scriptSrc =
      'https://featurable.com/assets/v2/carousel_default.min.js';

    const initializeWidget = () => {
      window.Featurable?.load?.();
    };

    const existingScript = document.querySelector<HTMLScriptElement>(
      `script[src="${scriptSrc}"]`
    );

    if (existingScript) {
      initializeWidget();
      return;
    }

    const script = document.createElement('script');
    script.src = scriptSrc;
    script.defer = true;
    script.charset = 'UTF-8';
    script.addEventListener('load', initializeWidget);
    document.body.appendChild(script);
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

        {/* Featurable Google Reviews Widget */}
        <div className="flex justify-center">
          <div
            id="featurable-85191d66-197b-4a36-9884-d167f22aaceb"
            data-featurable-async
            className="w-full"
          />
        </div>
      </div>
    </section>
  );
}

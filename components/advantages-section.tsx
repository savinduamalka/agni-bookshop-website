import { Zap, Cpu, Users, Award, Clock, Shield } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const advantages = [
  {
    icon: Zap,
    title: 'Fast & Reliable',
    description:
      'Quick turnaround times without compromising on quality. Most services completed same-day.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description:
      'Latest printing and laminating equipment for superior results every time.',
  },
  {
    icon: Users,
    title: 'Expert Assistance',
    description:
      'Friendly and knowledgeable staff ready to help with all your printing needs.',
  },
  {
    icon: Award,
    title: 'Quality Guaranteed',
    description:
      'We stand behind our work with a satisfaction guarantee on all services.',
  },
  {
    icon: Clock,
    title: 'Convenient Hours',
    description: 'Open 7 days a week with extended hours to serve you better.',
  },
  {
    icon: Shield,
    title: 'Trusted Service',
    description: 'Serving Galle community with reliable services for years.',
  },
];

export function AdvantagesSection() {
  return (
    <section id="about" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Why Choose Us
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Your Trusted Partner in Galle
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Experience the difference with our commitment to quality, speed, and
            customer satisfaction
          </p>
        </div>

        {/* Advantages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {advantages.map((advantage, index) => {
            const Icon = advantage.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden bg-card border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg"
              >
                <div className="absolute top-0 left-0 w-1 h-full bg-primary transform origin-top scale-y-0 group-hover:scale-y-100 transition-transform duration-300" />
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    {advantage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {advantage.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { value: '7 Days', label: 'Weekly Service' },
            {
              value: 'Convenient Hours',
              label:
                'Open 7 days a week with extended hours to serve you better.',
            },
            { value: '25+', label: 'Services Offered' },
            { value: '1000+', label: 'Products Available' },
          ].map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

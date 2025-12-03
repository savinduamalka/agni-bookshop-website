'use client';

import type React from 'react';

import { useState } from 'react';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Send,
  CheckCircle,
  Facebook,
} from 'lucide-react';
import Link from 'next/link';

const services = [
  'Photocopy & Printout',
  'Laminating',
  'Typesetting',
  'Stationeries & Accessories',
  'Mobile Reloads',
  'Bill Payments',
  'Film | Games | TV Series',
  'Mug Printing',
  'Seal Cutting',
  'Other',
];

export function ContactSection() {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    if (!formState.name.trim()) newErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!formState.phone.trim()) newErrors.phone = 'Phone number is required';
    if (!formState.service) newErrors.service = 'Please select a service';
    if (!formState.message.trim()) newErrors.message = 'Message is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', phone: '', service: '', message: '' });
  };

  const handleChange = (field: string, value: string) => {
    setFormState((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <section id="contact" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Get in Touch
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Contact Us Today
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Have questions or need a quote? Reach out to us and we&apos;ll
            respond promptly
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="bg-card border-border">
              <CardHeader>
                <CardTitle className="text-card-foreground">
                  Contact Information
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Reach us through any of these channels
                </CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                {/* Phone */}
                <Link
                  href="tel:+94725451111"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Phone</p>
                    <p className="font-semibold text-card-foreground">
                      072 545 1111
                    </p>
                  </div>
                </Link>

                {/* WhatsApp */}
                <Link
                  href="https://wa.me/94725451111"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center group-hover:bg-green-200 transition-colors">
                    <MessageCircle className="w-6 h-6 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">WhatsApp</p>
                    <p className="font-semibold text-card-foreground">
                      Message us directly
                    </p>
                  </div>
                </Link>

                {/* Email */}
                <Link
                  href="mailto:agnibookshop1@gmail.com"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                    <Mail className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-semibold text-card-foreground">
                      agnibookshop1@gmail.com
                    </p>
                  </div>
                </Link>

                {/* Facebook */}
                <Link
                  href="https://www.facebook.com/agnienterprise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50 hover:bg-primary/10 transition-colors group"
                >
                  <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center group-hover:bg-blue-200 transition-colors">
                    <Facebook className="w-6 h-6 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Facebook</p>
                    <p className="font-semibold text-card-foreground">
                      Follow us on Facebook
                    </p>
                  </div>
                </Link>

                {/* Address */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <MapPin className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Location</p>
                    <p className="font-semibold text-card-foreground">
                      Ankokkawala, Galle
                    </p>
                    <p className="text-sm text-muted-foreground">Sri Lanka</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-center gap-4 p-4 rounded-lg bg-secondary/50">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Business Hours
                    </p>
                    <p className="font-semibold text-card-foreground">
                      Monday - Sunday
                    </p>
                    <p className="text-sm text-muted-foreground">
                      7:30 AM - 9:00 PM
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <Card className="bg-card border-border">
            <CardHeader>
              <CardTitle className="text-card-foreground">
                Send us a Message
              </CardTitle>
              <CardDescription className="text-muted-foreground">
                Fill out the form below and we&apos;ll get back to you soon
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="flex flex-col items-center justify-center py-12 text-center">
                  <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-xl font-semibold text-card-foreground mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Thank you for contacting us. We&apos;ll respond within 24
                    hours.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setIsSubmitted(false)}
                    className="border-primary text-primary hover:bg-primary/10"
                  >
                    Send Another Message
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name" className="text-card-foreground">
                        Name *
                      </Label>
                      <Input
                        id="name"
                        value={formState.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        placeholder="Your name"
                        className={`bg-background border-input ${
                          errors.name ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.name && (
                        <p className="text-sm text-destructive">
                          {errors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone" className="text-card-foreground">
                        Phone *
                      </Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formState.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        placeholder="Your phone number"
                        className={`bg-background border-input ${
                          errors.phone ? 'border-destructive' : ''
                        }`}
                      />
                      {errors.phone && (
                        <p className="text-sm text-destructive">
                          {errors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-card-foreground">
                      Email *
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      value={formState.email}
                      onChange={(e) => handleChange('email', e.target.value)}
                      placeholder="your@email.com"
                      className={`bg-background border-input ${
                        errors.email ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.email && (
                      <p className="text-sm text-destructive">{errors.email}</p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service" className="text-card-foreground">
                      Service Required *
                    </Label>
                    <Select
                      value={formState.service}
                      onValueChange={(value) => handleChange('service', value)}
                    >
                      <SelectTrigger
                        className={`bg-background border-input ${
                          errors.service ? 'border-destructive' : ''
                        }`}
                      >
                        <SelectValue placeholder="Select a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-popover border-border">
                        {services.map((service) => (
                          <SelectItem
                            key={service}
                            value={service}
                            className="text-popover-foreground"
                          >
                            {service}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                    {errors.service && (
                      <p className="text-sm text-destructive">
                        {errors.service}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-card-foreground">
                      Message *
                    </Label>
                    <Textarea
                      id="message"
                      value={formState.message}
                      onChange={(e) => handleChange('message', e.target.value)}
                      placeholder="Tell us about your requirements..."
                      rows={4}
                      className={`bg-background border-input resize-none ${
                        errors.message ? 'border-destructive' : ''
                      }`}
                    />
                    {errors.message && (
                      <p className="text-sm text-destructive">
                        {errors.message}
                      </p>
                    )}
                  </div>

                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin mr-2" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

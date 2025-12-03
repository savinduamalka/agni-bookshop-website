'use client';

import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  ArrowUp,
  Facebook,
  Instagram,
} from 'lucide-react';

const quickLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About Us' },
  { href: '#contact', label: 'Contact' },
];

const services = [
  'Photocopy & Printout',
  'Laminating',
  'Typesetting',
  'Mug Printing',
  'Seal Cutting',
  'Bill Payments',
];

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-foreground text-background">
      {/* Main Footer */}
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="#home" className="flex items-center gap-2">
              <div className="flex items-center justify-center w-10 h-10 rounded-lg overflow-hidden">
                <Image
                  src="/agni-logo.png"
                  alt="Agni Bookshop Logo"
                  width={40}
                  height={40}
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-bold text-background leading-tight">
                  Agni
                </span>
                <span className="text-xs text-background/70 leading-tight">
                  Bookshop & Communication
                </span>
              </div>
            </Link>
            <p className="text-background/70 text-sm">
              Your trusted partner for all printing, communication, and service
              needs in Galle, Sri Lanka.
            </p>
            <div className="flex gap-3">
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/10 hover:bg-primary text-background hover:text-primary-foreground"
                asChild
              >
                <Link
                  href="https://www.facebook.com/agnienterprise/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Facebook"
                >
                  <Facebook className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-background/10 hover:bg-primary text-background hover:text-primary-foreground"
                asChild
              >
                <Link href="#" aria-label="Instagram">
                  <Instagram className="w-5 h-5" />
                </Link>
              </Button>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full bg-green-600 hover:bg-green-700 text-background"
                asChild
              >
                <Link
                  href="https://wa.me/94725451111"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="WhatsApp"
                >
                  <MessageCircle className="w-5 h-5" />
                </Link>
              </Button>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">
              Our Services
            </h3>
            <ul className="space-y-2">
              {services.map((service) => (
                <li key={service}>
                  <Link
                    href="#services"
                    className="text-background/70 hover:text-primary transition-colors text-sm"
                  >
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="font-semibold text-lg mb-4 text-background">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <Link
                  href="tel:+94725451111"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Phone className="w-4 h-4 text-primary" />
                  <span className="text-sm">072 545 1111</span>
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:agnibookshop1@gmail.com"
                  className="flex items-center gap-3 text-background/70 hover:text-primary transition-colors"
                >
                  <Mail className="w-4 h-4 text-primary" />
                  <span className="text-sm">agnibookshop1@gmail.com</span>
                </Link>
              </li>
              <li className="flex items-start gap-3 text-background/70">
                <MapPin className="w-4 h-4 text-primary mt-0.5" />
                <span className="text-sm">
                  Ankokkawala, Galle,
                  <br />
                  Sri Lanka
                </span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-background/10">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-sm text-background/60 text-center sm:text-left">
              © {new Date().getFullYear()} Agni Bookshop & Communication. All
              rights reserved.
            </p>
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="text-background/70 hover:text-primary hover:bg-background/10"
            >
              <ArrowUp className="w-4 h-4 mr-2" />
              Back to Top
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}

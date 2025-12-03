'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetTitle,
} from '@/components/ui/sheet';

const navLinks = [
  { href: '#home', label: 'Home' },
  { href: '#services', label: 'Services' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-md'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
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
              <span className="text-lg font-bold text-foreground leading-tight">
                Agni
              </span>
              <span className="text-xs text-muted-foreground leading-tight">
                Bookshop & Communication
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden md:flex items-center gap-4">
            <Link
              href="tel:+94725451111"
              className="flex items-center gap-2 text-sm font-medium text-foreground/80"
            >
              <Phone className="w-4 h-4" />
              <span>072 545 1111</span>
            </Link>
            <Button
              asChild
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              <Link href="#contact">Contact Us</Link>
            </Button>
          </div>

          {/* Mobile Menu */}
          {isMounted ? (
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button variant="ghost" size="icon">
                  <Menu className="w-6 h-6" />
                  <span className="sr-only">Open menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full max-w-xs bg-background"
              >
                <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
                <div className="flex flex-col gap-6 mt-8">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className="text-lg font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {link.label}
                    </Link>
                  ))}
                  <hr className="border-border" />
                  <Link
                    href="tel:+94725451111"
                    className="flex items-center gap-2 text-foreground"
                  >
                    <Phone className="w-5 h-5 text-primary" />
                    <span>072 545 1111</span>
                  </Link>
                  <Button
                    asChild
                    className="bg-primary hover:bg-primary/90 text-primary-foreground w-full"
                  >
                    <Link href="#contact" onClick={() => setIsOpen(false)}>
                      Contact Us
                    </Link>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          ) : (
            <Button variant="ghost" size="icon" className="md:hidden">
              <Menu className="w-6 h-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          )}
        </div>
      </div>
    </header>
  );
}

"use client"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import {
  Printer,
  FileText,
  Layers,
  ShoppingBag,
  Smartphone,
  Receipt,
  Film,
  Coffee,
  Stamp,
  MessageCircle,
} from "lucide-react"
import Link from "next/link"

const services = [
  {
    id: 1,
    title: "Photocopy & Printout",
    description: "High-quality black & white and color printing services for all your document needs.",
    icon: Printer,
    pricing: [
      { item: "B&W Photocopy (A4)", price: "Rs. 5" },
      { item: "B&W Printout (A4)", price: "Rs. 10" },
      { item: "Color Photocopy (A4)", price: "Rs. 25" },
      { item: "Color Printout (A4)", price: "Rs. 35" },
      { item: "A3 B&W", price: "Rs. 15" },
      { item: "A3 Color", price: "Rs. 50" },
    ],
    popular: true,
  },
  {
    id: 2,
    title: "Laminating",
    description: "Professional laminating services to protect and preserve your important documents.",
    icon: Layers,
    pricing: [
      { item: "A4 (Standard)", price: "Rs. 50" },
      { item: "A3 (Standard)", price: "Rs. 80" },
      { item: "Legal Size", price: "Rs. 60" },
      { item: "ID Card Size", price: "Rs. 20" },
      { item: "Photo Size", price: "Rs. 30" },
      { item: "Custom Size", price: "Contact Us" },
    ],
    popular: false,
  },
  {
    id: 3,
    title: "Typesetting",
    description: "Professional document formatting, resume design, and typesetting services.",
    icon: FileText,
    pricing: [
      { item: "Resume Design", price: "Rs. 300" },
      { item: "CV Formatting", price: "Rs. 250" },
      { item: "Letter Typing", price: "Rs. 100" },
      { item: "Application Form", price: "Rs. 150" },
      { item: "Document Formatting", price: "Rs. 200" },
      { item: "Complex Documents", price: "Contact Us" },
    ],
    popular: true,
  },
  {
    id: 4,
    title: "Stationeries & Accessories",
    description: "Wide range of computer accessories and stationery items for office and school.",
    icon: ShoppingBag,
    pricing: [
      { item: "Pens & Pencils", price: "From Rs. 15" },
      { item: "Notebooks", price: "From Rs. 50" },
      { item: "USB Drives", price: "From Rs. 500" },
      { item: "Memory Cards", price: "From Rs. 400" },
      { item: "Cables & Adapters", price: "From Rs. 100" },
      { item: "Office Supplies", price: "Various" },
    ],
    popular: false,
  },
  {
    id: 5,
    title: "Mobile Reloads",
    description: "Instant mobile reloads for all major networks - Dialog, Mobitel, Hutch, and Airtel.",
    icon: Smartphone,
    pricing: [
      { item: "Dialog Reload", price: "Any Amount" },
      { item: "Mobitel Reload", price: "Any Amount" },
      { item: "Hutch Reload", price: "Any Amount" },
      { item: "Airtel Reload", price: "Any Amount" },
      { item: "Data Packages", price: "Available" },
      { item: "IDD Packages", price: "Available" },
    ],
    popular: false,
  },
  {
    id: 6,
    title: "Bill Payments",
    description: "Convenient bill payment services for water, electricity, telephone, and more.",
    icon: Receipt,
    pricing: [
      { item: "Electricity Bills (CEB)", price: "Free Service" },
      { item: "Water Bills (NWSDB)", price: "Free Service" },
      { item: "Telephone Bills (SLT)", price: "Free Service" },
      { item: "Insurance Payments", price: "Free Service" },
      { item: "Leasing Payments", price: "Free Service" },
      { item: "Other Utility Bills", price: "Free Service" },
    ],
    popular: false,
  },
  {
    id: 7,
    title: "Film | Games | TV Series",
    description: "Latest movies, games, and TV series available for purchase and download.",
    icon: Film,
    pricing: [
      { item: "Latest Movies", price: "Rs. 50" },
      { item: "TV Series (Per Season)", price: "Rs. 150" },
      { item: "PC Games", price: "From Rs. 100" },
      { item: "PlayStation Games", price: "From Rs. 150" },
      { item: "Software", price: "Contact Us" },
      { item: "Bulk Downloads", price: "Special Rates" },
    ],
    popular: false,
  },
  {
    id: 8,
    title: "Mug Printing",
    description: "Custom mug printing for gifts, events, and promotional items.",
    icon: Coffee,
    pricing: [
      { item: "White Mug (Standard)", price: "Rs. 450" },
      { item: "White Mug (Premium)", price: "Rs. 550" },
      { item: "Magic Mug (Color Change)", price: "Rs. 750" },
      { item: "Inner Color Mug", price: "Rs. 600" },
      { item: "Bulk Orders (10+)", price: "Special Rates" },
      { item: "Design Service", price: "Rs. 100" },
    ],
    popular: true,
  },
  {
    id: 9,
    title: "Seal Cutting",
    description: "Custom rubber stamps and seals for business and personal use.",
    icon: Stamp,
    pricing: [
      { item: "Round Seal (Small)", price: "Rs. 400" },
      { item: "Round Seal (Medium)", price: "Rs. 550" },
      { item: "Round Seal (Large)", price: "Rs. 700" },
      { item: "Rectangle Seal", price: "Rs. 500" },
      { item: "Self-Inking Stamp", price: "Rs. 1,200" },
      { item: "Custom Design", price: "Contact Us" },
    ],
    popular: false,
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Services
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Complete Range of Printing & Communication Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            From printing to bill payments, we offer everything you need under one roof
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ServiceCard({ service }: { service: (typeof services)[0] }) {
  const Icon = service.icon

  return (
    <Card className="group relative overflow-hidden bg-card hover:shadow-lg transition-all duration-300 border-border hover:border-primary/30">
      {service.popular && (
        <div className="absolute top-4 right-4">
          <Badge className="bg-primary text-primary-foreground">Popular</Badge>
        </div>
      )}
      <CardHeader>
        <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
          <Icon className="w-6 h-6 text-primary" />
        </div>
        <CardTitle className="text-xl text-card-foreground">{service.title}</CardTitle>
        <CardDescription className="text-muted-foreground">{service.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {/* Preview Pricing */}
        <div className="space-y-2">
          {service.pricing.slice(0, 3).map((item, index) => (
            <div key={index} className="flex justify-between text-sm">
              <span className="text-muted-foreground">{item.item}</span>
              <span className="font-medium text-foreground">{item.price}</span>
            </div>
          ))}
          {service.pricing.length > 3 && (
            <p className="text-xs text-muted-foreground pt-1">+{service.pricing.length - 3} more options...</p>
          )}
        </div>
      </CardContent>
      <CardFooter className="flex gap-2">
        <Dialog>
          <DialogTrigger asChild>
            <Button
              variant="outline"
              className="flex-1 border-primary/30 text-foreground hover:bg-primary/10 bg-transparent"
            >
              View Pricing
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-md bg-card">
            <DialogHeader>
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-2">
                <Icon className="w-6 h-6 text-primary" />
              </div>
              <DialogTitle className="text-card-foreground">{service.title}</DialogTitle>
              <DialogDescription className="text-muted-foreground">{service.description}</DialogDescription>
            </DialogHeader>
            <div className="mt-4">
              <div className="rounded-lg border border-border overflow-hidden">
                <div className="bg-primary/10 px-4 py-2">
                  <div className="flex justify-between text-sm font-medium text-foreground">
                    <span>Service</span>
                    <span>Price</span>
                  </div>
                </div>
                <div className="divide-y divide-border">
                  {service.pricing.map((item, index) => (
                    <div key={index} className="flex justify-between px-4 py-3 text-sm">
                      <span className="text-muted-foreground">{item.item}</span>
                      <span className="font-medium text-primary">{item.price}</span>
                    </div>
                  ))}
                </div>
              </div>
              <Button asChild className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="https://wa.me/94725451111" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Get Quote on WhatsApp
                </Link>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
        <Button asChild className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground">
          <Link href="https://wa.me/94725451111" target="_blank" rel="noopener noreferrer">
            Get Quote
          </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}

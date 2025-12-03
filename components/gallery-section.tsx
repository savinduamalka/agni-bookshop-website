'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Dialog, DialogContent, DialogTitle } from '@/components/ui/dialog';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  X,
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';

const galleryItems = [
  {
    id: 2,
    src: '/laminating1.webp',
    title: 'Laminated Certificates',
    category: 'Laminating',
    description:
      'Professional lamination for certificates and important documents',
  },
  {
    id: 4,
    src: '/sealcutting1.webp',
    title: 'Custom Seals',
    category: 'Seal Cutting',
    description: 'Professional rubber stamps for business use',
  },
  {
    id: 5,
    src: '/typesetting1.webp',
    title: 'Resume Designs',
    category: 'Typesetting',
    description: 'Modern CV and resume formatting services',
  },
  {
    id: 7,
    src: '/mug1.webp',
    title: 'Custom Family Mugs',
    category: 'Mug Printing',
    description: 'Personalized mugs with family photos and Sinhala text',
  },
  {
    id: 8,
    src: '/mug2.webp',
    title: 'Birthday Celebration Mug',
    category: 'Mug Printing',
    description: 'Custom birthday mug with colorful design and balloons',
  },
  {
    id: 9,
    src: '/mug3.webp',
    title: 'Portrait Photo Mug',
    category: 'Mug Printing',
    description: 'Professional photo printed on high-quality ceramic mug',
  },
  {
    id: 10,
    src: '/mug4.webp',
    title: 'Kids Birthday Mug',
    category: 'Mug Printing',
    description: 'Colorful birthday mug with cake design for children',
  },
  {
    id: 11,
    src: '/mug5.webp',
    title: "Teacher's Day Mugs",
    category: 'Mug Printing',
    description: "Special Teacher's Day celebration mugs with custom designs",
  },
  {
    id: 12,
    src: '/mug6.webp',
    title: 'Teacher Appreciation Mugs',
    category: 'Mug Printing',
    description: 'Elegant floral design mugs for teachers',
  },
  {
    id: 13,
    src: '/mug7.webp',
    title: 'School Event Mugs',
    category: 'Mug Printing',
    description: 'Custom mugs for school events and celebrations',
  },
  {
    id: 14,
    src: '/mug8.webp',
    title: 'Photo Gift Mug',
    category: 'Mug Printing',
    description: 'Beautiful photo print mug - perfect gift idea',
  },
  {
    id: 15,
    src: '/mug9.webp',
    title: 'Birthday Gift Mug',
    category: 'Mug Printing',
    description: 'Personalized Happy Birthday mug with custom name',
  },
  {
    id: 16,
    src: '/printing1.webp',
    title: 'School Photo Cards',
    category: 'Printing',
    description: 'Custom printed photo cards for schools and events',
  },
  {
    id: 17,
    src: '/printing2.webp',
    title: 'Preschool Workbooks',
    category: 'Printing',
    description: 'Custom printed educational workbooks for preschools',
  },
  {
    id: 18,
    src: '/printing3.webp',
    title: 'Educational Flash Cards',
    category: 'Printing',
    description: 'Colorful laminated flash cards for learning',
  },
  {
    id: 19,
    src: '/printing4.webp',
    title: 'Kids Name Tags',
    category: 'Printing',
    description: 'Personalized laminated name tags with cartoon designs',
  },
];

const categories = [
  'All',
  'Printing',
  'Laminating',
  'Mug Printing',
  'Seal Cutting',
  'Typesetting',
];

// Initial display count - shows a mix from different categories
const INITIAL_DISPLAY_COUNT = 6;

export function GallerySection() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedImage, setSelectedImage] = useState<
    (typeof galleryItems)[0] | null
  >(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showAll, setShowAll] = useState(false);

  const filteredItems =
    selectedCategory === 'All'
      ? galleryItems
      : galleryItems.filter((item) => item.category === selectedCategory);

  // Get initial items - pick from different categories for variety
  const getInitialItems = () => {
    if (selectedCategory !== 'All') {
      return filteredItems.slice(0, INITIAL_DISPLAY_COUNT);
    }

    // For "All" category, pick items from different categories for variety
    const categoryPicks: typeof galleryItems = [];
    const usedCategories = new Set<string>();

    // First pass: get one from each category
    for (const item of galleryItems) {
      if (
        !usedCategories.has(item.category) &&
        categoryPicks.length < INITIAL_DISPLAY_COUNT
      ) {
        categoryPicks.push(item);
        usedCategories.add(item.category);
      }
    }

    // Second pass: fill remaining slots
    for (const item of galleryItems) {
      if (categoryPicks.length >= INITIAL_DISPLAY_COUNT) break;
      if (!categoryPicks.includes(item)) {
        categoryPicks.push(item);
      }
    }

    return categoryPicks;
  };

  const displayedItems = showAll ? filteredItems : getInitialItems();
  const hasMoreItems = filteredItems.length > INITIAL_DISPLAY_COUNT;

  const openLightbox = (item: (typeof galleryItems)[0], index: number) => {
    setSelectedImage(item);
    // Find the actual index in filteredItems for navigation
    const actualIndex = filteredItems.findIndex((i) => i.id === item.id);
    setCurrentIndex(actualIndex >= 0 ? actualIndex : index);
  };

  const navigateImage = (direction: 'prev' | 'next') => {
    const newIndex =
      direction === 'prev'
        ? (currentIndex - 1 + filteredItems.length) % filteredItems.length
        : (currentIndex + 1) % filteredItems.length;
    setCurrentIndex(newIndex);
    setSelectedImage(filteredItems[newIndex]);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setShowAll(false); // Reset to initial view when changing category
  };

  return (
    <section id="gallery" className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12">
          <Badge variant="outline" className="mb-4 text-primary border-primary">
            Our Work
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            Gallery of Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse through examples of our quality work and craftsmanship
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? 'default' : 'outline'}
              size="sm"
              onClick={() => handleCategoryChange(category)}
              className={
                selectedCategory === category
                  ? 'bg-primary hover:bg-primary/90 text-primary-foreground'
                  : 'border-primary/30 text-foreground hover:bg-primary/10'
              }
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedItems.map((item, index) => (
            <div
              key={item.id}
              className="group relative overflow-hidden rounded-lg cursor-pointer bg-card border border-border hover:border-primary/30 transition-all duration-300"
              onClick={() => openLightbox(item, index)}
            >
              <div className="aspect-[4/3] relative overflow-hidden">
                <Image
                  src={item.src || '/placeholder.svg'}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  loading="lazy"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/40 transition-colors duration-300" />
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-foreground/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <Badge className="mb-2 bg-primary text-primary-foreground">
                  {item.category}
                </Badge>
                <h3 className="text-background font-semibold">{item.title}</h3>
                <p className="text-background/80 text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* See More / See Less Button */}
        {hasMoreItems && (
          <div className="flex justify-center mt-8">
            <Button
              variant="outline"
              size="lg"
              onClick={() => setShowAll(!showAll)}
              className="border-primary text-primary hover:bg-primary/10 gap-2"
            >
              {showAll ? (
                <>
                  <ChevronUp className="w-5 h-5" />
                  Show Less
                </>
              ) : (
                <>
                  <ChevronDown className="w-5 h-5" />
                  See More ({filteredItems.length - INITIAL_DISPLAY_COUNT} more)
                </>
              )}
            </Button>
          </div>
        )}

        {/* Lightbox */}
        <Dialog
          open={!!selectedImage}
          onOpenChange={() => setSelectedImage(null)}
        >
          <DialogContent className="max-w-4xl p-0 bg-card border-border overflow-hidden">
            <DialogTitle className="sr-only">
              {selectedImage?.title || 'Gallery Image'}
            </DialogTitle>
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 p-2 rounded-full bg-foreground/20 hover:bg-foreground/40 text-background transition-colors"
              aria-label="Close lightbox"
            >
              <X className="w-5 h-5" />
            </button>
            {selectedImage && (
              <div className="relative">
                <div className="aspect-[16/10] relative">
                  <Image
                    src={selectedImage.src || '/placeholder.svg'}
                    alt={selectedImage.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 1024px) 100vw, 1024px"
                  />
                </div>
                <div className="p-6 bg-card">
                  <Badge className="mb-2 bg-primary text-primary-foreground">
                    {selectedImage.category}
                  </Badge>
                  <h3 className="text-xl font-semibold text-card-foreground mb-1">
                    {selectedImage.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {selectedImage.description}
                  </p>
                </div>
                {/* Navigation */}
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('prev');
                  }}
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/20 hover:bg-foreground/40 text-background transition-colors"
                  aria-label="Previous image"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    navigateImage('next');
                  }}
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-foreground/20 hover:bg-foreground/40 text-background transition-colors"
                  aria-label="Next image"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
}

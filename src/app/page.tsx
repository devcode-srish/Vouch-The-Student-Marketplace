'use client';

import { useState, useEffect } from 'react';
import { items } from "@/lib/data";
import { ItemCard } from "@/components/items/ItemCard";
import { Input } from "@/components/ui/input";
import { Search, Frown } from "lucide-react";
import type { Item } from '@/lib/types';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState('');
  const [filteredItems, setFilteredItems] = useState<Item[]>(items);

  useEffect(() => {
    if (searchQuery.trim() === '') {
      setFilteredItems(items);
      return;
    }

    const lowercasedQuery = searchQuery.toLowerCase();
    const results = items.filter(item =>
      item.name.toLowerCase().includes(lowercasedQuery) ||
      item.description.toLowerCase().includes(lowercasedQuery) ||
      item.category.toLowerCase().includes(lowercasedQuery)
    );
    setFilteredItems(results);
  }, [searchQuery]);

  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12 py-16">
        <div style={{ perspective: '1000px' }}>
          <h1 className="text-4xl md:text-6xl font-bold font-headline tracking-tighter text-primary floating-text">
            The Student Marketplace
          </h1>
        </div>
        <p className="text-lg text-muted-foreground mt-4 max-w-xl mx-auto">
          Buy, sell, and swap with fellow students. Exclusively for you.
        </p>
        <div className="mt-8 max-w-lg mx-auto relative">
          <Input 
            placeholder="Search for lab coats, textbooks, notes..." 
            className="pl-10 h-12 text-base"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
        </div>
      </header>
      
      <section>
        <h2 className="text-3xl font-bold mb-8 font-headline">
          {searchQuery ? `Results for "${searchQuery}"` : 'Fresh Finds'}
        </h2>
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-16">
            <Frown className="mx-auto h-16 w-16 text-muted-foreground" />
            <h3 className="mt-4 text-2xl font-semibold">No Results Found</h3>
            <p className="mt-2 text-muted-foreground">
              We couldn't find any items matching your search. Try a different keyword.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

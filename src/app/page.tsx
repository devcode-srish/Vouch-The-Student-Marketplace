
'use client';

import { useState, useEffect } from 'react';
import { items } from "@/lib/data";
import { ItemCard } from "@/components/items/ItemCard";
import { Input } from "@/components/ui/input";
import { Search, Frown } from "lucide-react";
import type { Item } from '@/lib/types';
import { ShaderAnimation } from "@/components/ui/shader-animation";

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
      <header className="relative flex h-[400px] md:h-[500px] w-full flex-col items-center justify-center overflow-hidden rounded-3xl border mb-16 shadow-2xl group">
        <div className="absolute inset-0 z-0">
          <ShaderAnimation />
        </div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent z-10" />
        
        <div className="relative z-20 text-center px-6">
          <h1 className="text-6xl md:text-9xl font-bold font-headline tracking-tighter text-white drop-shadow-2xl animate-in fade-in slide-in-from-bottom-4 duration-1000">
            AlgoSwap
          </h1>
          <p className="text-xl md:text-3xl text-white/90 mt-4 font-medium tracking-wide animate-in fade-in slide-in-from-bottom-6 duration-1000 delay-200">
            The Student Marketplace
          </p>
          
          <div className="mt-12 max-w-lg mx-auto relative pointer-events-auto animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-500">
            <div className="relative group/search">
              <Input 
                placeholder="Search for lab coats, textbooks, notes..." 
                className="pl-12 h-14 text-lg bg-background/80 backdrop-blur-xl border-white/20 text-foreground ring-offset-primary focus:ring-primary shadow-2xl transition-all duration-300 group-hover/search:bg-background/95"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground transition-colors group-hover/search:text-primary" />
            </div>
          </div>
        </div>
      </header>
      
      <section>
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold font-headline">
            {searchQuery ? `Results for "${searchQuery}"` : 'Fresh Finds'}
          </h2>
          <div className="h-1 flex-1 bg-primary/10 ml-6 rounded-full hidden sm:block" />
        </div>
        
        {filteredItems.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8">
            {filteredItems.map((item) => (
              <ItemCard key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center py-24 bg-card rounded-3xl border border-dashed">
            <Frown className="mx-auto h-20 w-20 text-muted-foreground opacity-20" />
            <h3 className="mt-6 text-3xl font-bold">No Results Found</h3>
            <p className="mt-2 text-muted-foreground max-w-sm mx-auto">
              We couldn't find any items matching your search. Try adjusting your filters or search terms.
            </p>
          </div>
        )}
      </section>
    </div>
  );
}

"use client";

import { useState, useEffect } from 'react';
import type { Item, Purchase } from '@/lib/types';
import { items } from '@/lib/data';

const PURCHASES_STORAGE_KEY = 'vouches-purchases';

export function usePurchases() {
  const [purchases, setPurchases] = useState<Purchase[]>([]);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    let allPurchases: Purchase[] = [];
    try {
      const storedPurchases = localStorage.getItem(PURCHASES_STORAGE_KEY);
      if (storedPurchases) {
        // Ensure status property exists, default to "Completed" for older data
        allPurchases = JSON.parse(storedPurchases).map((p: any) => ({...p, status: p.status || 'Completed' }));
      }

      let updated = false;
      // Add a mock 'Held' purchase if one doesn't exist for demonstration
      if (!allPurchases.some(p => p.status === 'Held')) {
        const heldPurchase: Purchase = {
            transactionId: `TXN-HELD-${items[2].id}`,
            item: items[2], // Data Structures Textbook
            purchaseDate: new Date(Date.now() - 24 * 60 * 60 * 1000).toISOString(), // 1 day ago
            status: "Held",
        };
        allPurchases.push(heldPurchase);
        updated = true;
      }
      
      // Add a mock 'Failed' purchase if one doesn't exist for demonstration
      if (!allPurchases.some(p => p.status === 'Failed')) {
        const failedPurchase: Purchase = {
            transactionId: `TXN-FAIL-${items[4].id}`,
            item: items[4], // Classmate Notebooks
            purchaseDate: new Date(Date.now() - 2 * 24 * 60 * 60 * 1000).toISOString(), // 2 days ago
            status: "Failed",
        };
        allPurchases.push(failedPurchase);
        updated = true;
      }

      if (updated) {
        localStorage.setItem(PURCHASES_STORAGE_KEY, JSON.stringify(allPurchases));
      }

    } catch (error) {
      console.error("Failed to load or update purchases in localStorage", error);
    } finally {
        setPurchases(allPurchases);
        setIsLoaded(true);
    }
  }, []);

  const addPurchase = (item: Item, transactionId: string) => {
    const newPurchase: Purchase = {
      item,
      transactionId,
      purchaseDate: new Date().toISOString(),
      status: "Completed",
    };

    setPurchases(prevPurchases => {
      const updatedPurchases = [...prevPurchases, newPurchase];
      try {
        localStorage.setItem(PURCHASES_STORAGE_KEY, JSON.stringify(updatedPurchases));
      } catch (error) {
          console.error("Failed to save purchases to localStorage", error);
      }
      return updatedPurchases;
    });
  };

  return { purchases, addPurchase, isLoaded };
}

'use client';

import { useEffect, useState } from 'react';
import { Hero } from '@/components/sections/Hero';

export default function TestPage() {
  const [hydrationComplete, setHydrationComplete] = useState(false);

  useEffect(() => {
    // Mark hydration as complete
    setHydrationComplete(true);
  }, []);

  return (
    <div className="min-h-screen">
      <div className="p-4 mb-4 bg-yellow-100 rounded">
        <h2 className="font-bold">Hydration Status:</h2>
        <p>{hydrationComplete ? 'Hydration Complete' : 'Not Hydrated Yet'}</p>
      </div>
      
      <Hero />
    </div>
  );
} 
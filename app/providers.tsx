'use client';

import { ThemeProvider } from 'next-themes';
import { ReactNode, useState, useEffect } from 'react';

interface ProvidersProps {
  children: ReactNode;
}

export function Providers({ children }: ProvidersProps) {
  // Add state for client-side rendering detection
  const [mounted, setMounted] = useState(false);
  
  // Ensure we're only rendering on the client
  useEffect(() => {
    setMounted(true);
  }, []);
  
  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
      {/* Apply different opacity to avoid flashes during hydration */}
      <div style={{ opacity: mounted ? 1 : 0, transition: 'opacity 0.2s' }}>
        {children}
      </div>
    </ThemeProvider>
  );
} 
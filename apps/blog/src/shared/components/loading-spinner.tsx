'use client';

import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 300;

interface LoadingSpinnerProps {
  delay?: number;
}

export default function LoadingSpinner({
  delay = DEFAULT_DELAY,
}: LoadingSpinnerProps) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, [delay]);

  if (!show) return <div className="min-h-screen" />;

  return (
    <div className="flex min-h-screen justify-center pt-40">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-pg-100 border-t-ds-primary dark:border-pg-800" />
    </div>
  );
}

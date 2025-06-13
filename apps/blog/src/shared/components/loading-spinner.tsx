'use client';

import { useEffect, useState } from 'react';

const DEFAULT_DELAY = 300;

export default function LoadingSpinner({ delay = DEFAULT_DELAY }: { delay?: number }) {
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
      <div className="border-t-main h-12 w-12 animate-spin rounded-full border-4 border-gray-100" />
    </div>
  );
}

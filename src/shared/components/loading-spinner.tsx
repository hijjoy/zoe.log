'use client';

import { useEffect, useState } from 'react';

export default function LoadingSpinner({ delay = 200 }: { delay?: number }) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, delay);

    return () => clearTimeout(timeout);
  }, []);

  if (!show) return <div className="min-h-screen" />;

  return (
    <div className="flex min-h-screen justify-center pt-40">
      <div className="h-12 w-12 animate-spin rounded-full border-4 border-gray-100 border-t-main" />
    </div>
  );
}

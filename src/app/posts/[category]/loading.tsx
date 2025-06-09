"use client";

import { useEffect, useState } from "react";

export default function Loading() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setShow(true);
    }, 300);

    return () => clearTimeout(timeout);
  }, []);

  if (!show) return <div className="min-h-screen" />;

  return (
    <div className="min-h-screen flex pt-40 justify-center">
      <div className="w-12 h-12 border-4 border-gray-100 border-t-main rounded-full animate-spin" />
    </div>
  );
}

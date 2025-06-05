import React from "react";
import Link from "next/link";
import Text from "@/components/common/text";

export default function Footer() {
  return (
    <footer className="flex justify-end py-8 w-full">
      <Text className="text-xs text-gray-500">
        © Powered by{" "}
        <Link
          href="https://github.com/hijjoy"
          className="hover:text-gray-600"
          target="_blank"
        >
          Hyewon
        </Link>
      </Text>
    </footer>
  );
}

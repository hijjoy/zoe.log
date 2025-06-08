"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { usePathname } from "next/navigation";
import { cn } from "@/libs/cn";
import { MENU_ITEMS } from "../constants";

export default function PostsMenu() {
  const pathname = usePathname();

  return (
    <ul className="flex gap-4 mb-10">
      {MENU_ITEMS.map((item, index) => (
        <MenuItem
          key={item.name}
          item={item}
          index={index}
          pathname={pathname}
        />
      ))}
    </ul>
  );
}

/* 각 카테고리 메뉴 아이템 */
interface MenuItemProps {
  item: (typeof MENU_ITEMS)[number];
  index: number;
  pathname: string;
}

const MenuItem = ({ item, index, pathname }: MenuItemProps) => {
  return (
    <motion.li
      key={item.name}
      className="relative"
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
    >
      <Link
        href={item.href}
        className={cn(
          "relative block py-2 hover:opacity-80",
          pathname === item.href && "text-main"
        )}
      >
        {item.name}
        <motion.div
          className="absolute bottom-0 left-0 w-full h-[2px] bg-main"
          initial={false}
          animate={{
            scaleX: pathname === item.href ? 1 : 0,
            opacity: pathname === item.href ? 1 : 0,
          }}
          transition={{
            type: "spring",
            stiffness: 300,
            damping: 30,
          }}
        />
      </Link>
    </motion.li>
  );
};

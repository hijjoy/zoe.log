"use client";

import CodeBlockBox from "@/components/common/code-box";
import MotionOpacity from "@/components/common/motion-opacity";
import Image from "next/image";
import { useState } from "react";
import { VscDebugStart, VscDebugRestart } from "react-icons/vsc";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/libs/cn";

const code = `
export default function Zoelog() {
  const [text, setText] = useState("");

  return (
      <button
        onClick={() => setText("FE 개발자다 멍!")}
      >
        click start icon
      </button>
  );
}
`.trim();

export default function Playground() {
  const [isImageVisible, setIsImageVisible] = useState(false);

  return (
    <MotionOpacity>
      <div className="absolute right-0 sm:size-60 sm:translate-y-full">
        <Image src="/images/쪼이.svg" alt="logo" width={330} height={330} />
        <Image
          src="/images/code.webp"
          alt="logo"
          width={100}
          height={100}
          className={cn(
            "absolute top-0 right-0 transition-all duration-300",
            isImageVisible ? "opacity-100" : "opacity-0"
          )}
        />
      </div>
      <div className="flex flex-col p-4 mt-6">
        {/* 버튼 아이콘 */}
        <button
          onClick={() => setIsImageVisible(!isImageVisible)}
          className="py-1 transition-all duration-300 w-fit hover:scale-110"
        >
          <AnimatePresence mode="wait">
            {isImageVisible ? (
              <motion.div
                key="restart"
                initial={{ opacity: 0, rotate: 0 }}
                animate={{ opacity: 1, rotate: 0 }}
                exit={{ opacity: 0, rotate: -180 }}
                transition={{ duration: 0.3 }}
              >
                <VscDebugRestart className="text-gray-400" />
              </motion.div>
            ) : (
              <motion.div
                key="start"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <VscDebugStart className="text-green-600" />
              </motion.div>
            )}
          </AnimatePresence>
        </button>

        {/* 코드 블럭 */}
        <CodeBlockBox code={code} className="" />
      </div>
    </MotionOpacity>
  );
}

"use client";
import { motion } from "motion/react";
import { ReactNode, useEffect, useState } from "react";

export default function RandomQoute({
  arrayOfLines,
  addClasses,
  children,
}: {
  arrayOfLines: string[];
  addClasses?: string;
  children?: ReactNode;
}) {
  const [text, setText] = useState("");

  useEffect(() => {
    const randomQuote =
      arrayOfLines[Math.floor(Math.random() * arrayOfLines.length)];
    setText(randomQuote);
  }, [arrayOfLines]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.8 }}
      className={`text-lg text-primary font-semibold flex ${addClasses}`}
    >
      {children}
      {text}
    </motion.div>
  );
}

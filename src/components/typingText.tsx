"use client";

import { useState, useEffect } from "react";

interface TypingTextProps {
  words: string[];
  className?: string;
  speed?: number;
  delayBetweenWords?: number;
}

export default function TypingText({
  words,
  className = "",
  speed = 50,
  delayBetweenWords = 2000,
}: TypingTextProps) {
  const [displayText, setDisplayText] = useState("");
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    let timer: ReturnType<typeof setTimeout> | undefined;

    if (!isDeleting) {
      if (displayText.length < currentWord.length) {
        timer = setTimeout(() => {
          setDisplayText(currentWord.slice(0, displayText.length + 1));
        }, speed);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, delayBetweenWords);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(displayText.slice(0, -1));
        }, speed / 2);
      } else {
        timer = setTimeout(() => {
          setIsDeleting(false);
          setWordIndex((prev) => (prev + 1) % words.length);
        }, 0);
      }
    }

    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  }, [displayText, wordIndex, isDeleting, words, speed, delayBetweenWords]);

  return (
    <h2 className={className}>
      {displayText}
      <span className="animate-pulse">|</span>
    </h2>
  );
}

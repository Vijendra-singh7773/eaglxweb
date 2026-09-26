import React from 'react'

export default function EagleMark({ size = 42 }: { size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 100 100" fill="none" aria-label="Eaglxweb eagle logo">
    <path d="M50 17 43 27 20 13 29 34 5 28 23 48 9 51 32 61 22 72 43 69 50 87 57 69 78 72 68 61 91 51 77 48 95 28 71 34 80 13 57 27Z" fill="currentColor"/>
    <path d="M50 26 44 38 33 36 43 45 37 55 50 50 63 55 57 45 67 36 56 38Z" fill="#08090c"/>
    <path d="M48 39 56 40 64 45 56 48 51 55 46 48 38 45Z" fill="currentColor"/>
    <path d="M50 53 45 65 50 61 55 65Z" fill="currentColor"/>
    <path d="M38 69 31 81 45 76 50 91 55 76 69 81 62 69 55 72 50 68 45 72Z" fill="currentColor"/>
  </svg>
}
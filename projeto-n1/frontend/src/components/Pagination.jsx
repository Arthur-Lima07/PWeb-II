import React from 'react'

export default function Pagination({ page, pages, onChange }) {
  if (pages <= 1) return null

  const items = []
  for (let p = 1; p <= pages; p++) items.push(p)

  return (
    <div className="flex gap-2 mt-4 justify-center">
      {items.map(p => (
        <button
          key={p}
          onClick={() => onChange(p)}
          className={`px-3 py-1 rounded ${p === page
              ? 'bg-amber-500 text-[#8B4513]'
              : 'bg-[#8B4513] text-amber-200 hover:bg-amber-700'
            }`}
        >
          {p}
        </button>
      ))}
    </div>
  )
}

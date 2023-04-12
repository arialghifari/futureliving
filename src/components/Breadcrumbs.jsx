import Link from 'next/link'
import React from 'react'

export default function Breadcrumbs({ children }) {
  const split = children?.split(' / ')
  
  return (
    <div className="px-6 lg:px-20 bg-[#FAFAFA] py-5 flex gap-4">
      {split.map((item, index) =>
        split.length - 1 === index ? (
          <>
            <p className="text-secondary" key={item}>
              {item}
            </p>
          </>
        ) : (
          <>
            <p key={item}>{item}</p>
            <p>/</p>
          </>
        )
      )}
    </div>
  )
}

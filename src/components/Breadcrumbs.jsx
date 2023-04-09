import Link from 'next/link'
import React from 'react'

export default function Breadcrumbs() {
  return (
    <div className="px-6 lg:px-20 bg-[#FAFAFA] py-5 flex gap-4">
      <Link href="/cluster">Kluster</Link>
      <p>/</p>
      <Link href="/cluster/detail" className="text-secondary">
        Noxa
      </Link>
    </div>
  )
}

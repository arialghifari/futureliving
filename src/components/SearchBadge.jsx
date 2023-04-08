import Image from 'next/image'
import React from 'react'
import icCloseSmall from '../../public/icons/icCloseSmall.svg'

function SearchBadge({ children }) {
  return (
    <div className="bg-primary flex w-fit rounded-full pl-3 pr-2 py-[4px] gap-2 text-white text-sm">
      <p>{children}</p>
      <button>
        <Image src={icCloseSmall} alt="Close" />
      </button>
    </div>
  )
}

export default SearchBadge

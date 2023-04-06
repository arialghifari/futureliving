import React from 'react'
import Button from '../Button'
import Input from '../Input'
import Image from 'next/image'
import icArrowShowSearch from '../../../public/icons/icArrowShowSearch.svg'

export default function SearchFormSecondary({ className }) {
  const [showFullSearch, setShowFullSearch] = React.useState(true)

  return (
    <form
      className={`search px-6 py-8 lg:py-24 lg:px-20 items-center justify-center ${className}`}
    >
      <div className="search grid grid-cols-1 lg:grid-cols-12 p-6 gap-3 w-full z-40 rounded-lg bg-white">
        <Input
          type="text"
          placeholder="Cari"
          className="lg:text-base lg:col-span-4"
        />
        <Input
          type="number"
          placeholder="Min. Harga"
          className="lg:text-base hidden lg:inline lg:col-span-2"
        />
        <Input
          type="number"
          placeholder="Max. Harga"
          className="lg:text-base hidden lg:inline lg:col-span-2"
        />
        <button
          className="flex items-center gap-2 justify-center p-2 lg:hidden"
          onClick={() => setShowFullSearch((prev) => !prev)}
          type="button"
        >
          <Image
            src={icArrowShowSearch}
            alt="show search"
            className={`${showFullSearch ? 'rotate-0' : 'rotate-180'}`}
          />
          Tampilkan Lebih {showFullSearch ? 'Banyak' : 'Sedikit'} Filter
        </button>
        <select
          className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base hidden lg:inline lg:col-span-2"
          required
          defaultValue=""
        >
          <option value="" disabled>
            Tipe Property
          </option>
          <option value="Classic">Classic</option>
          <option value="Standard">Standard</option>
          <option value="Premium">Premium</option>
        </select>
        <Button type="submit" className="lg:text-base lg:col-span-2">
          Cari
        </Button>
      </div>
    </form>
  )
}

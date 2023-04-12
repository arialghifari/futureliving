import React from 'react'
import Button from '../Button'
import Input from '../Input'
import Image from 'next/image'
import icArrowShowSearch from '../../../public/icons/icArrowShowSearch.svg'
import Link from 'next/link'

export default function SearchFormSidebar({ className }) {
  const [isFullSearch, setIsFullSearch] = React.useState(false)

  return (
    <form className={`search items-center justify-center ${className}`}>
      <p className="text-xl font-bold mb-3 hidden lg:block">Pencarian</p>
      <div className="search gap-3 w-full z-40 rounded-lg bg-white grid grid-cols-2 p-6 lg:p-0">
        <Input
          type="text"
          placeholder="Cari"
          className="lg:text-base col-span-full"
        />
        <Input
          type="number"
          placeholder="Min. Harga"
          className="lg:text-base lg:inline col-span-1 lg:col-span-full"
        />
        <Input
          type="number"
          placeholder="Max. Harga"
          className="lg:text-base lg:inline col-span-1 lg:col-span-full"
        />

        {isFullSearch && (
          <>
            <select
              className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base lg:inline col-span-1 lg:col-span-full"
              defaultValue=""
            >
              <option value="" disabled>
                Tipe Property
              </option>
              <option value="Classic">Classic</option>
              <option value="Premium">Premium</option>
            </select>

            <select
              className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base lg:inline col-span-1 lg:col-span-full"
              defaultValue=""
            >
              <option value="" disabled>
                Kamar Tidur
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <select
              className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base lg:inline col-span-1 lg:col-span-full"
              defaultValue=""
            >
              <option value="" disabled>
                Kamar Mandi
              </option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
            </select>

            <select
              className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base lg:inline col-span-1 lg:col-span-full"
              defaultValue=""
            >
              <option value="" disabled>
                Area Properti
              </option>
              <option value="250-500 ft3">250-500 ft3</option>
              <option value="500-750 ft3">500-750 ft3</option>
              <option value="750-1000 ft3">750-1000 ft3</option>
            </select>
          </>
        )}

        <button
          className="flex items-center gap-2 justify-center p-2 w-full col-span-full"
          onClick={() => setIsFullSearch((prev) => !prev)}
          type="button"
        >
          <Image
            src={icArrowShowSearch}
            alt="show search"
            className={`${isFullSearch ? 'rotate-180' : 'rotate-0'}`}
          />
          Tampilkan Lebih {isFullSearch ? 'Sedikit' : 'Banyak'} Filter
        </button>

        <Link href="/search" className="col-span-full">
          <Button type="submit" className="lg:text-base w-full h-full">
            Cari
          </Button>
        </Link>
      </div>
    </form>
  )
}

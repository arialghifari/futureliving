import React from 'react'
import Button from '../Button'
import Input from '../Input'
import Image from 'next/image'
import icArrowShowSearch from '../../../public/icons/icArrowShowSearch.svg'
import useWindowSize from '@/hooks/useWindowSize'
import Link from 'next/link'

export default function SearchFormSecondary({ className }) {
  const [isFullSearch, setIsFullSearch] = React.useState(false)
  const { width } = useWindowSize()

  React.useEffect(() => {
    if (width >= 1024) {
      setIsFullSearch(true)
    } else {
      setIsFullSearch(false)
    }
  }, [width])

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
        {isFullSearch && (
          <>
            <Input
              type="number"
              placeholder="Min. Harga"
              className="lg:text-base lg:inline lg:col-span-2"
            />
            <Input
              type="number"
              placeholder="Max. Harga"
              className="lg:text-base lg:inline lg:col-span-2"
            />

            <select
              className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base lg:inline lg:col-span-2"
              defaultValue=""
            >
              <option value="" disabled>
                Tipe Property
              </option>
              <option value="Classic">Classic</option>
              <option value="Premium">Premium</option>
            </select>
          </>
        )}

        <button
          className="flex items-center gap-2 justify-center p-2 lg:hidden"
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

        <Link href="/search" className="lg:col-span-2">
          <Button
            type="submit"
            className="lg:text-base lg:col-span-2 w-full h-full"
          >
            Cari
          </Button>
        </Link>
      </div>
    </form>
  )
}

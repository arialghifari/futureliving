import Link from 'next/link'
import Button from '../Button'
import Input from '../Input'
import React from 'react'
import useWindowSize from '@/hooks/useWindowSize'
import Image from 'next/image'
import icArrowShowSearch from '../../../public/icons/icArrowShowSearch.svg'

export default function SearchForm() {
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
    <form className="search grid grid-cols-2 lg:grid-cols-12 p-6 gap-3 lg:mx-20 lg:bg-white rounded-lg z-10 lg:shadow-lg lg:border lg:-translate-y-12 relative">
      <Input
        type="text"
        placeholder="Cari"
        className="lg:text-base lg:w-full col-span-full lg:col-span-4"
      />
      <Input
        type="number"
        placeholder="Min. Harga"
        className="lg:text-base lg:col-span-2"
      />
      <Input
        type="number"
        placeholder="Max. Harga"
        className="lg:text-base lg:col-span-2"
      />

      {isFullSearch && (
        <select
          className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base col-span-full lg:col-span-2 lg:inline"
          defaultValue=""
        >
          <option value="" disabled>
            Tipe Property
          </option>
          <option value="Classic">Classic</option>
          <option value="Premium">Premium</option>
        </select>
      )}

      <button
        className="flex items-center gap-2 justify-center p-2 lg:hidden col-span-2"
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

      <Link href="/search" className="col-span-full lg:col-span-2">
        <Button
          type="submit"
          className="lg:text-base lg:col-span-2 w-full h-full"
        >
          Cari
        </Button>
      </Link>
    </form>
  )
}

import React from 'react'
import PropertyCard from '@/components/Card/PropertyCard'
import { properties } from '@/data/property'
import SearchFormSidebar from '@/components/SearchForm/SearchFormSidebar'
import SearchBadge from '@/components/SearchBadge'

const Search = () => {
  return (
    <div className="lg:px-20 gap-7 grid grid-cols-12 lg:mt-16">
      <div
        className={`h-fit bg-white border-0 lg:border shadow-md px-6 py-8 lg:p-5 rounded-none lg:rounded-lg col-span-full lg:col-span-3 bg-[url('/largeBanner.jpg')] lg:bg-none`}
      >
        <SearchFormSidebar />
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-7 w-full col-span-full lg:col-span-9 px-5 lg:px-0">
        <div className="col-span-full">
          <p className="text-text/60 text-xl font-bold mb-3">
            Menampilkan 10 Perumahan
          </p>
          <SearchBadge>Premium</SearchBadge>
        </div>
        {properties.map((property) => (
          <PropertyCard
            key={property.id}
            img={property.img}
            name={property.name}
            specs={property.specs}
            price={property.price}
          />
        ))}
      </div>
    </div>
  )
}

Search.layout = 'default'
export default Search

import ClusterCard from '@/components/Card/ClusterCard'
import SearchFormSecondary from '@/components/SearchForm/SearchFormSecondary'
import CardClusterTitle from '@/components/Title/CardClusterTitle'
import largeBanner from '../../../public/largeBanner.jpg'
import kluster from '@/data/kluster'
import React from 'react'
import PropertyCard from '@/components/Card/PropertyCard'
import { bestProperties, newProperties } from '@/data/property'

const Kluster = () => {
  return (
    <div>
      <div
        className="relative h-auto"
        style={{
          background: `no-repeat center / cover url(${largeBanner.src})`,
        }}
      >
        <SearchFormSecondary className="h-full flex items-center shadow-lg" />
      </div>

      {/* Body */}
      <div className="px-6 lg:px-20">
        <div>
          <CardClusterTitle
            title="JELAJAHI CLUSTER KAMI"
            subtitle="Temukan properti impian Anda untuk tinggal di lingkungan Anda."
            secondary
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
            {kluster.map((item) => (
              <ClusterCard
                key={item.id}
                name={item.name}
                type={item.type}
                price={item.price}
                img={item.img}
              />
            ))}
          </div>
        </div>

        <div>
          <CardClusterTitle
            title="PROPERTI TERBAIK KAMI"
            subtitle="Lihat properti yang disorot saat ini terdaftar."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
            {bestProperties.map((property) => (
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

        <div>
          <CardClusterTitle
            title="PROPERTI TERBARU KAMI"
            subtitle="Kunjungi salah satu model properti kami dan lihat keunggulan kami."
          />
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-7">
            {newProperties.map((property) => (
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
      </div>
    </div>
  )
}

Kluster.layout = 'default'
export default Kluster

import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import noxaPremiumDetail from '../../../public/noxaPremiumDetail.jpg'
import Image from 'next/image'

const PropertyDetail = () => {
  return (
    <div>
      <Breadcrumbs>Kluster / Noxa / Noxa Premium 1</Breadcrumbs>
      <div className="grid grid-cols-2 bg-red-400 h-[550px]">
        <div>
          <Image
            src={noxaPremiumDetail}
            alt="Noxa Premium"
            className="w-full h-[550px] object-cover"
          />
        </div>
        <div className="p-16">
          <p>NOXA</p>
          <p>PREMIUM 1</p>
          <p>8 x 13</p>
        </div>
      </div>
    </div>
  )
}

PropertyDetail.layout = 'default'
export default PropertyDetail

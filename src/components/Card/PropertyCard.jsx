import Image from 'next/image'
import Link from 'next/link'
import icBed from '../../../public/icons/icBed.svg'
import icBath from '../../../public/icons/icBath.svg'
import icSquare from '../../../public/icons/icSquare.svg'

export default function PropertyCard({ name, price, img, specs }) {
  return (
    <Link
      href="/properti/detail"
      className="border border-zinc-300 hover:border-zinc-500 rounded-lg"
      title={name}
    >
      <Image
        className="image h-40 lg:h-52 rounded-t-lg w-full object-cover"
        src={img}
        alt={name}
        width={300}
        height={300}
      />
      <div className="p-3 lg:p-5 flex flex-col gap-4 lg:gap-8">
        <p className="text-lg lg:text-xl font-bold clamp">{name}</p>

        <div className="flex gap-3 lg:gap-6 flex-wrap text-sm lg:text-base">
          <div className="flex gap-2">
            <Image src={icBed} alt="Bedroom" />
            <p>{specs.bedroom}</p>
          </div>
          <div className="flex gap-2">
            <Image src={icBath} alt="Bathroom" />
            <p>{specs.bathroom}</p>
          </div>
          <div className="flex gap-2">
            <Image src={icSquare} alt="Land Area" />
            <p>{specs.landArea} ft3</p>
          </div>
        </div>
        <p className="font-bold text-base lg:text-xl">
          Rp {Number(price).toLocaleString('ID')}
        </p>
      </div>
    </Link>
  )
}

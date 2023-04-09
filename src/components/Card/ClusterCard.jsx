import Image from 'next/image'
import Link from 'next/link'

const ClusterCard = ({ name, type, price, img }) => {
  return (
    <Link
      href="/cluster/detail"
      className="border border-zinc-300 hover:border-zinc-500 rounded-lg flex flex-col"
    >
      <div>
        <div className="logo p-2 flex justify-center items-center">
          <div
            className="w-8 lg:w-14 h-9 lg:h-16"
            style={{
              background: `no-repeat center / contain url(${img.logo}`,
            }}
          ></div>
        </div>
        <Image
          src={img.thumbnail}
          className="image h-32 lg:h-64 w-full object-cover"
          alt={name}
          width={300}
          height={300}
        />
      </div>
      <div className="p-3 lg:p-5 h-full flex flex-col justify-between">
        <div>
          <p className="text-xl font-bold">{name}</p>
          <p className="text-[#BFBFBF] mt-1">{type}</p>
        </div>
        <p className="mt-6 lg:mt-8 text-base lg:text-xl">
          Mulai <strong>Rp {Number(price).toLocaleString('ID')}</strong>
        </p>
      </div>
    </Link>
  )
}

export default ClusterCard

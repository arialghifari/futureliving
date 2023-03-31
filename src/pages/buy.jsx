import ClusterCard from '@/components/Card/ClusterCard'
import CardClusterTitle from '@/components/Title/CardClusterTitle'

const Buy = () => {
  return (
    <>
      {/* Search */}
      <div
        id="search"
        className="bg-gradient-to-b from-[#0E1D70] to-[#4A74EA] h-90 pt-16 md:pt-24 px-6 flex justify-center items-center"
      >
        <div className="grid grid-cols-1 gap-4 pt-8 md:gap-2 md:grid-cols-5 w-full">
          <input
            className="input rounded-xl md:text-xs"
            name="search"
            placeholder="Cari"
          />
          <input
            className="input rounded-xl hidden md:block md:text-xs"
            name="search"
            placeholder="Harga Minimal"
          />
          <input
            className="input rounded-xl hidden md:block md:text-xs"
            name="search"
            placeholder="Harga Maximal"
          />
          <select
            className="select w-full rounded-xl hidden md:block md:text-xs"
            defaultValue=""
          >
            <option value="" disabled>
              Jenis Cluster
            </option>
            <option>Han Solo</option>
            <option>Greedo</option>
          </select>
          <button className="btn bg-secondary hover:bg-secondary rounded-xl md:text-xs">
            Cari
          </button>
          <div className="text-center text-white md:hidden">
            Pencarian Lanjutan
          </div>
        </div>
      </div>

      {/* Body */}
      <div>
        <div>
          <CardClusterTitle
            title="JELAJAHI CLUSTER KAMI"
            subtitle="Temukan properti impian Anda untuk tinggal di lingkungan Anda."
            secondary
          />
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2 gap-2 lg:gap-4 p-2 lg:p-6">
            {[...Array(4)].map((x, i) => (
              <div key={i}>
                <ClusterCard />
              </div>
            ))}
          </div>
        </div>
        <div>
          <CardClusterTitle
            title="PROPERTI TERBAIK KAMI"
            subtitle="Lihat properti terbaik kami."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2 gap-2 lg:gap-4 p-2 lg:p-6">
            {[...Array(4)].map((x, i) => (
              <div key={i}>
                <ClusterCard />
              </div>
            ))}
          </div>
        </div>
        <div>
          <CardClusterTitle
            title="PROPERTI TERBARU KAMI"
            subtitle="Lihat properti terbaik kami."
          />
          <div className="grid grid-cols-2 md:grid-cols-4 md:gap-2 gap-2 lg:gap-4 p-2 lg:p-6">
            {[...Array(4)].map((x, i) => (
              <div key={i}>
                <ClusterCard />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

Buy.layout = 'default'
export default Buy

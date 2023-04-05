import ClusterCard from '@/components/Card/ClusterCard'
import SearchFormSecondary from '@/components/SearchForm/SearchFormSecondary'
import CardClusterTitle from '@/components/Title/CardClusterTitle'
import largeBanner from '../../public/largeBanner.jpg'
import kluster from '@/data/kluster'

const Buy = () => {
  return (
    <div>
      <div
        className="relative h-auto"
        style={{ backgroundImage: `url(${largeBanner.src})` }}
      >
        <SearchFormSecondary className="h-full flex items-center shadow-lg" />
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
            {kluster.map((item, index) => (
              <div key={index}>
                <ClusterCard
                  name={item.name}
                  type={item.type}
                  price={item.price}
                />
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
    </div>
  )
}

Buy.layout = 'default'
export default Buy

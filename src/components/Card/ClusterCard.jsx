const ClusterCard = ({ name, type, price }) => (
  <div className="border text-[0.6rem] md:text-xs lg:text-base rounded-xl">
    <div className="logo p-2 flex justify-center items-center">
      <div className="bg-gray-300 block w-8 h-8 md:w-12 md:h-12 lg:w-14 lg:h-14"></div>
    </div>
    <div className="image h-32 md:h-36 lg:h-52 xl:h-72 bg-gray-300"></div>
    <div className="content p-1 lg:p-4">
      <div className="text-[0.9rem] md:text-[1.1rem] lg:text-2xl font-semibold py-1">
        {name}
      </div>
      <div className="text-[0.7rem] md:text-[0.8rem] lg:text-lg py-1">
        {type}
      </div>
      <div className="text-[0.5rem] lg:text-sm py-1">
        Mulai dari <strong>Rp. {Number(price).toLocaleString('ID')}</strong>
      </div>
    </div>
  </div>
)

export default ClusterCard

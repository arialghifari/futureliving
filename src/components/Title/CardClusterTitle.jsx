const CardClusterTitle = ({ title, subtitle, secondary }) => (
  <div className="text-left md:text-center p-2 pt-8">
    <div className="text-lg lg:text-2xl font-bold">{title}</div>
    <div
      className={`${
        secondary ? 'text-secondary' : 'text-[#BFBFBF]'
      } text-xs lg:text-lg py-2`}
    >
      {subtitle}
    </div>
  </div>
)

export default CardClusterTitle

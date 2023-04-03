export default function LineTitle({ children }) {
  return (
    <div className="relative flex justify-center text-center">
      <div className="w-full absolute h-full flex items-center">
        <div className="border lg:border-2 border-text w-full"></div>
      </div>
      <p className="z-10 bg-white w-fit px-4 mx-8 text-text font-bold text-xl lg:text-3xl">
        {children}
      </p>
    </div>
  )
}

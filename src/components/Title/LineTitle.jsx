export default function LineTitle({ children, className }) {
  return (
    <div className="relative flex justify-center text-center">
      <div className="w-full absolute h-full flex items-center">
        <div className="border border-primary w-full"></div>
      </div>
      <p className="z-10 bg-white w-fit px-4 mx-8 text-primary font-bold text-xl">
        {children}
      </p>
    </div>
  )
}

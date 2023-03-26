export default function Input({ type, placeholder, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-lg border border-[#BFBFBF] py-2.5 px-4 text-sm w-full bg-white ${className}`}
    />
  )
}

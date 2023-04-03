export default function Input({ type, placeholder, className }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      className={`rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full bg-white ${className}`}
    />
  )
}

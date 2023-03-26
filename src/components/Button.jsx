export default function Button({ children, className }) {
  return (
    <button
      className={`font-semibold bg-secondary hover:bg-secondary/90 text-sm p-3 rounded-lg text-white ${className}`}
    >
      {children}
    </button>
  )
}

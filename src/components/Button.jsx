export default function Button({ children, className, onClick }) {
  return (
    <button
      className={`font-semibold bg-primary hover:bg-primary/95 text-sm p-3 rounded-lg text-white ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  )
}

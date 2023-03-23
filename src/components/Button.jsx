export default function Button({ children }) {
  return (
    <button className="font-semibold bg-secondary text-sm p-3 rounded-lg text-[white]">
      {children}
    </button>
  )
}

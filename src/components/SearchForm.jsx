import Button from './Button'
import Input from './Input'

export default function SearchForm() {
  return (
    <form className="search p-6 flex flex-col gap-6">
      <Input type="text" placeholder="Cari" />
      <div className="flex gap-2.5">
        <Input type="number" placeholder="Min. Harga" />
        <Input type="number" placeholder="Max. Harga" />
      </div>
      <select
        className="rounded-lg border border-[#BFBFBF] py-2.5 px-4 text-sm w-full invalid:text-gray-400"
        required
        placeholder="Car Type"
      >
        <option value="" disabled selected>
          Tipe Property
        </option>
        <option value="Classic">Classic</option>
        <option value="Premium">Premium</option>
      </select>
      <Button>Cari</Button>
    </form>
  )
}

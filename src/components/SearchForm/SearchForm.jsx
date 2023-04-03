import Button from '../Button'
import Input from '../Input'

export default function SearchForm() {
  return (
    <form className="search p-6 flex flex-col gap-6 lg:mx-20 lg:bg-white lg:flex-row rounded-lg lg:gap-3 lg:-translate-y-12 z-40 flex-grow lg:shadow-lg lg:border">
      <Input
        type="text"
        placeholder="Cari"
        className="lg:text-base lg:w-full"
      />
      <div className="flex gap-3">
        <Input
          type="number"
          placeholder="Min. Harga"
          className="lg:w-56 lg:text-base"
        />
        <Input
          type="number"
          placeholder="Max. Harga"
          className="lg:w-56 lg:text-base"
        />
      </div>
      <select
        className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:w-56 lg:text-base"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Tipe Property
        </option>
        <option value="Classic">Classic</option>
        <option value="Premium">Premium</option>
      </select>
      <Button className="lg:w-56 lg:text-base">Cari</Button>
    </form>
  )
}

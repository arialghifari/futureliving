import Button from '../Button'
import Input from '../Input'

export default function SearchForm() {
  return (
    <form className="search grid grid-cols-2 lg:grid-cols-12 p-6 gap-3 lg:mx-20 lg:bg-white rounded-lg z-10 lg:shadow-lg lg:border lg:-translate-y-12 relative">
      <Input
        type="text"
        placeholder="Cari"
        className="lg:text-base lg:w-full col-span-full lg:col-span-4"
      />
      <Input
        type="number"
        placeholder="Min. Harga"
        className="lg:text-base lg:col-span-2"
      />
      <Input
        type="number"
        placeholder="Max. Harga"
        className="lg:text-base lg:col-span-2"
      />
      <select
        className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:text-base col-span-full lg:col-span-2"
        required
        defaultValue=""
      >
        <option value="" disabled>
          Tipe Property
        </option>
        <option value="Classic">Classic</option>
        <option value="Standard">Standard</option>
        <option value="Premium">Premium</option>
      </select>
      <Button className="lg:text-base col-span-full lg:col-span-2">Cari</Button>
    </form>
  )
}

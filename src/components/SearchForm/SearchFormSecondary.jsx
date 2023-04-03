import Button from '../Button'
import Input from '../Input'

export default function SearchFormSecondary() {
  return (
    <form className="search px-6 py-8 flex flex-col gap-6 w-full lg:flex-row lg:gap-3 z-40 flex-grow lg:px-20 border-t border-t-[#546fd1] bg-gradient-to-b from-[#2D4AAF] to-[#4A74EA]">
      <Input
        type="text"
        placeholder="Cari"
        className="lg:text-base lg:w-full"
      />
      <div className="gap-3 hidden lg:flex">
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
        className="rounded-lg border border-[#BFBFBF] py-3 px-4 text-sm w-full invalid:text-gray-400 bg-white lg:w-56 lg:text-base hidden lg:inline"
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

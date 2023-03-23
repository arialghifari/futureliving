import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import hamburgerMenu from '../../public/hamburgerMenu.svg'
import icGlobe from '../../public/icGlobe.svg'

export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false)

  function toggleMenu() {
    setShowMenu((prev) => !prev)
  }

  return (
    <div className="relative">
      <div className="bg-blue-500 p-6 flex items-center justify-between bg-gradient-to-b from-[#0E1D70] to-[#2D4AAF]">
        <Image src={logo} alt="Logo" />
        <button onClick={toggleMenu}>
          <Image src={hamburgerMenu} alt="Hamburger menu" />
        </button>
      </div>

      {showMenu && (
        <div className="absolute top-[93px] left-0 py-3 px-6 bg-red-200 w-full flex flex-col gap-4 bg-gradient-to-b from-[#0E1D70] to-[#2D4AAF] text-white">
          <button className="text-end hover:text-[#ED9B2D]">Home</button>
          <button className="text-end hover:text-[#ED9B2D]">Buy</button>
          <button className="text-end hover:text-[#ED9B2D]">About</button>
          <button className="text-end hover:text-[#ED9B2D]">Contact</button>
          <button className="text-end hover:text-[#ED9B2D]">Support</button>
          <button className="text-end hover:text-[#ED9B2D] flex items-center gap-1 justify-end">
            <Image src={icGlobe} alt="Icon globe" />
            English
          </button>
        </div>
      )}
    </div>
  )
}

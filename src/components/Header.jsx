import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.svg'
import hamburgerMenu from '../../public/hamburgerMenu.svg'
import icGlobe from '../../public/icons/icGlobe.svg'
import useWindowSize from '@/hooks/useWindowSize'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Header() {
  const [showMenu, setShowMenu] = React.useState(false)
  const { width } = useWindowSize()
  const router = useRouter()

  function toggleMenu() {
    setShowMenu((prev) => !prev)
  }

  React.useEffect(() => {
    if (width >= 1024) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }, [width])

  return (
    <div className="relative lg:flex">
      <div className="bg-blue-500 p-6 lg:px-20 flex items-center justify-between bg-gradient-to-b from-[#0E1D70] to-[#2D4AAF]">
        <Image src={logo} alt="Logo" className="w-32 lg:w-auto" />
        {width < 1024 && (
          <button onClick={toggleMenu}>
            <Image src={hamburgerMenu} alt="Hamburger menu" />
          </button>
        )}
      </div>

      {showMenu && (
        <div
          className={`absolute lg:static top-[84px] left-0 px-6 lg:pr-20 py-4 bg-red-200 w-full flex flex-col gap-4 bg-gradient-to-b from-[#0E1D70] to-[#2D4AAF] text-white lg:flex-row lg:text-base`}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:justify-center w-full lg:gap-6 lg:items-center">
            <Link
              href={'/'}
              className={`text-end hover:text-[#ED9B2D] ${
                router?.pathname === '/' ? 'text-[#ED9B2D]' : ''
              }`}
            >
              Home
            </Link>
            <Link
              href={'/buy'}
              className={`text-end hover:text-[#ED9B2D] ${
                router?.pathname?.includes('/buy') ? 'text-[#ED9B2D]' : ''
              }`}
            >
              Buy
            </Link>
            <Link href={'#'} className="text-end hover:text-[#ED9B2D]">
              About
            </Link>
            <Link href={'#'} className="text-end hover:text-[#ED9B2D]">
              Contact
            </Link>
            <Link href={'#'} className="text-end hover:text-[#ED9B2D]">
              Support
            </Link>
          </div>

          <Link
            href={'#'}
            className="text-end hover:text-[#ED9B2D] flex items-center gap-1 justify-end"
          >
            <Image src={icGlobe} alt="Icon globe" />
            English
          </Link>
        </div>
      )}
    </div>
  )
}

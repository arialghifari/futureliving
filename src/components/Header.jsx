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

  function handleLink() {
    width < 1024 && setShowMenu(false)
  }

  React.useEffect(() => {
    if (width >= 1024) {
      setShowMenu(true)
    } else {
      setShowMenu(false)
    }
  }, [width])

  return (
    <div className="lg:flex sticky top-0 border-b-2 z-50">
      <div className="px-6 lg:pl-20 lg:pr-0 flex items-center justify-between bg-white h-16">
        <Link href="/">
          <Image src={logo} alt="Logo" />
        </Link>
        {width < 1024 && (
          <button onClick={toggleMenu}>
            <Image src={hamburgerMenu} alt="Hamburger menu" />
          </button>
        )}
      </div>

      {showMenu && (
        <div
          className={`absolute lg:static top-[64px] left-0 px-6 lg:pr-20 py-4 flex w-full lg:flex-1 flex-col gap-4 bg-white text-text lg:flex-row lg:text-base`}
        >
          <div className="flex flex-col lg:flex-row gap-4 lg:justify-center w-full lg:gap-6 lg:items-center">
            <Link
              href="/"
              className={`text-end hover:text-primary ${
                router?.pathname === '/' ? 'text-primary font-semibold' : ''
              }`}
              onClick={handleLink}
            >
              Beranda
            </Link>
            <Link
              href="/kluster"
              className={`text-end hover:text-primary ${
                router?.pathname?.includes('/kluster')
                  ? 'text-primary font-semibold'
                  : ''
              }`}
              onClick={handleLink}
            >
              Kluster
            </Link>
            <Link
              href="#"
              className="text-end hover:text-primary"
              onClick={handleLink}
            >
              Tentang
            </Link>
            <Link
              href="#"
              className="text-end hover:text-primary"
              onClick={handleLink}
            >
              Hubungi
            </Link>
            <Link
              href="#"
              className="text-end hover:text-primary"
              onClick={handleLink}
            >
              Bantuan
            </Link>
          </div>

          <Link
            href="#"
            className="text-end flex items-center gap-1 justify-end hover:text-primary"
          >
            <Image src={icGlobe} alt="Icon globe" />
            Indonesia
          </Link>
        </div>
      )}
    </div>
  )
}

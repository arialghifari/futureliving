import React from 'react'
import icArrowBack from '../../public/icons/icBackArrow.svg'
import Image from 'next/image'

export default function Modal({ children, setIsOpen }) {
  return (
    <div
      className="h-screen bg-text/30 fixed top-0 flex justify-center items-center w-full"
      style={{ zIndex: 50 }}
      onClick={() => setIsOpen(false)}
    >
      <div
        className="bg-white p-5 rounded-lg m-6 lg:m-20 overflow-auto max-h-[90vh] h-fit lg:min-w-[550px]"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 w-full">
          <button onClick={() => setIsOpen(false)}>
            <Image src={icArrowBack} alt="Back" />
          </button>
        </div>

        {children}
      </div>
    </div>
  )
}

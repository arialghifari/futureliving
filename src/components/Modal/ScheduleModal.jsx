import React from 'react'
import Calendar from 'react-calendar'
import Input from '../Input'
import Modal from '../Modal'

export default function ScheduleModal({ setIsOpen }) {
  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="text-sm flex gap-6 flex-col lg:flex-row">
        <div className="flex flex-col lg:w-[300px]">
          <label htmlFor="nama">Nama*</label>
          <Input placeholder="Nama Anda" id="nama" className="mt-1 mb-3">
            Nama
          </Input>

          <label htmlFor="email">Email*</label>
          <Input placeholder="Email Anda" id="email" className="mt-1 mb-3">
            Email
          </Input>

          <label htmlFor="pesan">Pesan</label>
          <textarea
            id="pesan"
            name=""
            rows="5"
            className="p-2 bg-white border rounded-lg border-[#BFBFBF] py-3 px-4 text-sm mt-1 mb-3"
            placeholder="Tuliskan Pesan"
          ></textarea>
        </div>

        <div>
          <p className="font-bold text-lg mb-3">Pilih tanggal dan waktu</p>
          <Calendar />
          <div className="flex gap-5 my-4">
            <p className="flex items-center gap-1">
              <div className="w-5 h-5 bg-secondary/50 rounded-full"></div>
              Tersedia
            </p>
            <p className="flex items-center gap-1">
              <div className="w-5 h-5 bg-secondary rounded-full"></div>
              Tanggal Terpilih
            </p>
          </div>
          <p>
            Jadwal anda {''}
            {new Date().toLocaleDateString('id', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
            {''} jam 09:00.
          </p>
        </div>

        <div className="flex gap-2 flex-col font-semibold w-full lg:w-56">
          <button className="w-full border-2 border-secondary bg-secondary rounded-lg p-2">
            09:00
          </button>
          <button className="w-full border-2 border-secondary rounded-lg p-2">
            10:00
          </button>
          <button className="w-full border-2 border-secondary rounded-lg p-2">
            11:00
          </button>
          <button className="w-full border-2 border-secondary rounded-lg p-2">
            14:00
          </button>
          <button className="w-full border-2 border-secondary rounded-lg p-2">
            15:00
          </button>
          <button className="w-full border-2 border-secondary rounded-lg p-2">
            16:00
          </button>
        </div>
      </div>
    </Modal>
  )
}

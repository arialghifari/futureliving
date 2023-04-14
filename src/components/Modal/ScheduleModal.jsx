import React from 'react'
import Calendar from 'react-calendar'
import Input from '../Input'
import Modal from '../Modal'
import Button from '../Button'

export default function ScheduleModal({ setIsOpen }) {
  const [time, setTime] = React.useState('')
  const [date, setDate] = React.useState(new Date())
  const scheduleTime = ['09:00', '10:00', '11:00', '14:00', '15:00', '16:00']

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

        <div className="grid grid-cols-5 gap-6">
          <div className="col-span-full lg:col-span-3">
            <p className="font-bold text-lg mb-3">Pilih tanggal dan waktu</p>
            <Calendar onChange={setDate} value={date} />
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
              {date.toLocaleDateString('id', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
              {''} jam {time || '--'}.
            </p>
          </div>

          <div className="flex gap-3 flex-col font-semibold w-full col-span-full lg:col-span-2">
            {scheduleTime.map((item) => (
              <button
                key={item}
                className={`w-full border-2 border-secondary rounded-lg p-2 ${
                  time === item ? 'bg-secondary' : ''
                }`}
                onClick={(e) => setTime(e.target.innerText)}
              >
                {item}
              </button>
            ))}
          </div>

          <Button className="col-span-full">Atur Jadwal</Button>
        </div>
      </div>
    </Modal>
  )
}

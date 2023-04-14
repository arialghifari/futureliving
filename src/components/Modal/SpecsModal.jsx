import React from 'react'
import Modal from '../Modal'

export default function SpecsModal({ setIsOpen }) {
  return (
    <Modal setIsOpen={setIsOpen}>
      <div className="text-sm flex gap-4 flex-col">
        <p className="text-xl font-bold">Spesifikasi Bangunan</p>

        <p>Pondasi: Tiang Poncang</p>
        <p>Struktur: Beton Bertulang</p>
        <p>Dinding: Bata Merah dan Double Dinding Antar Rumah</p>

        <div>
          <p>Lantai:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Lantai Utama Homogenous Tile 60 x 60</li>
            <li>KM/ WC Keramik Tile 50x50 & 25x50</li>
            <li>Carport Keramik Tile 30x30</li>
          </ul>
        </div>

        <p>Kusen: Kusen Alumunium Powder Coating</p>
        <p>Daun Pintu: Flush door dan PVC</p>

        <div>
          <p>Plafon:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Rangka Hollow Galvanis SNI</li>
            <li>Interior Gypsum Boord</li>
            <li>Exterior dan KM/WC: Gypsum WR</li>
          </ul>
        </div>

        <div>
          <p>Atap:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Rangka Atap Baja Ringan</li>
            <li>Penutup Genteng Bitumen</li>
          </ul>
        </div>

        <p>Kanopi Carport: Rangka Besi dan Penutup Kaca</p>
        <p>Sanitair: TOTO atau setara</p>
        <p>Instalasi Air: Pipa PVC</p>

        <div>
          <p>Listrik:</p>
          <ul className="list-disc list-inside ml-2">
            <li>Kabel NYM / NYA</li>
            <li>
              Daya Listrik:
              <ul className="list-decimal list-inside ml-5">
                <li>Tipe 7x15 (2200 VA)</li>
                <li>Tipe 8x13 (3500 VA)</li>
                <li>Tipe 9x15 (3500 VA)</li>
                <li>Tipe 10x13 (4000 VA)</li>
              </ul>
            </li>
          </ul>
        </div>

        <p>Pagar: Tanpa Pagar Depan dan Pagar Samping</p>

        <p className="text-xl font-bold mt-4">Biaya Bulanan</p>

        <p>Biaya Air (PDAM): Rp. 300.000</p>
        <div>
          <p>Biaya Daya Listrik:</p>
          <ul className="list-decimal list-inside ml-2">
            <li>Tipe 7x15 (2200 VA): Rp. 800.000</li>
            <li>Tipe 8x13 (3500 VA): Rp. 850.000</li>
            <li>Tipe 9x15 (3500 VA): Rp. 850.000</li>
            <li>Tipe 10x13 (4000 VA): Rp. 900.000</li>
          </ul>
        </div>

        <p>Biaya Keamanan: Rp. 100.000</p>
        <p>Biaya Kebersihan: Rp. 100.000</p>
      </div>
    </Modal>
  )
}

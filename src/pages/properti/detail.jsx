import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import noxaPremiumDetail from '../../../public/noxaPremiumDetail.jpg'
import Image from 'next/image'
import homeLayout from '../../../public/homeLayout.jpg'
import icBed from '../../../public/icons/icBed.svg'
import icBath from '../../../public/icons/icBath.svg'
import icSquare from '../../../public/icons/icSquare.svg'
import fasilitas1 from '../../../public/fasilitas1.jpg'
import fasilitas2 from '../../../public/fasilitas2.jpg'
import fasilitas3 from '../../../public/fasilitas3.jpg'
import fasilitas4 from '../../../public/fasilitas4.jpg'
import gallery1 from '../../../public/gallery1.jpg'
import gallery2 from '../../../public/gallery2.jpg'
import gallery3 from '../../../public/gallery3.jpg'
import gallery4 from '../../../public/gallery4.jpg'
import gallery5 from '../../../public/gallery5.jpg'
import chart from '../../../public/chart.svg'
import Button from '@/components/Button'

const PropertyDetail = () => {
  return (
    <div>
      <Breadcrumbs>Kluster / Noxa / Noxa Premium 1</Breadcrumbs>

      <div className="flex flex-col gap-16 lg:gap-20">
        {/* Main Description */}
        <div className="grid grid-cols-2">
          <div className="relative col-span-full lg:col-span-1 h-[300px] lg:h-auto">
            <Image
              src={noxaPremiumDetail}
              alt="Noxa Premium"
              className="w-full object-cover"
              fill
            />
          </div>

          <div className="p-6 lg:p-16 h-full flex flex-col gap-3 col-span-full lg:col-span-1">
            <p className="font-bold text-5xl">NOXA</p>
            <p className="font-bold text-2xl">PREMIUM 1</p>
            <p className="font-bold text-2xl">8 x 13</p>
            <div className="flex gap-8">
              <p>
                <b>Luas Lahan: </b> 104 m2
              </p>
              <p>
                <b>Luas Bangunan: </b> 120 m2
              </p>
            </div>
            <div className="flex gap-8 flex-col lg:flex-row">
              <div className="grid grid-cols-2 gap-8 place-items-center">
                <Image src={homeLayout} alt="Home layout" />
                <Image src={homeLayout} alt="Home layout" />
              </div>

              <div className="grid grid-cols-3 lg:grid-cols-1 gap-5 text-center">
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={icBed}
                    alt="Bed"
                    className="border bg-[#FBFBFB] w-14 p-4 rounded-lg mb-1"
                  />
                  <p className="text-sm">2 Kamar Tidur</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={icBath}
                    alt="Bath"
                    className="border bg-[#FBFBFB] w-14 p-4 rounded-lg mb-1"
                  />
                  <p className="text-sm">2 Kamar Mandi</p>
                </div>
                <div className="flex flex-col justify-center items-center">
                  <Image
                    src={icSquare}
                    alt="Area"
                    className="border bg-[#FBFBFB] w-14 p-4 rounded-lg mb-1"
                  />
                  <p className="text-sm">650 ft3</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Fasilitas */}
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-5 px-6 lg:px-20">
          <div className="order-last lg:order-1 mt-10 lg:mt-0">
            <p className="font-bold text-3xl">Fasilitas</p>

            <p className="mt-4 lg:mt-8 mb-1">
              Beberapa fasilitas yang didapatkan di Unit Noxa premium 1
            </p>
            <ul>
              <li>• Full furnished</li>
              <li>• Free surat-surat</li>
              <li>• Free AC 1.5 PK</li>
              <li>• Free Kanopi</li>
            </ul>
          </div>

          <div className="flex gap-5 lg:order-last justify-center flex-wrap">
            <Image src={fasilitas1} alt="fasilitas" />
            <Image src={fasilitas2} alt="fasilitas" />
            <Image src={fasilitas3} alt="fasilitas" />
            <Image src={fasilitas4} alt="fasilitas" />
          </div>
        </div>

        {/* 360 and Video */}
        <div className="grid grid-cols-2 gap-10 lg:gap-5 px-6 lg:px-20 text-center">
          <div className="col-span-full lg:col-span-1">
            <p className="font-bold text-3xl">Tur 360</p>
            <iframe
              src="https://www.klapty.com/tour/tunnel/z7V0v9USAH"
              allowFullScreen={true}
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              allowvr="true"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
              className="w-full h-[650px] lg:h-[500px] rounded-lg mt-5"
            ></iframe>
          </div>

          <div className="col-span-full lg:col-span-1">
            <p className="font-bold text-3xl">Video Show Unit</p>
            <iframe
              allowFullScreen={true}
              mozallowfullscreen="true"
              webkitallowfullscreen="true"
              src="https://www.youtube.com/embed/mgulkcaPMCY"
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="h-[650px] lg:h-[500px] mt-5 rounded-lg w-full"
            ></iframe>
          </div>
        </div>

        {/* Button */}
        <div className="text-center px-6 lg:px-20">
          <Button className="w-full lg:max-w-80 px-10">
            Cek Spesifikasi Bangunan
          </Button>
        </div>

        {/* Gellery */}
        <div className="px-6 lg:px-20 w-full">
          <p className="font-bold text-3xl text-center mb-5">Galeri</p>

          <div className="flex w-full gap-5 flex-wrap justify-center">
            <Image
              src={gallery1}
              alt="Gallery"
              className="rounded-lg h-[140px] w-[140px] object-cover"
            />
            <Image
              src={gallery2}
              alt="Gallery"
              className="rounded-lg h-[140px] w-[140px] object-cover"
            />
            <Image
              src={gallery3}
              alt="Gallery"
              className="rounded-lg h-[140px] w-[140px] object-cover"
            />
            <Image
              src={gallery4}
              alt="Gallery"
              className="rounded-lg h-[140px] w-[140px] object-cover"
            />
            <Image
              src={gallery5}
              alt="Gallery"
              className="rounded-lg h-[140px] w-[140px] object-cover"
            />
          </div>
        </div>

        {/* Estimasi Nilai Pasar */}
        <div className="lg:px-20 px-6">
          <p className="text-3xl font-bold">Estimasi Nilai Pasar</p>
          <p className="text-secondary text-lg mt-1">
            Beli sekarang dan Anda bisa mendapatkan hasil investasi Anda nanti
          </p>
          <p className="mt-4">Rumah Ini - Rp. 600.000.000</p>
          <Image src={chart} alt="Chart" className="mt-10 w-full" />
        </div>

        {/* Perhitungan KPR */}
        <div className="lg:px-20 px-6">
          <p className="text-3xl font-bold text-center">Perhitungan KPR</p>

          <div className="grid grid-cols-5 gap-8 mt-8">
            <div className="grid grid-cols-2 border shadow-sm col-span-full lg:col-span-2 h-fit p-5 rounded-lg gap-y-6 text-sm lg:text-base">
              <p className="col-span-2 font-bold text-2xl">Simulasi KPR</p>

              <p>Harga Properti</p>
              <div className="flex items-center">
                <p className="py-1 px-2 border rounded-l-md">Rp</p>
                <input
                  type="text"
                  disabled
                  placeholder="600.000.000"
                  className="bg-[#F3F3F3] border rounded-r-md p-1 w-full"
                ></input>
              </div>

              <p>Uang Muka</p>
              <div className="flex items-center">
                <p className="py-1 px-2 border rounded-l-md">10%</p>
                <input
                  type="text"
                  disabled
                  placeholder="23.000.000"
                  className="bg-[#F3F3F3] border rounded-r-md p-1 w-full"
                ></input>
              </div>

              <div className="flex col-span-full items-center gap-3">
                <p>1%</p>
                <input
                  id="default-range"
                  type="range"
                  className="h-2 rounded-full cursor-pointer w-full appearance-none bg-[#DADADA]"
                ></input>
                <p>70%</p>
              </div>

              <p>Jangka Waktu</p>
              <div className="flex items-center">
                <p className="py-1 px-2 border rounded-l-md">20</p>
                <input
                  type="text"
                  disabled
                  placeholder="Tahun"
                  className="bg-[#F3F3F3] border rounded-r-md p-1 w-full"
                ></input>
              </div>

              <div className="flex col-span-full items-center gap-3">
                <p className="whitespace-nowrap">1 Thn</p>
                <input
                  id="default-range"
                  type="range"
                  className="h-2 rounded-full cursor-pointer w-full appearance-none bg-[#DADADA]"
                ></input>
                <p className="whitespace-nowrap">30 Thn</p>
              </div>

              <Button className="col-span-full">Simulasikan KPR</Button>
            </div>

            <div className="flex flex-col gap-8 col-span-full lg:col-span-3">
              <div className="border shadow-sm p-5 rounded-lg">
                <p className="font-bold text-2xl">Angsuran Bulanan</p>

                <div className="flex gap-5 lg:gap-10 mt-5 flex-wrap">
                  <p className="text-lg lg:text-xl font-bold">Bunga 2.75%</p>
                  <p className="text-lg lg:text-xl font-bold">Rp 1.122.284</p>
                </div>
              </div>

              <div className="border shadow-sm p-5 rounded-lg flex flex-col gap-2">
                <p className="font-bold text-2xl">Angsuran Bulanan Hanya</p>
                <p className="text-secondary font-bold text-xl my-5">
                  Rp. 705.618
                </p>
                <Button className="bg-secondary w-full text-zinc-900 hover:bg-secondary/90">
                  Ajukan KPR
                </Button>
              </div>
            </div>
          </div>
        </div>

        {/* Perhitungan KPR */}
        <div className="lg:px-20">
          <p className="text-3xl font-bold text-center">
            Atur Jadwal Anda Sekarang
          </p>

          <div className="flex justify-center items-center mt-8">
            <Button className="px-10">Pilih waktu yang anda inginkan</Button>
          </div>
        </div>
      </div>
    </div>
  )
}

PropertyDetail.layout = 'default'
export default PropertyDetail

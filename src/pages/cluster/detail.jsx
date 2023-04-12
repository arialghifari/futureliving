import React from 'react'
import Breadcrumbs from '@/components/Breadcrumbs'
import Image from 'next/image'
import noxaImg from '../../../public/noxaImg.jpg'
import noxaLogo from '../../../public/icons/icNoxa.svg'
import Button from '@/components/Button'
import { properties } from '@/data/properties'
import PropertyCard from '@/components/Card/PropertyCard'
import facility1 from '../../../public/facility1.jpg'
import facility2 from '../../../public/facility2.jpg'
import facility3 from '../../../public/facility3.jpg'
import facility4 from '../../../public/facility4.jpg'
import facility5 from '../../../public/facility5.jpg'
import documentationImg from '../../../public/documentationImg.jpg'
import siteImg from '../../../public/siteImg.jpg'

import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'
import { FreeMode } from 'swiper'

const ClusterDetail = () => {
  const [propertyList, setPropertyList] = React.useState('')
  const [type, setType] = React.useState('classic')

  const inactiveClass =
    'bg-white hover:bg-white hover:border-primary/80 hover:text-primary/80'

  React.useMemo(() => {
    const filteredProperties = properties.filter(
      (item) => item.cluster === 'noxa' && item.type === type
    )

    setPropertyList(filteredProperties)
  }, [type])

  return (
    <div>
      <Breadcrumbs>Kluster / Noxa</Breadcrumbs>

      <div>
        <Image
          src={noxaImg}
          alt="Noxa cluster image"
          className="w-full object-cover min-h-[250px]"
        />
      </div>

      <div className="flex flex-col gap-20 mt-20">
        {/* Deskripsi */}
        <div className="flex gap-12 lg:gap-28 items-center px-6 lg:px-20 flex-col lg:flex-row">
          <Image src={noxaLogo} alt="Noxa logo" className="w-full h-[150px]" />
          <div className="flex flex-col gap-5">
            <p>
              Noxa merupakan cluster andalan dari Future Living. Kata Noxa
              diambil dari bahasa kuvukiland yang berarti suasana yang nyaman
              dan asri, diharapkan cluster Noxa dapat membuat siapapun yang
              menghuninya merasa nyaman dan asri seperti namanya. Cluster Noxa
              mengambil tema modern futuristik yang dimana merujuk pada
              teknologi yang maju. hal ini tentu mempengaruhi bentuk dari rumah
              dan wilayahnya.
            </p>
            <p>
              Cluster Noxa teridir dari 90 rumah, dengan 2 tipe. Masing-masing
              tipe memiliki keunikannya sendiri. Cluster Noxa didesain oleh
              robert anto yuda wicaksono murata, beliau merupakan desainer
              ternama yang sudah mendesain lebih dari 1.000.000 rumah. Cluster
              Noxa memiliki taman didalamnya seluas 20 hektar, taman ini
              memiliki sekitar 2.000 pohon. Dengan adanya cluster Noza ini,
              diharapkan Future Living dapat melengkapi kebutuhan masyarakat
              indonesia akan rumah yang memiliki lingkungan nyaman dan asri,
              serta desain yang modern dan futuristik.
            </p>
          </div>
        </div>

        {/* Tipe */}
        <div className="px-6 lg:px-20">
          <p className="font-bold text-3xl mb-12 text-center">Tipe</p>

          <div className="flex justify-center gap-4 lg:gap-8 mb-10">
            <Button
              className={`w-40 border-2 border-primary ${
                type === 'classic' ? '' : inactiveClass
              }`}
              style={{ color: type === 'classic' ? '' : '#0E1D70' }}
              onClick={() => setType('classic')}
            >
              Classic
            </Button>
            <Button
              className={`w-40 border-2 border-primary ${
                type === 'premium' ? '' : inactiveClass
              }`}
              style={{ color: type === 'premium' ? '' : '#0E1D70' }}
              onClick={() => setType('premium')}
            >
              Premium
            </Button>
          </div>

          <div className="flex items-center justify-center">
            {propertyList.length > 0 ? (
              <div className="grid grid-cols-2 gap-4 lg:gap-7 max-w-3xl flex-1">
                {propertyList?.map((property) => (
                  <PropertyCard
                    key={property.id}
                    img={property.img}
                    name={property.name}
                    specs={property.specs}
                    price={property.price}
                  />
                ))}
              </div>
            ) : (
              <p className="text-center">Tidak ada data properti</p>
            )}
          </div>
        </div>

        {/* Fasilitas Publik */}
        <div>
          <p className="font-bold text-3xl mb-12 text-center">
            Fasilitas Publik
          </p>

          <div className="mb-12">
            <Swiper
              freeMode={true}
              breakpoints={{
                450: {
                  slidesPerView: 2,
                  spaceBetween: 20,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 30,
                },
                1024: {
                  slidesPerView: 4,
                  spaceBetween: 48,
                },
              }}
              modules={[FreeMode]}
              style={{ padding: '0 24px' }}
            >
              <SwiperSlide>
                <Image src={facility1} alt="facility" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={facility2} alt="facility" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={facility3} alt="facility" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={facility4} alt="facility" />
              </SwiperSlide>
              <SwiperSlide>
                <Image src={facility5} alt="facility" />
              </SwiperSlide>
            </Swiper>
          </div>

          <p className="text-center px-6 lg:px-20">
            Cluster Noxa adalah sebuah kawasan hunian yang dilengkapi dengan
            berbagai fasilitas publik yang bertujuan untuk memenuhi kebutuhan
            penghuni dalam kehidupan sehari-hari. Salah satu fasilitas publik
            yang tersedia di dalam Cluster Noxa adalah taman bermain yang cukup
            luas dan lengkap dengan berbagai permainan anak yang aman dan
            nyaman. Selain itu, terdapat juga kolam renang yang dijaga
            kebersihannya secara berkala dan dilengkapi dengan fasilitas
            penunjang seperti shower dan kamar mandi. Tak hanya itu, Cluster
            Noxa juga menyediakan area jogging track dan gym yang lengkap dengan
            peralatan olahraga modern sehingga penghuni dapat berolahraga dengan
            nyaman tanpa harus keluar dari kompleks hunian. Semua fasilitas
            publik ini dirancang untuk memenuhi kebutuhan penghuni dan
            memberikan kenyamanan serta kualitas hidup yang lebih baik.
          </p>
        </div>

        {/* Dokumentasi */}
        <div className="flex flex-col justify-center px-6 lg:px-20">
          <p className="font-bold text-3xl mb-12 text-center">Dokumentasi</p>

          <Image
            src={documentationImg}
            alt="Dokumentasi properti"
            className="object-contain w-full rounded-lg"
          />
        </div>

        {/* Site Image */}
        <div className="flex flex-col justify-center px-6 lg:px-20">
          <p className="font-bold text-3xl mb-12 text-center">Rencana Site</p>

          <Image
            src={siteImg}
            alt="Site image"
            className="border shadow-sm object-contain w-full rounded-lg max-h-[700px]"
          />
        </div>

        {/* Lokasi dan Lingkungan Sekitar */}
        <div className="flex flex-col justify-center px-6 lg:px-20">
          <p className="font-bold text-3xl mb-12 text-center">
            Lokasi dan Lingkungan Sekitar
          </p>

          <div>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.636231401193!2d115.80634157148675!3d-31.948117872715994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a573a6c9356f%3A0x39d4ed52de834afe!2sFuture%20Living%20Trust%20Inc!5e0!3m2!1sen!2sid!4v1679735964093!5m2!1sen!2sid"
              width="600"
              height="500"
              className="w-full rounded-lg"
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

ClusterDetail.layout = 'default'
export default ClusterDetail

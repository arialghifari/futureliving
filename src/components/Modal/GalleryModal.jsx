import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/pagination'
import { EffectCoverflow, Pagination } from 'swiper'

import Modal from '../Modal'
import Image from 'next/image'
import gallery1 from '../../../public/gallery1.jpg'
import gallery2 from '../../../public/gallery2.jpg'
import gallery3 from '../../../public/gallery3.jpg'
import gallery4 from '../../../public/gallery4.jpg'
import gallery5 from '../../../public/gallery5.jpg'

export default function GalleryModal({ setIsOpen }) {
  return (
    <Modal setIsOpen={setIsOpen}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src={gallery1}
            alt="gallery image"
            width={500}
            height={500}
            className="object-cover w-full h-[400px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={gallery2}
            alt="gallery image"
            width={500}
            height={500}
            className="object-cover w-full h-[400px] md:h-[520px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={gallery3}
            alt="gallery image"
            width={500}
            height={500}
            className="object-cover w-full h-[400px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={gallery4}
            alt="gallery image"
            width={500}
            height={500}
            className="object-cover w-full h-[400px] lg:h-[600px]"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={gallery5}
            alt="gallery image"
            width={500}
            height={500}
            className="object-cover w-full h-[400px] lg:h-[600px]"
          />
        </SwiperSlide>
      </Swiper>
    </Modal>
  )
}

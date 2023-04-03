import { Swiper, SwiperSlide } from 'swiper/react'
import { Autoplay, Pagination } from 'swiper'
import 'swiper/css'
import 'swiper/css/pagination'

import largeBanner from '../../public/largeBanner.jpg'
import banner from '../../public/banner.jpg'
import Image from 'next/image'

export default function Carousel() {
  return (
    <div className="bg-gray-200 h-[300px] lg:h-[600px] 2xl:h-[750px]">
      <Swiper
        modules={[Autoplay, Pagination]}
        slidesPerView={1}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
      >
        <SwiperSlide>
          <Image
            src={largeBanner}
            alt="Large banner"
            className="h-[300px] lg:h-[600px] 2xl:h-[750px] object-cover w-full"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src={banner}
            alt="Banner"
            className="h-[300px] lg:h-[600px] 2xl:h-[750px] object-cover w-full"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

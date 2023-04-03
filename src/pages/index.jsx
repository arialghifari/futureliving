import Image from 'next/image'
import banner from '../../public/banner.jpg'
import largeBanner from '../../public/largeBanner.jpg'
import SearchForm from '@/components/SearchForm/SearchForm'
import LineTitle from '@/components/Title/LineTitle'
import houseImage from '../../public/houseImage.jpg'
import infrastructure1 from '../../public/infrastructure1.jpg'
import infrastructure2 from '../../public/infrastructure2.jpg'
import infrastructure3 from '../../public/infrastructure3.jpg'
import property1 from '../../public/property1.jpg'
import property2 from '../../public/property2.jpg'
import property3 from '../../public/property3.jpg'
import icShoppingCart from '../../public/icons/icShoppingCart.svg'
import icAirplane from '../../public/icons/icAirplane.svg'
import icHospital from '../../public/icons/icHospital.svg'
import icTree from '../../public/icons/icTree.svg'
import icBank from '../../public/icons/icBank.svg'
import icBus from '../../public/icons/icBus.svg'
import icBuilding from '../../public/icons/icBuilding.svg'
import useWindowSize from '@/hooks/useWindowSize'

const Home = () => {
  const { width } = useWindowSize()

  return (
    <div>
      {width >= 1024 ? (
        <Image
          src={largeBanner}
          alt="Banner"
          className="w-full h-[600px] object-cover object-bottom"
        />
      ) : (
        <Image src={banner} alt="Banner" className="w-full" />
      )}
      <SearchForm />

      {/* Section Tentang Kami */}
      <div className="p-6 lg:px-20 mt-16">
        <LineTitle>Tentang Kami</LineTitle>
        <p className="text-center mt-6 lg:mt-12 text-sm text-text lg:text-base">
          Future living merupakan developer yang sudah memiliki pengalaman lebih
          dari 10 tahun di indonesia. Berdiri pada tahun 2000, Future living
          sudah membantu lebih dari 10.000 masyarakat dalam memiliki rumah
          impian mereka. Future living juga telah menerima lebih dari 50
          penghargaan, baik penghargaan nasional maupun internasional. Hal
          tersebut bisa dicapai karena future living memiliki sumber daya
          manusia yang berkualitas di semua bagian. Future living menggunakan
          bahan-bahan yang berkualitas untuk pembangunan properti, sehingga
          properti kami tahan terhadap bencana, seperti gempa dan angin topan.
          Future living terus berkomitmen dalam merealisasikan impian masyarakat
          indonesia dalam mempunyai rumah impian mereka.
        </p>

        <div className="mt-16 lg:mt-20 flex flex-col lg:flex-row lg:gap-36 items-center">
          <Image
            src={houseImage}
            alt="Modern house image with pool"
            className="h-[360px] lg:h-[530px] object-cover rounded-2xl w-3/4"
          />

          <div className="text-center mt-6 lg:mt-0 text-text lg:text-left w-full">
            <p className="text-2xl font-bold lg:text-5xl">
              Miliki Rumah Impianmu Bersama Kami
            </p>

            <div className="flex flex-col gap-6 lg:gap-8">
              <div className="mt-6 lg:mt-10">
                <p className="text-2xl font-bold text-secondary mb-3 lg:text-5xl">
                  504+
                </p>
                <p className="text-sm lg:text-base">
                  Customer senang dengan pelayanan kami
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary mb-3 lg:text-5xl">
                  1.2K+
                </p>
                <p className="text-sm lg:text-base">
                  Properti terbaik yang kami tawarkan
                </p>
              </div>
              <div>
                <p className="text-2xl font-bold text-secondary mb-3 lg:text-5xl">
                  345+
                </p>
                <p className="text-sm lg:text-base">
                  Perusahaan yang berafiliasi dengan kami
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Section Virtual Tour */}
      <div className="p-6 lg:px-20 mt-16 lg:mt-20">
        <LineTitle>Virtual Tour</LineTitle>
        <p className="text-center mt-6 text-sm text-text lg:text-base">
          “Tidak Punya Waktu Untuk Melakukan Tour? Coba 3D Virtual Kami”
        </p>

        <div className="w-full flex justify-center items-center">
          <iframe
            src="https://www.klapty.com/tour/tunnel/hiL0VSDWXC"
            frameborder="0"
            allowfullscreen="true"
            mozallowfullscreen="true"
            webkitallowfullscreen="true"
            allowvr="true"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; vr"
            className="mt-6 lg:mt-10 rounded-2xl w-full lg:w-2/3 h-[450px]"
          ></iframe>
        </div>
      </div>

      {/* Section Infrastruktur */}
      <div className="p-6 lg:px-20 mt-16 lg:mt-20">
        <LineTitle>
          Tinggal di Lingkungan yang Bersahabat & Infrastruktur Skala Kota
        </LineTitle>

        <p className="text-center mt-6 text-sm text-text lg:text-base">
          Temukan Pesona Hidup Lebih di Baik Masa Depan di Future Living
        </p>

        <div className="flex flex-col gap-8 text-sm text-text mt-6 lg:mt-12 lg:flex-row justify-center flex-wrap lg:gap-16 items-center lg:items-baseline">
          <div className="flex gap-6 items-center lg:flex-col w-80 lg:text-center">
            <Image
              src={infrastructure1}
              alt="Infrastructure"
              className="w-28 h-28 lg:w-80 lg:h-80 rounded-full"
            />
            <p className="font-bold lg:text-xl">
              Alam yang Natural & Lingkungan yang Hijau
            </p>
          </div>
          <div className="flex gap-6 items-center lg:flex-col w-80 lg:text-center">
            <Image
              src={infrastructure2}
              alt="Infrastructure"
              className="w-28 h-28 lg:w-80 lg:h-80 rounded-full"
            />
            <p className="font-bold lg:text-xl">
              Tinggal di Lingkungan yang Modern
            </p>
          </div>
          <div className="flex gap-6 items-center lg:flex-col w-80 lg:text-center">
            <Image
              src={infrastructure3}
              alt="Infrastructure"
              className="w-28 h-28 lg:w-80 lg:h-80 rounded-full"
            />
            <p className="font-bold lg:text-xl">
              Dikelilingi Fasilitas Terbaik, Seperti Rumah Sakit & Pendidikan
            </p>
          </div>
        </div>
      </div>

      {/* Section Property */}
      <div className="p-6 lg:px-20 mt-16 lg:mt-20">
        <LineTitle>Properti Terbaik Dari Kami</LineTitle>

        <div className="flex flex-col gap-8 text-sm text-text mt-6 lg:mt-12 lg:flex-row justify-center flex-wrap lg:gap-16 items-center lg:items-baseline">
          <div className="flex gap-6 items-center lg:flex-col w-80 lg:text-center">
            <Image
              src={property1}
              alt="Infrastructure"
              className="w-28 h-28 lg:w-80 lg:h-80 rounded-full"
            />
            <p className="font-bold lg:text-xl">Apartment & Condovillas</p>
          </div>
          <div className="flex gap-6 items-center lg:flex-col w-80 lg:text-center">
            <Image
              src={property2}
              alt="Infrastructure"
              className="w-28 h-28 lg:w-80 lg:h-80 rounded-full"
            />
            <p className="font-bold lg:text-xl">Landed Houses</p>
          </div>
          <div className="flex gap-6 items-center lg:flex-col w-80 lg:text-center">
            <Image
              src={property3}
              alt="Infrastructure"
              className="w-28 h-28 lg:w-80 lg:h-80 rounded-full"
            />
            <p className="font-bold lg:text-xl">Commercials</p>
          </div>
        </div>
      </div>

      {/* Section Lokasi */}
      <div className="mt-16 pb-16 lg:pb-28">
        <div className="px-6 lg:px-20">
          <LineTitle>Lokasi</LineTitle>
        </div>

        <div className="lg:px-20 flex flex-col lg:flex-row lg:mt-12 lg:gap-9">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15732.636231401193!2d115.80634157148675!3d-31.948117872715994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2a32a573a6c9356f%3A0x39d4ed52de834afe!2sFuture%20Living%20Trust%20Inc!5e0!3m2!1sen!2sid!4v1679735964093!5m2!1sen!2sid"
            width="600"
            height="450"
            className="w-full mt-6 lg:rounded-2xl"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>

          <div className="text-center text-text mt-6 flex flex-col gap-6 lg:gap-11 px-6 w-full lg:shadow-lg lg:rounded-2xl lg:border lg:justify-center lg:text-left lg:p-9">
            <div>
              <p className="text-xl font-bold mb-3 lg:mb-4 lg:text-2xl">
                Alamat
              </p>
              <p>
                Sepaku, Kabupaten Penajam Paser Utara, Provinsi Kalimantan
                Timur. Indonesia
              </p>
            </div>

            <div>
              <p className="text-xl font-bold mb-3 lg:mb-4 lg:text-2xl">
                Key Location
              </p>

              <div className="text-sm text-left flex flex-col items-center gap-3 lg:items-start lg:flex-row lg:flex-wrap lg:text-base w-full lg:max-w-[500px]">
                <p className="w-44 flex items-center gap-2 flex-auto">
                  <span>
                    <Image src={icShoppingCart} alt="icon shopping cart" />
                  </span>
                  Supermarket: 200m
                </p>
                <p className="w-44 flex items-center gap-2 flex-auto">
                  <span>
                    <Image src={icAirplane} alt="icon shopping" />
                  </span>
                  Airport: 2100m
                </p>
                <p className="w-44 flex items-center gap-2 flex-auto">
                  <span>
                    <Image src={icHospital} alt="icon shopping" />
                  </span>
                  Hospital: 600m
                </p>
                <p className="w-44 flex items-center gap-2 flex-auto">
                  <span>
                    <Image src={icTree} alt="icon shopping" />
                  </span>
                  Park: 1500m
                </p>
                <p className="w-44 flex items-center gap-2 flex-auto">
                  <span>
                    <Image src={icBank} alt="icon shopping" />
                  </span>
                  Bank: 700m
                </p>
                <p className="w-44 flex items-center gap-2 flex-auto">
                  <span>
                    <Image src={icBus} alt="icon shopping" />
                  </span>
                  Bus Station: 150m
                </p>
                <p className="w-44 flex items-center gap-2 flex-auto">
                  <span>
                    <Image src={icBuilding} alt="icon shopping" />
                  </span>
                  University: 500m
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

Home.layout = 'default'
export default Home

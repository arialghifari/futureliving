import Image from 'next/image'
import logo from '../../public/logo.svg'
import icFacebook from '../../public/icons/icFacebook.svg'
import icTwitter from '../../public/icons/icTwitter.svg'
import icInstagram from '../../public/icons/icInstagram.svg'
import icLinkedin from '../../public/icons/icLinkedin.svg'

export default function Footer() {
  return (
    <>
      <div className="bg-primary px-6 py-8 md:px-8 md:pt-10 md:pb-20 gap-1 md:gap-4 grid grid-cols-1 sm:pb-40 md:grid-cols-2 lg:grid-cols-4 text-white">
        <div>
          <Image src={logo} alt="futurelivin-logo" className="py-4" />
          <div className="py-6">Miliki Rumah Impianmu Bersama Kami</div>
        </div>
        <div>
          <div className="footer-caption">LOKASI KAMI</div>
          <div className="py-6">
            Sepaku, Kabupaten Penajam Paser Utara, Provinsi Kalimantan Timur.
          </div>
        </div>
        <div>
          <div className="footer-caption">IKUTI KAMI DI SOSIAL MEDIA</div>
          <div className="flex gap-2 py-6">
            <Image src={icFacebook} alt="icon-facebook" />
            <Image src={icTwitter} alt="icon-facebook" />
            <Image src={icInstagram} alt="icon-facebook" />
            <Image src={icLinkedin} alt="icon-facebook" />
          </div>
        </div>
        <div>
          <div className="footer-caption">NEWSLETTER</div>
          <div className="py-6">
            Jadi yang Pertama Mengetahui Tentang Promosi, Event dan Banyak
            Lainnya
          </div>
          <div className="flex gap-2">
            <input
              type="text"
              name="email"
              className="input w-3/4 bg-[#ffffff40] rounded-xl placeholder:text-sm md:placeholder:text-base"
              placeholder="Masukan Email Anda"
            />
            <button className="btn bg-secondary rounded-xl placeholder:text-sm md:placeholder:text-base">
              Kirim
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

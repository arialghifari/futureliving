import Header from '@/components/Header'
import Image from 'next/image'
import banner from '../../public/banner.jpg'
import SearchForm from '@/components/SearchForm'

export default function Home() {
  return (
    <div className="h-[1300px]">
      <Header />
      <Image src={banner} alt="Banner" className="w-full" />
      <SearchForm />
    </div>
  )
}

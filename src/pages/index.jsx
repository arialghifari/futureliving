import Header from '@/components/Header'
import Image from 'next/image'
import banner from '../../public/banner.jpg'
import SearchForm from '@/components/SearchForm'

const Home = () => {
  return (
    <div>
      <Header />
      <Image src={banner} alt="Banner" className="w-full" />
      <SearchForm />
    </div>
  )
}

Home.layout = 'default'
export default Home
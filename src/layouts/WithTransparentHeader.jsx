import Footer from '@/components/Footer'
import TransparentHeader from '@/components/Header/TransparentHeader'

export default function WithTransparentHeader({ children }) {
  return (
    <>
      <TransparentHeader />
      {children}
      <Footer />
    </>
  )
}

import Footer from '@/components/Footer'

export default function LayoutWithoutHeader({ children }) {
  return (
    <>
      {children}
      <Footer />
    </>
  )
}

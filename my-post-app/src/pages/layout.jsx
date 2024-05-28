import Navbar from '@/components/navbar'
import Header from '@/components/Header'
import { useRouter } from 'next/router'
 
export default function Layout({ children }) {
  const router = useRouter();
  return (
    <>
    <Header title={router.route}/>
      <Navbar />
      {children}
      
    </>
  )
}
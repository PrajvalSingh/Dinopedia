import { Inter } from 'next/font/google'
import './globals.css'
import Navbar from '../components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dinohub',
  description: 'A website for dinosaur nerds!',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='p-4'>
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>
    </html>
  )
}

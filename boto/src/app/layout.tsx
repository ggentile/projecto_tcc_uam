import { Header } from '@/components/Header'
import './globals.css'
import { Saira } from 'next/font/google'

const saira = Saira({
  weight: ['300', '400', '500', '600'], 
  subsets: ['latin'] 
})

export const metadata = {
  title: 'Agência Boto',
  description: 'Agência de comunicação Boto',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={saira.className}>
        <Header />
        {children}
      </body>
    </html>
  )
}

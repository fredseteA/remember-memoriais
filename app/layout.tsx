import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import './globals.css'

export const metadata: Metadata = {
  title: "Memoriais Remember",
  description:
    "Memoriais gerados pelo Remember Qr Code. Venha descobrir as lindas histórias e homenagens guardadas aqui!",
  icons: {
    icon: "/fav-ico.png", // <-- aqui está seu favicon
  },
  openGraph: {
    title: "Memoriais Remember",
    description: 
      "Memoriais gerados pelo Remember Qr Code. Venha descobrir as lindas histórias e homenagens guardadas aqui!",
    images: [
      {
        url: 'https://remember-memoriais.vercel.app/logo.png', // logo que vai aparecer no link
        width: 800, // Largura da imagem em pixels
        height: 600, // Altura da imagem em pixels
        alt: 'Logo Remember QR Code', 
      },
    ],
  },
  // PARA TWITTER CARDS TAMBÉM 
  twitter: {
    card: 'summary',
    title: "Memoriais Remember",
    description: "Memoriais gerados pelo Remember Qr Code. Venha descobrir as lindas histórias e homenagens guardadas aqui!",
    images: ['https://remember-memoriais.vercel.app/logo.png'],
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" >
      <body>{children}</body>
    </html>
  )
}

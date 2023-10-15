import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'

const font = localFont({
  display: 'swap',
  src: [
    {
      path: './ClashGrotesk-Light.woff2',
      weight: '300'
    },
    {
      path: './ClashGrotesk-Regular.woff2',
      weight: '400'
    },
    {
      path: './ClashGrotesk-Medium.woff2',
      weight: '500'
    },
    {
      path: './ClashGrotesk-Semibold.woff2',
      weight: '600'
    },
    {
      path: './ClashGrotesk-Bold.woff2',
      weight: '700'
    }
  ]
})

export const metadata: Metadata = {
  title: {
    template: '%s | Renato Silva',
    default: 'Renato Silva'
  },
  description: 'Software Engineer na @EscaleDigital.'
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body className={`${font.className} bg-zinc-900 text-zinc-50`}>
        {children}
      </body>
    </html>
  )
}

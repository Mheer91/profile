import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "./components/navbar";
import Providers from "./components/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Michael Heer',
  description: 'Portfolio',
}


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        <Providers>
            <body className={inter.className}>
                <NavBar>
                    {children}
                </NavBar>
            </body>
        </Providers>
    </html>
  )
}

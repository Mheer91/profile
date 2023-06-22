import './globals.css'
import { Inter } from 'next/font/google'
import NavBar from "./components/navbar";
import Providers from "./components/providers";

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Lake County Veterans',
  description: 'Lake Country Veterans',
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
                </NavBar>
                {children}
            </body>
        </Providers>
    </html>
  )
}

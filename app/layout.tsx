import './globals.css'
// import { Inter } from 'next/font/google'
// import { Kanit } from "next/font/google";
import NavBar from "./components/navbar";
import Providers from "./components/providers";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ['latin'] , weight: '400' });

// const kanit = Kanit({ subsets: ['latin'] , weight: '600' });

export const metadata = {
  title: 'Lake County Veterans',
  description: 'Lake Country Veterans',
}

//TODO: FIgure out why font isn't working on the drawer
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={orbitron.className}>
        <Providers>
            <body>
                <NavBar>
                    {children}
                </NavBar>
            </body>
        </Providers>
    </html>
  )
}

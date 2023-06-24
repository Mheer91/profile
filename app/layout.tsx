import './globals.css'
import NavBar from "./components/navbar";
import Providers from "./components/providers";
import { Orbitron } from "next/font/google";

const orbitron = Orbitron({ subsets: ['latin'] , weight: '400' });

// const kanit = Kanit({ subsets: ['latin'] , weight: '600' });

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
    <html lang="en" className={orbitron.className}>
        <body>
            <Providers>
                <NavBar>
                    {children}
                </NavBar>
            </Providers>
        </body>
    </html>
  )
}

import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Dongyoung Kim, Ph.D.',
  description: 'Dongyoung Kim, Ph.D.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
      </body>

    </html>
  )
}


// navbar function
export function Navbar() {
  return (
    <div class="navbar bg-base-100 fixed top-0 left-0 w-full ">
      <div class="flex-1">
        <a class="btn btn-ghost normal-case text-xl">DONGYOUNG KIM, Ph.D.</a>
      </div>
      <div class="flex-none">
        <ul class="menu menu-horizontal px-1">
          <li><a>Link</a></li>
          <li>
            <details>
              <summary>
                Parent
              </summary>
              <ul class="p-2 bg-base-100">
                <li><a>Link 1</a></li>
                <li><a>Link 2</a></li>
              </ul>
            </details>
          </li>
        </ul>
      </div>
    </div>
  )
}

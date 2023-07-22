import Provider from '@/SessionProvider'
import './globals.css'
import Navbar from '@/components/Navbar'


export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Provider>
          <div className='max-w-screen-xl	m-auto'>
          <Navbar />
        {children}

        </div>
        </Provider>
      </body>
    </html>
  )
}

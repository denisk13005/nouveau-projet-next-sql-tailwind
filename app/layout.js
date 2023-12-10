import './globals.css'
import MenuNav from '@/components/navigation/MenuNav'
import styles from './layout.module.scss'


export const metadata = {
  title: 'formation super cool',
  description: 'formation js , html, css , nextJs',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full'>
      <body className={`h-full ${styles.body}`}>
        <nav className={`w-full h-[8vh]  flex items-center ${styles.navBar}`}>
          <MenuNav />
        </nav>
        {children}

      </body>
    </html>
  )
}

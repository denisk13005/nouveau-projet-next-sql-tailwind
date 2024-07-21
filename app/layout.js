import Footer from '@/components/Footer/Footer'
import MenuNav from '@/components/navigation/MenuNav'
import UserContextProvider from '@/context/userContextProvider'
import './globals.css'
import styles from './layout.module.scss'



export const metadata = {
  title: 'find a template for starting dev quickly',
  description: 'This web site provide different template with different technologies for the front end and different type a database',
  keywords: 'templates, build templates, design web, professionnels templates , réactiv templates ',
  author: 'dkDevelopment'

}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className='h-full' >

      <UserContextProvider>

        <body className={styles.body} >
          <nav className={`w-full h-[8vh]  flex items-center ${styles.navBar}`}>
            <MenuNav />
          </nav>
          <main className={styles.main}>

            {children}
          </main>
          <Footer />

        </body>
      </UserContextProvider>

    </html>
  )
}

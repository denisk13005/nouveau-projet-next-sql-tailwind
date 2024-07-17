import AnimatedLogo from "../animatedLogo/AnimatedLogo"
import styles from './styles.module.scss'

export default function Footer() {
  return (
    <footer className={styles.footer} >
      <div className="text-xs md:text-lg flex items-center justify-between p-9">

        <div className="flex items-center ">
          <div className="hidden md:block">

            <AnimatedLogo />
          </div>
          <div className="md:ml-12">Copyright 2024 - All rights reserved</div>
        </div>
        <div >
          <a href="mailto:developpementdk@gmail.com">
            Contact
          </a>
        </div>

      </div>
    </footer>
  )
}

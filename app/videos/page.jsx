
import Card from '@/components/CardComponent/Card'
import Link from 'next/link'
import styles from './styles.module.scss'

export default function page() {
  return (
    <div className={styles.videosMainContainer}>

      {/* <h1>Bienvenue dans notre espace vidéos</h1>
      <Link href="/exosPartVideos">


        <video width="640" height="360" controls autoPlay>
          <source src="/videos/video.mp4" type="video/mp4" />
        </video>
      </Link>


     
      <Link href="https://github.com/denisk13005/lpf" target='blank'>
        link to template
      </Link>
      <ExosPart /> */}


      <Link href={'/nextJs'} className='w-[90%] md:w-[33%]' >

        <Card headerText={'NextJs '} footerText={'Here all the templates build with nextJS'} photo1={'/images/next-js.svg'} width1={'100%'} width2={0} />
      </Link>

      <Link href={'/vueJs'} className='w-[90%]' >

        <Card headerText={'VueJS'} footerText={'Comming soon'} photo1={'/images/vue-js.svg'} width1={'100%'} width2={0} />
      </Link>
      {/* <video width="640" height="360" controls autoPlay>
        <source src="/videos/nextJsTypescriptMongo.mp4" type="video/mp4" />

      </video> */}
    </div>
  )
}

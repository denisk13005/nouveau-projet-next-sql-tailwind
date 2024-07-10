
import Card from '@/components/CardComponent/Card'
import styles from './styles.module.scss'

export default function page() {
  return (
    <div className={styles.videosMainContainer}>
      comming soon
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
      <Card headerText={'NextJs and MongoDb Template'} footerText={'This template use nextJs for the front end and mongoDb with mongoose for the database'} photo1={'/images/next-js.svg'} photo2={'/images/mongodb.svg'} />
      {/* <video width="640" height="360" controls autoPlay>
        <source src="/videos/nextJsTypescriptMongo.mp4" type="video/mp4" />

      </video> */}
    </div>
  )
}

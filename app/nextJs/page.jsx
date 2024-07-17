import Card from "@/components/CardComponent/Card"
import Link from "next/link"


export default function page() {
  return (
    <section>
      <div className=" w-[70%] m-auto">
        <Link href='/nextJs/mongodb'>

          <Card headerText={'Mongo db'} photo1={'./images/mongodb.svg'} width1={'100%'} footerText={'use this template  build with mongoose for mongo db '} />
        </Link>
      </div>

    </section>
  )
}

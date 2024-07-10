import Image from "next/image"


export default function Card() {
  return (
    <div className="w-[33%] h-[350px]   relative cursor-pointer bg-[#BFA181] flex rounded-2xl mt-4 overflow-hidden flex-col justify-center">
      <div className=" text-white h-[25%] flex justify-center items-center text-3xl">NextJs and MongoDb Template</div>
      <div className="flex w-full h-[50%] items-center">

        <Image src="/images/next-js.svg" height={175} width={250} style={{ width: '50%', height: '80%' }} />
        <Image src="/images/mongodb.svg" height={175} width={250} style={{ width: '50%', height: '80%' }} />
      </div>
      <div className=" h-[25%] text-white p-3">This template use nextJs for the front end and mongoDb with mongoose for the database</div>

    </div>
  )
}

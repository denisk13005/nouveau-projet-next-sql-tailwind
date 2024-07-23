import Image from "next/image"


export default function Card({ headerText, photo1, width1, photo2, width2, footerText }) {
  return (
    <div className=" p-5 w-[width2] h-[40dvh] max-h-[350px]   relative cursor-pointer  flex rounded-2xl mt-4 overflow-hidden flex-col justify-center " style={{ boxShadow: '1px 1px 20px var(--or)', border: '1px  solid var(--or)' }}>
      <div className="text-2xl text-white h-[25%] flex justify-center items-center md:text-5xl">{headerText}</div>
      <div className="flex w-full h-[50%] items-center">

        <Image src={photo1} height={175} width={250} style={{ width: width1 ? width1 : '50%', height: '80%' }} alt="photo1logo" />
        {photo2 ? <Image src={photo2} height={175} width={250} style={{ width: width2 ? width2 : '50%', height: '80%' }} alt="photo2logo" /> : null}
      </div>
      <div className=" text-md text-center italic h-[25%] text-white p-3 m-auto sm:text-xl lg:text-2xl">{footerText}</div>

    </div>
  )
}

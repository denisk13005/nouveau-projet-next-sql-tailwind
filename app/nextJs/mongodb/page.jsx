import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
export default function Page() {
  return <section className="w-full  mt-10 ">
    <Stack className='mb-10 ' >
      <Button variant="outlined" size='large'>Buy for only 49$99</Button>
    </Stack>

    <video controls autoPlay loop className='h-[50dvh] w-full '>
      <source src="/videos/nextJsTypescriptMongo.mp4" type="video/mp4" className='h-full' />
    </video>
  </section>
}
'use client'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';



function Form() {
  const [data, setData] = useState({
    email: "",
    password: ""
  })
  useEffect(() => {
    console.log(data);
  }, [data])
  const get = async () => {
    const response = fetch('/api/get',
      {
        method: 'POST',
        body: JSON.stringify(data)
      })
  }
  return (

    <div className=' w-full h-full h flex justify-center items-center bg-slate-950 '  >


      <Box
        component="form"
        noValidate
        autoComplete="off"
        className='w-max  h-[450px] p-8 mt-12 m-auto  flex flex-col items-center justify-around shadow-yellow-200 shadow-inner   rounded-xl bg-slate-200'
      >

        <h1 className='text-2xl '>Sign In</h1>

        <TextField id="outlined-basic" label="email" variant="outlined" type='email' onChange={(e) => setData({ ...data, email: e.target.value })} />
        <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => setData({ ...data, password: e.target.value })} />


        <Button variant="outlined" onClick={get}>Login</Button>
      </Box >


    </div >
  )
}

export default Form
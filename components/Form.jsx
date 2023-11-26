'use client'
import React, { useEffect, useState } from 'react'
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

import styles from './styles.module.scss'



function Form() {
  const [data, setData] = useState({
    email: "",
    pseudo: '',
    password: ""
  })
  const [signup, setSignup] = useState(false)
  const [emailError, setEmailError] = useState(false)
  useEffect(() => {
    console.log(data);
  }, [data])
  const action = async () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.email.match(mailformat)) {
      setEmailError(false)
    } else {
      setEmailError(true)
    }
    if (signup) {
      const response = await fetch('/api/users/signUp',
        {
          method: 'POST',
          body: JSON.stringify(data)
        })
      const user = await response.json()
      console.log(user);
    } else if (!signup) {
      console.log('titi');
      const response = await fetch('/api/users/sign',
        {
          method: 'POST',
          body: JSON.stringify(data)
        }
      )
      const user = await response.json()
      console.log(user);

    }

  }
  return (

    <div className=' w-full h-full h flex justify-center items-center  '  >


      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={`w-max  h-[450px] p-8 mt-12 m-auto  flex flex-col items-center justify-around  shadow-inner   rounded-xl bg-[var(--blue)] text-[var(--turquoise)] ${styles.container}`}      >

        {!signup ? <h1 className='text-2xl '>Sign In</h1> : <h1 className='text-2xl '>Sign Up</h1>}
        {
          signup ? <TextField id="outlined-basic" label="pseudo" variant="outlined" onChange={(e) => setData({ ...data, pseudo: e.target.value })} /> : null
        }
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <TextField id="outlined-basic" label="email" variant="outlined" type='email' onChange={(e) => setData({ ...data, email: e.target.value })} />
          {
            emailError ? <span style={{ paddingLeft: '5px', color: 'red' }}> erreur </span> : null
          }
        </div>

        <TextField id="outlined-basic" label="password" variant="outlined" onChange={(e) => setData({ ...data, password: e.target.value })} />



        <Button className={`w-[80%] ${styles.btn}`} onClick={action}>{!signup ? <span>Sign In</span> : <span>Sign Up</span>}</Button>
        {
          !signup ? <p style={{ cursor: 'pointer' }} onClick={() => setSignup(true)}>I don t have an account : SignUp</p> : <p style={{ cursor: 'pointer' }} onClick={() => setSignup(false)}>I have an account : SignIn</p>
        }


      </Box >


    </div >
  )
}

export default Form
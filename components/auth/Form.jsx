'use client'
import React, { useEffect, useState } from 'react';

import { useRouter } from 'next/navigation';

import { UseUserContext } from '@/context/UserContext';


import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import TextField from '@mui/material/TextField';

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import FormControl from '@mui/material/FormControl';
import InputAdornment from '@mui/material/InputAdornment';
import InputLabel from '@mui/material/InputLabel';
import OutlinedInput from '@mui/material/OutlinedInput';
import styles from './styles.module.scss';

import Backdrop from '@mui/material/Backdrop';
import CircularProgress from '@mui/material/CircularProgress';





function Form() {
  const { addUser } = UseUserContext()
  const router = useRouter()

  const [data, setData] = useState({
    email: "",
    pseudo: '',
    password: ""
  })
  const [signup, setSignup] = useState(false)
  const [emailError, setEmailError] = useState(false)
  const [emailErrorMsg, setEmailErrorMsg] = useState('')
  const [open, setOpen] = useState(false)
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };
  useEffect(() => {
    console.log(data);
  }, [data])
  const action = async () => {
    const mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (data.email.match(mailformat)) {
      setEmailError(false)
    } else {
      setEmailErrorMsg('bad email format')
      return
    }
    if (signup) {
      handleOpen()
      const response = await fetch('/api/users/signUp',
        {
          method: 'POST',
          body: JSON.stringify(data)
        })
      const user = await response.json()
      if (user.status === 401) {
        handleClose()
        console.log(user);
        setEmailErrorMsg('bad credential')
        return
      }
      if (user.status === 200) {
        handleClose()
        console.log(user.newUser);
        setSignup(false)
        console.log(data);
      }
    } else if (!signup) {
      console.log('titi');
      handleOpen()

      const response = await fetch('/api/users/signIn',
        {
          method: 'POST',
          body: JSON.stringify(data)
        }
      )
      const user = await response.json()
      console.log(user.status, '-------');

      if (user.status === 401) {
        handleClose()
        setEmailErrorMsg('Bad Credentials')
        return
      }

      if (user.status === 200) {
        handleClose()
        setEmailError(false)
        addUser(user.user)
        router.push('/profile')
      }

    }

  }
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (

    <div className=' w-full h-full h flex justify-center items-center  '  >


      <Box
        component="form"
        noValidate
        autoComplete="off"
        className={`w-max  h-[450px] p-8 mt-12 m-auto  flex flex-col items-center justify-around  shadow-inner bg-[white] rounded-xl  ${styles.container}`}      >

        {!signup ? <h1 className='text-2xl '>Sign In</h1> : <h1 className='text-2xl '>Sign Up</h1>}
        {
          signup ? <TextField label="pseudo" variant="outlined" onChange={(e) => setData({ ...data, pseudo: e.target.value })} /> : null
        }
        <div style={{ display: 'flex', flexDirection: 'column' }}>

          <TextField label="email" variant="outlined" type='email' onChange={(e) => setData({ ...data, email: e.target.value })} />
          {
            emailErrorMsg ? <span style={{ paddingLeft: '5px', color: 'red' }}> {emailErrorMsg} </span> : null
          }
        </div>

        <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
          <InputLabel htmlFor="outlined-adornment-password">Password</InputLabel>
          <OutlinedInput
            onChange={(e) => setData({ ...data, password: e.target.value })}
            id="outlined-adornment-password"
            type={showPassword ? 'text' : 'password'}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
            label="Password"
          />
        </FormControl>



        <Button className={`w-[80%] ${styles.btn}`} onClick={action}>{!signup ? <span>Sign In</span> : <span>Sign Up</span>}</Button>
        {
          !signup ? <p style={{ cursor: 'pointer' }} onClick={() => setSignup(true)}>I don t have an account : SignUp</p> : <p style={{ cursor: 'pointer' }} onClick={() => setSignup(false)}>I have an account : SignIn</p>
        }


      </Box >
      <Backdrop
        sx={{ color: 'var(--blue)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>


    </div >
  )
}

export default Form
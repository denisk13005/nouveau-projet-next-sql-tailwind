'use client'
import React from 'react'
import Button from '@mui/material/Button'


export default function ButtonComponent() {
  return (
    <Button variant="outlined" onClick={() => console.log('click')}>click</Button>
  )
}

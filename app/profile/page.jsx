'use client'
import React from 'react'
import { UseUserContext } from '@/context/UserContext'

export default function profile() {
  const { user } = UseUserContext()
  return (
    <div>

      <h1 className="text-center text-4xl capitalize p-10">profile {user && user.pseudo}</h1>
    </div>
  )
}

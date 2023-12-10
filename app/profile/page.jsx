'use client'
import React from 'react'
import { useUserContext } from '@/context/UserContext'

export default function profile() {
  const { user } = useUserContext()
  return (
    <div>

      <h1 className="text-center text-4xl capitalize p-10">profile {user.pseudo}</h1>
    </div>
  )
}

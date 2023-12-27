'use client'

import React from 'react';
import { UseUserContext } from '@/context/UserContext'
import { useRouter } from 'next/navigation'

const Profil = () => {
  const router = useRouter()
  const { user } = UseUserContext()
  // if (!user) router.push('/auth')

  return (
    <div>
      <h1 className="text-center text-4xl capitalize p-10">profil {user && user.pseudo}</h1>
    </div>
  );
};

export default Profil;
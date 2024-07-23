'use client'
import Avatar from '@mui/material/Avatar';

import { UseUserContext } from '@/context/UserContext';
import { useRouter } from 'next/navigation';
import Menu from '../Menu/Menu';
import styles from './styles.module.scss';


export default function FadeMenu() {
  const router = useRouter()
  const { user } = UseUserContext()



  return (
    <div className='flex justify-between items-center w-full p-3' >
      <div >
        <Menu />



      </div>

      <Avatar id={styles.avatar} alt="P" onClick={() => router.push('/profile')} >{user ? user.pseudo.split('')[0].toUpperCase() : null}</Avatar>

    </div>
  );
}
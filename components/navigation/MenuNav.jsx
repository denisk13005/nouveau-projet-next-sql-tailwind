'use client'
import Avatar from '@mui/material/Avatar';

import { useRouter } from 'next/navigation';
import Menu from '../Menu/Menu';
import styles from './styles.module.scss';


export default function FadeMenu() {
  const router = useRouter()



  return (
    <div className='flex justify-between items-center w-full p-3' >
      <div >
        <Menu />



      </div>

      <Avatar id={styles.avatar} alt="P" src="/images/test.jpg" />

    </div>
  );
}
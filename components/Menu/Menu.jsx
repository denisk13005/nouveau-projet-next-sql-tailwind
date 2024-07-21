'use client'

import { UseUserContext } from '@/context/UserContext';
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react';

import styles from './styles.module.scss';
export default function
  Menu() {
  const { user } = UseUserContext()
  const menuRef = useRef(null);


  const [showMenu, setShowMenu] = useState(false)
  const handleClose = () => {
  }
  const handleOpen = () => {
    setShowMenu(!showMenu)


  }
  const handleClickOutside = (event) => {
    if (menuRef.current && !menuRef.current.contains(event.target)) {
      setShowMenu(false);
    }
  };

  useEffect(() => {
    if (showMenu) {
      document.addEventListener('click', handleClickOutside);
    } else {
      document.removeEventListener('click', handleClickOutside);
    }

    // Cleanup event listener on component unmount
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, [showMenu]);

  return (
    <div className={styles.menuContainer} onClick={() => handleOpen()} ref={menuRef}>
      <span className={styles.span}>Menu  {showMenu}</span>

      {showMenu ?

        <div className={styles.linkContainer}>
          <Link href={'/'}>
            <span onClick={handleClose}>Home</span>
          </Link>
          {
            user ?

              <Link href={"/profile"}>

                <span onClick={handleClose}>Profile</span>
              </Link>
              :
              <Link href={"/auth"}>

                <span onClick={handleClose}>Profile</span>
              </Link>


          }
          {
            user
              ?
              <Link href={'/settings'}>

                <span onClick={handleClose}>Settings</span>
              </Link>

              :
              <Link href={'/auth'}>

                <span onClick={handleClose}>Settings</span>
              </Link>
          }

          <Link href={'/videos'}>

            <span onClick={handleClose}>Videos</span>
          </Link>
        </div>

        : null}

    </div>
  )
}

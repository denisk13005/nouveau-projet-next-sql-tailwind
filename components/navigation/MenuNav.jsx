'use client'
import { UseUserContext } from '@/context/UserContext';
import Avatar from '@mui/material/Avatar';
import * as React from 'react';

import Menu from '../Menu/Menu';
import styles from './styles.module.scss';


export default function FadeMenu() {
  const { user } = UseUserContext()
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
    document.body.classList.add('no-scroll');
  };
  const handleClose = () => {
    setAnchorEl(null);
    document.body.classList.remove('no-scroll');
  };

  return (
    <div className='flex justify-between items-center w-full p-3' >
      <div >
        <Menu />


        {/* <Button
          id={styles.btn}
          aria-controls={open ? 'fade-menu' : undefined}
          aria-haspopup="true"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClick}
        >
          Dashboard
        </Button>
        <Menu
          id="fade-menu"
          MenuListProps={{
            'aria-labelledby': 'fade-button',
          }}
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          TransitionComponent={Fade}
        >
          <Link href={'/'}>
            <MenuItem onClick={handleClose}>Home</MenuItem>
          </Link>
          {
            user ?

              <Link href={"/profile"}>

                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>
              :
              <Link href={"/auth"}>

                <MenuItem onClick={handleClose}>Profile</MenuItem>
              </Link>


          }
          {
            user
              ?
              <Link href={'/settings'}>

                <MenuItem onClick={handleClose}>Settings</MenuItem>
              </Link>

              :
              <Link href={'/auth'}>

                <MenuItem onClick={handleClose}>Settings</MenuItem>
              </Link>
          }

          <Link href={'/videos'}>

            <MenuItem onClick={handleClose}>Videos</MenuItem>
          </Link>
        </Menu> */}
      </div>

      <Avatar id={styles.avatar} alt="P" src="/static/images/avatar/3.jpg" />

    </div>
  );
}
'use client'
import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Avatar from '@mui/material/Avatar';
import Fade from '@mui/material/Fade';
import Link from 'next/link';

import styles from './styles.module.scss'



export default function FadeMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className='flex justify-between w-full p-3' >
      <div>

        <Button
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
          <Link href={"/profile"}>

            <MenuItem onClick={handleClose}>Profile</MenuItem>
          </Link>
          <Link href={'settings'}>

            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Link>
        </Menu>
      </div>

      <Avatar id={styles.avatar} alt="Cindy Baker" src="/static/images/avatar/3.jpg" />

    </div>
  );
}
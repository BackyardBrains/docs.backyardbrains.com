import React from 'react';
import Navbar from '@theme-original/Navbar';
import ShopHeader from '../../components/ShopHeader';

export default function NavbarWrapper(props) {
  return (
    <>
      {/* <ShopHeader /> */}
      <div style={{ display: 'none' }}>
        <Navbar {...props} />
      </div>
    </>
  );
}

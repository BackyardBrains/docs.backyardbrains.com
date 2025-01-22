import React from 'react';
import Navbar from '@theme-original/Navbar';
import ShopHeader from '../../components/ShopHeader';

const StickyNavbar = (props) => {
    return <Navbar {...props} className="sticky-navbar" />;
};

export default StickyNavbar;

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

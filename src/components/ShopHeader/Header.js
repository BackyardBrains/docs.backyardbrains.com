import { useState, useEffect } from "react";
import Logo from "./Logo";
import CloseButton from "./CloseButton";
import Nav from "./Nav";
import Actions from "./Actions";
import SearchForm from "./SearchForm";

const Header = ({ isMobileNavVisible, isSearchVisible, setIsMobileNavVisible, setIsOverlayVisible, toggleSearch }) => {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPosition = document.documentElement.scrollTop || document.body.scrollTop;

      setIsSticky(currentScrollPosition > 300);
    }

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const closeNav = e => {
    e.preventDefault();

    setIsMobileNavVisible(false);
    setIsOverlayVisible(false);
  }

  return (
    <header className={`header ${isSticky ? 'header_sticky' : ''}`}>
      <div className="container">
        <div className={`header__inner ${isMobileNavVisible ? 'header__inner_active' : ''}`}>
          <CloseButton onClick={closeNav} />
          <Logo />
          <Nav />
          <Actions toggleSearch={toggleSearch} />
        </div>
        <SearchForm isSearchVisible={isSearchVisible} />
      </div>
    </header>
  );
}

export default Header;
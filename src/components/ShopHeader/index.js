import { useState } from "react";
import HeaderBanner from "./HeaderBanner";
import MobileHeader from "./MobileHeader";
import Header from "./Header";
import Overlay from "./Overlay";

const ShopHeader = () => {
  const [isMobileNavVisible, setIsMobileNavVisible] = useState(false);
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);

  const toggleSearch = () => setIsSearchVisible(!isSearchVisible);

  return (
    <>
      <HeaderBanner />
      <MobileHeader
        setIsMobileNavVisible={setIsMobileNavVisible}
        setIsOverlayVisible={setIsOverlayVisible}
        toggleSearch={toggleSearch}
      />
      <Header
        isMobileNavVisible={isMobileNavVisible}
        isSearchVisible={isSearchVisible}
        setIsMobileNavVisible={setIsMobileNavVisible}
        setIsOverlayVisible={setIsOverlayVisible}
        toggleSearch={toggleSearch}
      />
      <Overlay
        isOverlayVisible={isOverlayVisible}
        setIsOverlayVisible={setIsOverlayVisible}
        setIsMobileNavVisible={setIsMobileNavVisible}
      />
    </>
  );
}

export default ShopHeader;

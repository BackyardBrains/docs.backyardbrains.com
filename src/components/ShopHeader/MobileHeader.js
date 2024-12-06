import Logo from "./Logo";
import SandwichButton from "./SandwichButton";
import SearchButton from "./SearchButton";

const MobileHeader = ({ setIsMobileNavVisible, toggleSearch, setIsOverlayVisible }) => {
  const handleSandwichClick = e => {
    e.preventDefault();

    setIsMobileNavVisible(true);
    setIsOverlayVisible(true);
  }

  const _toggleSearch = e => {
    e.preventDefault();

    toggleSearch();
  }

  return (
    <div className="mobile-header">
      <div className="container">
        <div className="mobile-header__inner">
          <SandwichButton onClick={handleSandwichClick} />
          <Logo />
          <div className="mobile-header__right">
            <SearchButton onClick={_toggleSearch} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MobileHeader;

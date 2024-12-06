import SearchButtonDesktop from "./SearchButtonDesktop";
import ProfileLink from "./ProfileLink";
import Cart from "./Cart";

const Actions = ({ toggleSearch }) => {
  const handleSearch = e => {
    e.preventDefault();

    toggleSearch();
  }

  return (
    <ul className="header-actions">
      <li className="header-actions__item header-actions__item_search">
        <SearchButtonDesktop onClick={handleSearch} />
      </li>
      <li className="header-actions__item header-actions__item_account">
        <ProfileLink />
      </li>
      <li className="header-actions__item header-actions__item_cart">
        <Cart />
      </li>
    </ul>
  );
}

export default Actions;

import { useEffect, useState } from "react";

const Cart = () => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const handleCartResponse = cart => setCounter(cart.item_count ? cart.item_count : 0);

    window.handleCartResponse = handleCartResponse;

    const script = document.createElement('script');

    script.src = 'https://shop.backyardbrains.com/cart.json?callback=handleCartResponse';
    script.async = true;

    document.body.appendChild(script);

    return () => {
      delete window.handleCartResponse;

      document.body.removeChild(script);
    }
  }, []);

  return (
    <>
      <a
        href="https://shop.backyardbrains.com/cart"
        className="header-action"
      >
        <section
          data-wpshopify-component=""
          data-wpshopify-component-id="78f02513ba640d338597cde802fb099e5142"
          data-wpshopify-component-type="cartIcon"
          data-wpshopify-payload-settings="eyJpY29uIjoiaHR0cHM6XC9cL2FwcGxpZWRzY2kub3JnXC93cC1jb250ZW50XC90aGVtZXNcL2JhY2t5YXJkLWJyYWluc1wvc3RhdGljXC9pbWFnZXNcL2ljX3Nob3AgKDMpLnN2ZyIsInR5cGUiOiJpbmxpbmUiLCJzaG93X2NvdW50ZXIiOnRydWUsImNvdW50ZXJfdGV4dF9jb2xvciI6IiMwMDAwMDAiLCJjb3VudGVyX2JhY2tncm91bmRfY29sb3IiOiIjZmZmZmZmIn0="
        >
          <div
            role="button"
            aria-label="Cart icon"
            className="cart-button swp-cart-icon swp-cart-icon-inline wps-btn-cart wps-cart-is-empty css-tboa3q-cartIconCSS-cartIconInlineCSS-CartIcon"
          >
            <span className="swp-cart-counter wps-cart-counter css-4stm4l-counterCSS-customCounterCSS-CartCounter">
              <span
                className="swp-cart-counter-text css-1o631kb-counterTextCSS"
                aria-label={`Number of items in cart: ${counter}`}
              >
                {counter}
              </span>
            </span>
          </div>
        </section>
      </a>
      <span className="header-actions__label">My cart</span>
    </>
  );
}

export default Cart;

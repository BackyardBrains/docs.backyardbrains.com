import { useState, useEffect } from "react";

const HeaderBanner = () => {
  const [hidden, setHidden] = useState(true);

  const handleClose = () => {
    setHidden(true);

    document.cookie = 'header-banner-hidden=1; path=/';
  }

  useEffect(() => {
    const bannerHidden = document.cookie.split('; ').find(row => row.startsWith('header-banner-hidden='));

    if (!bannerHidden) {
      setHidden(false);
    }
  }, []);

  if (hidden) {
    return null;
  }

  return (
    <div className="header-banner">
      <div className="container">
        <div className="header-banner__inner">
          <div className="header-banner__content p-wrapper">
            <p>Unlock the mysteries of neuroscience with Backyard Brains: hands-on experiments bringing brain science to your backyard</p>
          </div>
          <button
            className="header-banner__close"
            onClick={handleClose}
          >
            <svg
              width="12px"
              height="12px"
              viewBox="0 0 12 12"
              className="header-banner__close-icon"
            >
              <g
                stroke="none"
                strokeWidth="1"
                fill="none"
                fillRule="evenodd"
              >
                <g
                  transform="translate(-1236.000000, -27.000000)"
                  fill="#FFFFFF"
                  fillRule="nonzero"
                >
                  <g transform="translate(1236.000000, 27.000000)">
                    <path d="M7.40863871,5.99914736 L11.7044873,1.7126801 C12.0962309,1.32088084 12.0962309,0.685648715 11.7044873,0.293849449 C11.3127437,-0.0979498165 10.6776018,-0.0979498165 10.2858582,0.293849449 L6,4.59030847 L1.7141418,0.293849449 C1.3223982,-0.0979498065 0.687256347,-0.0979498018 0.295512755,0.29384946 C-0.0962308371,0.685648722 -0.0962308418,1.32088083 0.295512745,1.7126801 L4.59136129,5.99914736 L0.295512745,10.2856146 C0.106382866,10.4732266 8.87320924e-16,10.728612 8.87320924e-16,10.9950299 C8.87320924e-16,11.2614479 0.106382866,11.5168333 0.295512745,11.7044453 C0.483098064,11.893602 0.738447162,12 1.00482727,12 C1.27120738,12 1.52655648,11.893602 1.7141418,11.7044453 L6,7.40798624 L10.2858582,11.7044453 C10.4734435,11.893602 10.7287926,12 10.9951727,12 C11.2615528,12 11.5169019,11.893602 11.7044873,11.7044453 C11.8936171,11.5168333 12,11.2614479 12,10.9950299 C12,10.728612 11.8936171,10.4732266 11.7044873,10.2856146 L7.40863871,5.99914736 Z" />
                  </g>
                </g>
              </g>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default HeaderBanner;

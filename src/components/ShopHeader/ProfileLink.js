const ProfileLink = () => {
  return (
    <a
      href="https://shop.backyardbrains.com/account"
      className="header-action"
    >
      <svg
        width="22px"
        height="24px"
        viewBox="0 0 22 24"
        className="header-action__icon"
      >
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g transform="translate(1.000000, 1.000000)">
            <path
              d="M0,18.2421723 C0,13.137603 4.47769057,9 9.99947321,9 C15.5223094,9 20,13.137603 20,18.2421723 L20,20.9726592 C20,21.5403745 19.502713,22 18.8884792,22 L1.11152083,22 C0.497287046,22 0,21.5403745 0,20.9726592 L0,18.2421723 Z"
              fill="#FFFFFF"
              className="header-action__fill"
            />
            <path
              d="M0,18.2421723 C0,13.137603 4.47769057,9 9.99947321,9 C15.5223094,9 20,13.137603 20,18.2421723 L20,20.9726592 C20,21.5403745 19.502713,22 18.8884792,22 L1.11152083,22 C0.497287046,22 0,21.5403745 0,20.9726592 L0,18.2421723 Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              className="header-action__stroke"
            />
            <path
              d="M16,6 C16,9.31335436 13.3131189,12 9.99947419,12 C6.68582946,12 4,9.31335436 4,6 C4,2.68664564 6.68582946,0 9.99947419,0 C13.3131189,0 16,2.68664564 16,6"
              fill="#FFFFFF"
              className="header-action__fill"
            />
            <path
              d="M16,6 C16,9.31335436 13.3131189,12 9.99947419,12 C6.68582946,12 4,9.31335436 4,6 C4,2.68664564 6.68582946,0 9.99947419,0 C13.3131189,0 16,2.68664564 16,6 Z"
              stroke="#000000"
              strokeWidth="2"
              strokeLinecap="round"
              className="header-action__stroke"
            />
          </g>
        </g>
      </svg>
      <span className="header-action__label">My account</span>
    </a>
  );
}

export default ProfileLink;
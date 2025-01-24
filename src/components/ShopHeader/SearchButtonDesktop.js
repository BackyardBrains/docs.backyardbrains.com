const SearchButtonDesktop = ({ onClick }) => {
  return (
    <a
      href="#"
      className="header-action"
      onClick={onClick}
    >
      <svg
        width="22.0000033px"
        height="21.9999033px"
        viewBox="0 0 22.0000033 21.9999033"
        className="header-action__icon"
      >
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
          strokeLinecap="round"
        >
          <g
            transform="translate(1.000003, 1.000000)"
            stroke="#000000"
            strokeWidth="2"
            className="header-action__stroke"
          >
            <path
              d="M20,7.077 C20,10.985 16.832,14.154 12.923,14.154 C9.015,14.154 5.846,10.985 5.846,7.077 C5.846,3.168 9.015,0 12.923,0 C16.832,0 20,3.168 20,7.077 Z"
              fill="#FFFFFF"
              className="header-action__fill"
            />
            <line
              x1="7.5"
              y1="11.9999"
              x2="0"
              y2="19.9999"
            />
          </g>
        </g>
      </svg>
    </a>
  );
}

export default SearchButtonDesktop;

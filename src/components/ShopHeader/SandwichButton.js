const SandwichButton = ({ onClick }) => {
  return (
    <a
      href="#"
      className="header-sandwich"
      onClick={onClick}
    >
      <svg
        width="20px"
        height="12px"
        viewBox="0 0 20 12"
        className="header-sandwich__icon"
      >
        <g
          stroke="none"
          strokeWidth="1"
          fill="none"
          fillRule="evenodd"
        >
          <g
            transform="translate(-26.000000, -44.000000)"
            fill="#000000"
            fillRule="nonzero"
          >
            <g transform="translate(26.000000, 44.000000)">
              <path d="M1,2 L19,2 C19.5522847,2 20,1.55228475 20,1 C20,0.44771525 19.5522847,0 19,0 L1,0 C0.44771525,0 0,0.44771525 0,1 C0,1.55228475 0.44771525,2 1,2 Z M19,10 L1,10 C0.44771525,10 0,10.4477153 0,11 C0,11.5522847 0.44771525,12 1,12 L19,12 C19.5522847,12 20,11.5522847 20,11 C20,10.4477153 19.5522847,10 19,10 Z M19,5 L1,5 C0.44771525,5 0,5.44771525 0,6 C0,6.55228475 0.44771525,7 1,7 L19,7 C19.5522847,7 20,6.55228475 20,6 C20,5.44771525 19.5522847,5 19,5 Z" />
            </g>
          </g>
        </g>
      </svg>
    </a>
  );
}

export default SandwichButton;
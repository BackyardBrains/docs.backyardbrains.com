const Overlay = ({ isOverlayVisible, setIsMobileNavVisible, setIsOverlayVisible }) => {
  const handleClick = () => {
    setIsMobileNavVisible(false);
    setIsOverlayVisible(false);
  }

  return (
    <div
      className={`overlay ${isOverlayVisible ? 'overlay_active' : ''}`}
      onClick={handleClick}
    />
  );
}

export default Overlay;

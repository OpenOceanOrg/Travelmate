import "../Css/Navbar.css"
const Service = () => {
  return (
    <div className="service">
      <div className="service-child" />
      <img
        className="icon-park-outlineworld"
        alt=""
        src="../iconparkoutlineworld.svg"
      />
      <div className="city-search">
        <div className="city-search1">
          <div className="from">from</div>
          <div className="to">to</div>
        </div>
        <div className="rounded-rectangle">
          <div className="rounded-rectangle1" />
          <div className="search-your-city">Search your city</div>
        </div>
        <div className="rounded-rectangle2">
          <div className="rounded-rectangle1" />
          <div className="search-your-city">Search your city</div>
        </div>
      </div>
      <div className="select-your-travel">Select your travel destination .</div>
      <img className="group-icon" alt="" src="../group.svg" />
      <img className="group-icon1" alt="" src="../group1.svg" />
    </div>
  );
};

export default Service;

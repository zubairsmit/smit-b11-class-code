import Logo from "../../assets/img/header-logo.svg";

const Header = () => {
  return (
    <div className="header">
      <header>
        <nav>
          <ul>
            <li>
              <a href="#">
                <img src={Logo} alt="logo" />
              </a>
            </li>
            <li>
              <a href="#">Collection</a>
            </li>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Contact</a>
            </li>
            <li>
              <a href="#">Donate</a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
};

export default Header;

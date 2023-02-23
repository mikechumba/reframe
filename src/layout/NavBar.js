import Logo from "@/assets/Logo";
import { useRef } from "react";

const NavBar = () => {
  const btnRef = useRef();

  const toggleMenu = (e) => {
    const el = e.currentTarget;
    const ariaExpanded = el.ariaExpanded === 'false' ? 'true' : 'false';
    btnRef.current.setAttribute('aria-expanded', ariaExpanded);
    if (ariaExpanded === 'true') {
      btnRef.current.nextSibling.classList.add('active');
    } else {
      btnRef.current.nextSibling.classList.remove('active');
    }
  }

  return (
    <nav className="main-nav flex flex-row align-items-center justify-content-between">
      <div className="logo">
        <a href="/">
          <Logo />
          <span className="visually-hidden">Reframe Home</span>
        </a>
      </div>
      <button className="ham" onClick={toggleMenu} ref={btnRef} aria-label="Menu" aria-expanded="false" aria-controls="menu">
        <div className="ham-icon">
          <div></div>
          <div></div>
          <div></div>
        </div>
      </button>
      <ul className="" id="menu">
        <li>
          <a href="">Opportunities</a>
        </li>
        <li>
          <a href="">Resources</a>
        </li>
        <li>
          <a className="btn btn-primary" href="">
            Sign In
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default NavBar;
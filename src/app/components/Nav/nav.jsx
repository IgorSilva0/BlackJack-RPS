import './nav.css'

const Nav = () => (
    <nav className="sideNavBar">
          <ul className="ulSideBar">
            <li>
              <a href="#Home"><i className="fa-solid fa-house fa-lg">1</i></a>
            </li>
            <li>
              <a href="#Games"><i className="fa-solid fa-gamepad fa-lg">2</i></a>
            </li>
            <li>
              <a href="#Gallery"><i className="fa-solid fa-image fa-lg">3</i></a>
            </li>
            <li>
              <a href="#Bell"><i className="fa-solid fa-bell fa-lg">4</i></a>
            </li>
            <li>
              <a href="#Settings"><i className="fa-solid fa-gear fa-lg">5</i></a>
            </li>
            <li>
              <a href="#Ranking"><i className="fa-solid fa-ranking-star fa-lg">6</i></a>
            </li>
            <li id="nightMode">
              <a href="#DarkMode"><i className="fa-solid fa-moon fa-lg">7</i></a>
            </li>
            <li id="lightMode">
              <a href="#LightMode"><i className="fa-solid fa-sun fa-lg">8</i></a>
            </li>
          </ul>
        </nav>
  )
export default Nav
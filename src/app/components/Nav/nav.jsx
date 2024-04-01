import { FaHome,FaGamepad,FaImages,FaBell,FaCogs,FaSun } from "react-icons/fa"; // Icons
import { FaRankingStar } from "react-icons/fa6"; // Icon
import Link from "next/link";
import './nav.css'

const Nav = () => (
    <nav className="sideNavBar">
          <ul className="ulSideBar">
            <li>
              <Link href="#Home"><FaHome className="navBtn"/></Link>
            </li>
            <li>
              <Link href="#Games"><FaGamepad className="navBtn" size="25px"/></Link>
            </li>
            <li>
              <Link href="#Gallery"><FaImages className="navBtn" /></Link>
            </li>
            <li>
              <Link href="#Bell"><FaBell className="navBtn"/></Link>
            </li>
            <li>
              <Link href="#Settings"><FaCogs className="navBtn"/></Link>
            </li>
            <li>
              <Link href="#Ranking"><FaRankingStar className="navBtn"/></Link>
            </li>
            <li id="lightMode">
              <Link href="#LightMode"><FaSun className="navBtn"/></Link>
            </li>
          </ul>
        </nav>
  )
export default Nav
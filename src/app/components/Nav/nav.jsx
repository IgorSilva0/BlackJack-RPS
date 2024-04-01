import { FaHome,FaGamepad,FaCogs,FaSun } from "react-icons/fa"; // Icons
import { FaRankingStar,FaRocketchat } from "react-icons/fa6"; // Icon
import Link from "next/link";
import './nav.css'

const Nav = () => (
    <nav className="sideNavBar">
          <ul className="ulSideBar">
            <li>
              <Link href="/"><FaHome className="navBtn"/></Link>
            </li>
            <li>
              <Link href="/games"><FaGamepad className="navBtn" size="25px"/></Link>
            </li>
            <li>
              <Link href="/feedback"><FaRocketchat className="navBtn" /></Link>
            </li>
            <li>
              <Link href="/settings"><FaCogs className="navBtn"/></Link>
            </li>
            <li>
              <Link href="/ranking"><FaRankingStar className="navBtn"/></Link>
            </li>
            <li id="lightMode">
              <Link href="/lightMode"><FaSun className="navBtn"/></Link>
            </li>
          </ul>
        </nav>
  )
export default Nav
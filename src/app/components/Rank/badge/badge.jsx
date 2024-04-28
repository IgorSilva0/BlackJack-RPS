import { FaStar } from "react-icons/fa";
import '../rank.css'

const Badge = ({ color }) => {
    return(
        <li className="tooltip">
        <div className="image-container">
          <img src="/imgs/rank-img.png" alt="Rank Image" />
          <FaStar className="trophy-badge" color={color}/>
        </div>
        <span className="tooltiptext">Test3</span>
        <p className="score"><i id="top3">0</i></p>
      </li>
    )
}
export default Badge
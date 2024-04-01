import { FaStar } from "react-icons/fa";
import './rank.css'

const Rank = () => (
    <div className="rank">
    <ul>
      <li className="tooltip">
        <div className="image-container">
          <img src="./rank-img.png" alt="Rank Image" />
          <FaStar className="trophy-badge" color="gold"/>
        </div>
        <span className="tooltiptext">Test3</span>
        <p className="score"><i id="top3">0</i></p>
      </li>
    
      <li className="tooltip">
        <div className="image-container">
          <img src="./rank-img.png" alt="Rank Image" />
          <FaStar className="trophy-badge" color="silver"/>
        </div>
        <span className="tooltiptext">Test3</span>
        <p className="score"><i id="top3">0</i></p>
      </li>

      <li className="tooltip">
        <div className="image-container">
          <img src="./rank-img.png" alt="Rank Image" />
          <FaStar className="trophy-badge" color="#f7a206"/>
        </div>
        <span className="tooltiptext">Test3</span>
        <p className="score"><i id="top3">0</i></p>
      </li>
    </ul>
  </div>
)

export default Rank
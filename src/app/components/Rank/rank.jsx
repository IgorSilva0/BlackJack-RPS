import './rank.css'

const Rank = () => (
    <div className="rank">
    <ul>
      <li>
        <a><i className="fa-solid fa-circle-user fa-2xl"></i></a>
      </li>
      <li className="tooltip">
      <img/>
        <span className="tooltiptext">Test1</span>
        <i className="fa-solid fa-trophy fa-2xs" id="top1"> 0</i>
      </li>
      <li className="tooltip">
      <img/>
        <span className="tooltiptext">Test2</span>
        <i className="fa-solid fa-trophy fa-2xs" id="top2"> 0</i>
      </li>
      <li className="tooltip">
        <img/>
        <span className="tooltiptext">Test3</span>
        <i className="fa-solid fa-trophy fa-2xs" id="top3"> 0</i>
      </li>
    </ul>
  </div>
)

export default Rank
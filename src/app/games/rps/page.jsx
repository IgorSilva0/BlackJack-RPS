"use client"
import './page.css'
//import Loading from '../../util/loading/loading.jsx'

const Rps = () => {
    return (
        <div className='rpsContent'>
           <h2>Rock, Paper and Scissors</h2>
           <h3>Welcome to the Game!</h3>
           <img src='/imgs/rps.png' alt='Game Rules Image' className='rules'/>
           <br/>
           <button className='playRps'>PLAY</button>
        </div>
    )
}

export default Rps
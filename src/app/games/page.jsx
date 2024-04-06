"use client"
import './page.css'
import Link from "next/link";

const Games = () => {
  return (
    <>
      <h2>Playtime Collection</h2>

      <Link href="/games/blackjack"><button className='btnStyle'>BlackJack</button></Link>
      <br/>
      <Link href="/games/rps"><button className='btnStyle'>Rock, Paper and Scissors</button></Link>
    
    </>
  );
};

export default Games;
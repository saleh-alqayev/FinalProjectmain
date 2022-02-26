import React from 'react'
import Project1 from '../Components/img/home1.png'
import Project2 from '../Components/img/music-player1.png'
import Project3 from '../Components/img/rock-paper1.png'

function Aboutprojects() {
  return (
    <div className='projects'>
        <div className="flip-card1">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Project1} alt="" className='img-home'/>
                </div>
                <div className="flip-card-back">
                    <h2>Design Your House</h2>
                    <p>This Is website that you can design yoour house and log in . </p>
                    <a href="https://github.com/saleh-alqayev/Design-your-home">Go Project</a>
                </div>
            </div>
        </div>

        <div className="flip-card2">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Project2} alt="" className='img-musicplayer'/>
                </div>
                <div className="flip-card-back">
                    <h2>Music Player</h2>
                    <p>This Is Music Player App . I used to HTML , Javascrpit and CSS . You can listen , reply and stop music in this app</p>
                    <a href="https://github.com/saleh-alqayev/Music-player">Go Project</a>
                </div>
            </div>
        </div>

        <div className="flip-card3">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img src={Project3} alt="" className='img-rock-paper'/>
                </div>
                <div className="flip-card-back">
                    <h2>Rock-Paper-Scissors</h2>
                    <p>This is game that we played this game in our childhood. You have got 3 choice in this game: rock,paper,scissors. This game has got own rules.</p>
                    <a href="https://github.com/saleh-alqayev/js-oyun">Go Project</a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Aboutprojects
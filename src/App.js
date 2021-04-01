import React, { Component } from 'react'
import './css/App.css'
import Card from './components/Card.js'
import Confetti from './components/Confetti.js'
document.write( '<div class=\"embedsocial-hashtag\" data-ref=\"a9f1679cabfe621ebd8dd0ed6fe52de3448ba29a\" ><a class=\"feed-powered-by-es\" href=\"https://embedsocial.com/products/embedfeed/\" target=\"_blank\" title=\"Powered by EmbedSocial\">Powered by EmbedSocial<span>→</span></a></div><script>(function(d, s, id){var js; if (d.getElementById(id)) {return;} js = d.createElement(s); js.id = id; js.src = \"https://embedsocial.com/cdn/ht.js\"; d.getElementsByTagName(\"head\")[0].appendChild(js);}(document, \"script\", \"EmbedSocialHashtagScript\"));</script>' );

function App () {
  return (
    <div className='App'>
      <div className='logo'>C A L E B</div>

      <div className='top-half'>
        <img
          className='profilePic'
          src={require('./assets/profilePic-removebg-preview.png')}
        />

        <h1>
          Hello, I'm Caleb Burbach ✌️ <br></br>
          <a className='name' href='https://www.instagram.com/ui.burb/'>
            Welcome to my portfolio
          </a>
        </h1>
      </div>
      <Confetti></Confetti>
      {/* <div className='cards'>
        <Card title='Parkd' id='ParkdCard'></Card>
        <Card title='UNL Food Delivery' id='UNLFDCard'></Card>
        <Card title='Frat Payment Web-App' id='FratPaymentCard'></Card>
        <Card title='Sonic App Redesign' id='SonicCard'></Card>
        <Card title='UNL Baseball App' id='BaseballCard'></Card>
        <Card title='Wail Mail' id='WailMailCard'></Card>
        <Card title='Wikipedia Redesign' id='WikipediaCard'></Card>
        <Card title='Spotify Redesign' id='SpotifyCard'></Card>

      </div> */}
    </div>
  )
}

export default App

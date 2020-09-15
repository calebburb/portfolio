import React, { Component } from 'react'
import './css/App.css'
import Card from './components/Card.js'
import Confetti from './components/Confetti.js'

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
      <div className='cards'>
        <Card title='Parkd' id='ParkdCard'></Card>
        <Card title='UNL Food Delivery' id='UNLFDCard'></Card>
        <Card title='Frat Payment Web-App' id='FratPaymentCard'></Card>
        <Card title='Sonic App Redesign' id='SonicCard'></Card>
        <Card title='UNL Baseball App' id='BaseballCard'></Card>
        <Card title='Wail Mail' id='WailMailCard'></Card>
        <Card title='Wikipedia Redesign' id='WikipediaCard'></Card>
        <Card title='Spotify Redesign' id='SpotifyCard'></Card>
      </div>

      <div className='footer'></div>
    </div>
  )
}

export default App

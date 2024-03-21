import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Buttery Meek Quetzal</title>
        <meta property="og:title" content="Buttery Meek Quetzal" />
      </Helmet>
      <img
        alt="image"
        src="/img_20240314_100644_550-600h.jpg"
        className="home-image"
      />
      <animate-on-reveal
        animation="flash"
        duration="6000ms"
        delay="0s"
        direction="normal"
        easing="ease"
        iteration="80"
      >
        <span data-thq-animate-on-reveal="true" className="home-text">
          <span>
            KYLE
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            FRANK
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>
            RICHARD
            <span
              dangerouslySetInnerHTML={{
                __html: ' ',
              }}
            />
          </span>
          <br></br>
          <span>BERLAGE</span>
        </span>
      </animate-on-reveal>
    </div>
  )
}

export default Home

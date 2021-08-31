import React,{useState,useEffect} from 'react'
import './style.scss'
import Section2Img from './assets/section2.png'
import Section3Astronaut from './assets/Section3Astronaut.png'
import Section3Planet from './assets/Section3Planet.png'
import {Button} from '@material-ui/core'
import {redirectToUrl} from 'utils/common'
import {APP_ROUTES} from 'utils/constants'
function Home(props) {
  return (
    <div className="HomeComponent">
      <div className="section1">
        <div className="content">
          <h2>Welcome to the KidCode space!</h2>
          <h2>We make Coding Easy</h2>
        </div>
        <Button variant="contained" disableElevation color="primary" onClick={()=>redirectToUrl(APP_ROUTES.DASHBOARD)}>Come check us out !</Button>
      </div>
      <div className="section2">
        <div className="innerContainer">
          <div className="textContainer">
            <h2>Why Choose Us</h2>
            <div className="text">
              <ul className="point">
                <li>
                  Custom algorithms for personalised learning
                  <ul className="subPoint">
                    <li>AI algorithms to help each kid in achieving their learning goals</li>
                  </ul>
                </li>
              </ul>
              <ul className="point">
                <li>
                  Trusted Content 
                  <ul className="subPoint">
                    <li>Made by coders for the next generation coders</li>
                  </ul>
                </li>
              </ul>
              <ul className="point">
                <li>
                  We Care 
                  <ul className="subPoint">
                    <li>We care about the kids safety online </li>
                  </ul>
                </li>
              </ul>
              <ul className="point">
                <li>
                  Age specific content
                  <ul className="subPoint">
                    <li>Learn the same concepts in different animations as per users choice.</li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="image">
          <img src={Section2Img} alt="" />
        </div>
      </div>
      <div className="section3">
        <div className="innerContainer1">
          <div className="astronaut">
            <img src={Section3Astronaut} alt="" />
          </div>
          <div className="textContainer">
            <h2>Ease of Learning Code</h2>
            <h2>Begins here</h2>
            <div className="description">
              <div className="point">
                <div className="text">
                  <h3>Learning through animation</h3>
                  <p>
                    Get The Best Lessons anytime. Zero Downtime and its a promise.
                  </p>
                </div>
                <div className="image">
                    <div className="img"></div>
                </div>
              </div>
              <div className="point">
                <div className="text">
                  <h3>Integrated terminal for insights</h3>
                  <p>
                    Code on the platform. Zero Setup 
                  </p>
                </div>
                <div className="image">
                    <div className="img"></div>
                </div>
              </div>
            </div>
          </div>
        </div>  
        <div className="innerContainer2">
          <div className="textContainer">
            <h3>Ready to get started !</h3>
            <p>
              Dive in to learn how to code<br/>
              We teach coding to kids using animation videos <br/>
              It's 100% free, fun and secure
            </p>
          </div>
          <div className="image">
            <img src={Section3Planet} alt="" />
          </div>
        </div>
      </div>
      <div className="dividerSection"></div>
    </div>
  )
}

export default Home

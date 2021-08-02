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
          <h2>Welcome to the KidsCode space!</h2>
          <h2>We make Coding Easy</h2>
        </div>
        <Button variant="contained" disableElevation color="primary" onClick={()=>redirectToUrl(APP_ROUTES.DASHBOARD)}>Come check us out !</Button>
      </div>
      <div className="section2">
        <div className="innerContainer">
          <div className="textContainer">
            <h2>Why Choose Us</h2>
            <div className="text">
              <p>
                Tempor cillum sint deserunt commodo consectetur qui nisi dolore laboris eiusmod.
                 Ad ea reprehenderit laboris quis exercitation. Do consectetur officia aliqua in 
                 minim aliquip nostrud amet duis amet adipisicing. Reprehenderit anim ad duis tempor sit sit.
              </p>
              <p>
                Tempor cillum sint deserunt commodo consectetur qui nisi dolore laboris eiusmod.
                 Ad ea reprehenderit laboris quis exercitation. Do consectetur officia aliqua in 
                 minim aliquip nostrud amet duis amet adipisicing. Reprehenderit anim ad duis tempor sit sit.
              </p>
              <p>
                Tempor cillum sint deserunt commodo consectetur qui nisi dolore laboris eiusmod.
                 Ad ea reprehenderit laboris quis exercitation. Do consectetur officia aliqua in 
                 minim aliquip nostrud amet duis amet adipisicing. Reprehenderit anim ad duis tempor sit sit.
              </p>
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
                  <h3>Videos</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Temporibus, facere 
                    eius accusamus molestiae doloribus dicta ea,officiis doloremque labore voluptates,
                    sunt aperiam. Magni, earum praesentium. Nemo eos enim eligendi voluptatem.
                  </p>
                </div>
                <div className="image">
                    <div className="img"></div>
                </div>
              </div>
              <div className="point">
                <div className="text">
                  <h3>Zero Setup</h3>
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit.Temporibus, facere 
                    eius accusamus molestiae doloribus dicta ea,officiis doloremque labore voluptates,
                    sunt aperiam. Magni, earum praesentium. Nemo eos enim eligendi voluptatem.
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
            <h3>Get The Best Lessons RIght on demand</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Temporibus, facere 
              eius accusamus molestiae doloribus dicta ea,officiis doloremque labore voluptates,
              sunt aperiam. Magni, earum praesentium. Nemo eos enim eligendi voluptatem.
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.Temporibus, facere 
              eius accusamus molestiae doloribus dicta ea,officiis doloremque labore voluptates,
              sunt aperiam. Magni, earum praesentium. Nemo eos enim eligendi voluptatem.
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

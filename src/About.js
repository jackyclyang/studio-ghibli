import React, { Component } from 'react'
import Ghibli from './Studio_Ghibli.png'
import collage from './Group.png'

export default class About extends Component {
  render() {
    return (
      <div classname='about'>
        <h2 className="page-title"> - About Studio Ghibli - </h2>
        <div className='about-section'>

          <p className='about-text'>Studio Ghibli Inc. (Japanese: 株式会社スタジオジブリ, Hepburn: Kabushiki gaisha Sutajio Jiburi) is a Japanese animation film studio headquartered in Koganei, Tokyo, Japan. The studio is best known for its animated feature films. It was founded on 15 June 1985 by directors Hayao Miyazaki and Isao Takahata and producer Toshio Suzuki with funding by Tokuma Shoten. </p>
          <img src={Ghibli} width="400px" className='about-img'></img>
        </div>
        <div className="about-section">
          <img src={collage} width="450px" className='about-img'></img>
          <p className='about-text'>
            Studio Ghibli films have garnered numerous awards and critical acclaim from film critics and animation specialists around the world. Spirited Away (2001) was awarded the Golden Bear as the Best Feature Film at the 2002 Berlin International Film Festival and won the 2002 Academy Award for Best Animated Feature Film. .
            <br />
            <br />
            <br />
            <br />
            On October 17, 2019, HBO Max acquired exclusive streaming rights to Studio Ghibli's catalogue in the United States as part of a deal with GKIDS. With the exception of Grave of the Fireflies, the Studio Ghibli films were made available for digital purchases on most major services in the United States and Canada on December 17, 2019.
            <br />
            <br />
          </p>

        </div>

      </div>
    )
  }
}

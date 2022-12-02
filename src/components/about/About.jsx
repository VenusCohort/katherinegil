import React from 'react'
import './about.css'
import ME from '../../assests/me_about.png'
import {FaAward} from 'react-icons/fa'
import {FaUserGraduate} from 'react-icons/fa'
import {CgUserlane} from 'react-icons/cg'

const about = () => {
  return (
   <section id='about'>
    <h5>Get To Know</h5>
    <h2>About Me</h2>

    <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-image'>
          <img src={ME} alt='About Me' />
        </div>
      </div>
      <div className='about_content'>
        <div className='about_cards'>

          <article className='about_card'>
            <FaAward className='about_icon' />
            <h5>Experience</h5>
            <small>CodeUp Full Stack Web Development</small>
          </article>

          <article className='about_card'>
            <CgUserlane className='about_icon' />
            <h5>Hobbies</h5>
            <small>Crossfit Athlete</small>
            {/* <small>Mountain Biking</small>
            <small>Personla Growth Enthusiastic</small> */}
          </article>

          <article className='about_card'>
            <FaUserGraduate className='about_icon' />
            <h5>Education</h5>
            <small>CodeUp 2022</small>
            {/* <small>William Peace University</small> */}
          </article>
        </div>

        <p>
        Software developer and Army Veteran with technical and management 
        experience as a logistics specialist. Utilizing full-stack languages 
        enhanced by the appropriate development frameworks in order to produce 
        efficient code that maximizes performance while maintaining existing 
        software functionality.
        </p>

        <a href='#contact' className='btn btn-primary'>Let's Talk</a>

      </div>


    </div>
   </section>
  )
}

export default about
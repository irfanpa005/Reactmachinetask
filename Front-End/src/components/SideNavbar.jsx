import React from 'react'
import './sidenavbar.css'
import briefcase from '../assets/Briefcase.png'
import shutdown from '../assets/Shutdown.png'
import circlemenu from '../assets/Circled Menu.png'
import support from '../assets/Support.png'
import puzzle from '../assets/Puzzle.png'
import help from '../assets/Help.png'

function SideNavbar() {
  return (
    <div className='sideNavContainer'>
      <div className='brfCaseImgContainer'>
        <img src={briefcase} className='brfCaseImg' />
        <h3>STATBOARD</h3>
      </div>
      <div className='sideNavButtons'>
        <ul>
            <li>
                <img src={circlemenu}></img>
                <p>Dashboard</p>
            </li>
            <li>
                <img src={support}></img>
                <p>Support</p>
            </li>
            <li>
                <img src={puzzle}></img>
                <p>Plugins</p>
            </li>
            <li>
                <img src={help}></img>
                <p>Help</p>
            </li>
        </ul>
      </div>
      <div className='logout'>
        <h4>Logout</h4>
        <img src={shutdown} className='shutdownImg' />
      </div>
    </div>
  )
}

export default SideNavbar

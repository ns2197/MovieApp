import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as RiIcons from 'react-icons/ri';
import {Link} from 'react-router-dom'
import SearchIcon from '../.././search.svg'

function Header() {

    const [clicked, setClicked] = useState(false)

    function handleClick () {
        setClicked(!clicked)
    }   
  return (

    <div className='navbar'>
        <h1 className='title'>
         <Link to = '/' >
            <RiIcons.RiMovie2Fill/> MyMovieApp
        </Link> 
        </h1>

        <ul className={clicked? 'nav-menu active' : 'nav-menu'}>
            <li><Link to = './about'>About</Link></li>
            <li><Link to = './contact'>Contact</Link></li>
            <li><Link to = './help'>Support</Link></li>
        </ul>
        <div className='profile'>
            <FaIcons.FaUser/>
        </div>
        <div className='menu-bars' onClick={handleClick}>
            {!clicked ? <FaIcons.FaBars/> : <FaIcons.FaTimes/>} 
        </div>
    </div>

  )
}

export default Header


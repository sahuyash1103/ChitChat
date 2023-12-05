import React from 'react'
import { MdCall } from "react-icons/md";
import { BsFillCameraVideoFill } from "react-icons/bs";
import { IoSearch } from "react-icons/io5";
import { MoreVertIcon } from '../../assets/svgs/'
import defaultPic from '../../assets/images/defaultPic.png';
import "./RightNavbar.css"

function RightNavbar() {
  return (
    <div className="right_header">
      <div className="main_content">
        <div className="f_profile_pic">
          <img className="pic" src={defaultPic} alt="friend profile pic" />
        </div>
        <div className="f_details">
          <h3>Sayma</h3>
          <p>Online</p>
        </div>
      </div>
      <div className='nav_icons'>
        <div className='icon_area'>
          <IoSearch className='icon' />
        </div>
        <div className='icon_area'>
          <BsFillCameraVideoFill className='icon disabled' />
        </div>
        <div className='icon_area'>
          <MdCall className='icon disabled' />
        </div>
        <div className='icon_area'>
          <MoreVertIcon className='icon' />
        </div>
      </div>
    </div>
  )
}

export default RightNavbar
import React from 'react'
import Topbar from '../topbar/Topbar';
import Records from '../records/Records';
import './mainContent.css'
const MainContent = () => {
  return (
    <div className='MainContent'>
      <Topbar/>
      <Records/>
    </div>
  )
}

export default MainContent

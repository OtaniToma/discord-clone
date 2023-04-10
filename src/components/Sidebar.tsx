import React from 'react';
import './Sidebar.scss';

const Sidebar = () => {
  return (
    <div className='sidebar'>

      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='./logo192.png' alt='' />
        </div>
        <div className='serverIcon'>
          <img src='./logo192.png' alt='' />
        </div>
      </div>

      <div className='sidebarRight'>
        <div className='sidebarIcon'>Discord</div>
      </div>

    </div>
  )
}

export default Sidebar
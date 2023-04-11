import React from 'react';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

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
        <div className='sidebarTop'>
          <div className='sidebarIcon'>Discord</div>
          <ExpandMoreIcon />
        </div>
      </div>

    </div>
  )
}

export default Sidebar
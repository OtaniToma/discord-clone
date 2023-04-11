import React from 'react';
import SidebarChannel from './SidebarChannel';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';

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
          <div>Discord</div>
          <ExpandMoreIcon />
        </div>

        <div className='sidebarChannels'>
          <div className='sidebarChannelsHeader'>
            <div className='sidebarHeader'>
              <ExpandMoreIcon />
              <h4>プログラミングチャンネル</h4>
            </div>
            <AddIcon className='sidebarAddIcon' />
          </div>

          <div className='sidebarChannelList'>
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
            <SidebarChannel />
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
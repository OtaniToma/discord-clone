import React, { useEffect, useState } from 'react';
import SidebarChannel from './SidebarChannel';
import { auth, db } from '../../firebase';
import './Sidebar.scss';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import AddIcon from '@mui/icons-material/Add';
import MicIcon from '@mui/icons-material/Mic';
import HeadphonesIcon from '@mui/icons-material/Headphones';
import SettingsIcon from '@mui/icons-material/Settings';
import { useAppSelector } from '../../app/hooks';
// import { collection, query } from 'firebase/firestore/lite';
import { onSnapshot, collection, query, DocumentData } from 'firebase/firestore';

interface Channel {
  id: string,
  channel: DocumentData;
}

const Sidebar = () => {
  const [channels, setChannels] = useState<Channel[]>([]);

  const user = useAppSelector((state) => state.user);

  const q = query(collection(db, 'channels'));

  useEffect(() => {
    onSnapshot(q, (querySnapshot) => {
      const channelResults: Channel[] = [];
      querySnapshot.docs.forEach((doc) =>
        channelResults.push({
          id: doc.id,
          channel: doc.data(),
        })
      );
      setChannels(channelResults);
    });
  }, [])

  return (
    <div className='sidebar'>

      <div className='sidebarLeft'>
        <div className='serverIcon'>
          <img src='./discordIcon.png' alt='' />
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
            {channels.map((channel) => (
              <SidebarChannel
                channel={channel}
                id={channel.id}
                key={channel.id}
              />
            ))}
          </div>

          <div className='sidebarFooter'>
            <div className='sidebarAccount'>
              <img src={user?.photo} onClick={() => auth.signOut()}/>
              <div className='accountName'>
                <h4>{user?.displayName}</h4>
                <span>#{user?.uid.substring(0, 4)}</span>
              </div>
            </div>

            <div className='sidebarVoice'>
              <MicIcon />
              <HeadphonesIcon />
              <SettingsIcon />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Sidebar
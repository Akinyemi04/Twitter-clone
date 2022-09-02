import TagIcon from '@mui/icons-material/Tag';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import HomeIcon from '@mui/icons-material/Home';
import ListAllIcon  from '@mui/icons-material/MoreHorizSharp'
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import BookmarkBorderOutlinedIcon from '@mui/icons-material/BookmarkBorderOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import tweep from './images/addtweep.jpg'
import {NavLink} from 'react-router-dom'
import { feed } from './store';

const Sidebar = () => {
  const homec = useSelector((value)=>{
    return(value.Feed.homecolor)
  })
  const explorec = useSelector((value)=>{
    return(value.Feed.explore)
  })
  const width = window.screen.width
  //console.log(typeof(width))
  const dispatch = useDispatch()

  function home(){
    dispatch(feed.homecoloring())
  }
  function explore(){
    dispatch(feed.exploring())
  }
  const windowx = window.location.href
  //console.log(windowx)
  if(windowx.includes('/home')){
    dispatch(feed.homecoloring())
  }
  else if(windowx.includes('/explore')){
    dispatch(feed.exploring())
  }
  return (
    <ul className='Sidebar' >
        <li className='clear' style={{color:'#50b7f5'}}><TwitterIcon/></li>
        {width < 440?<li className='side' onClick={home}style={{color:'#50b7f5'}}><NavLink to='/home' style={{color:homec}}><HomeIcon/><span>Home</span></NavLink></li>:<li className='side' style={{color:'#50b7f5'}}><HomeIcon/><span>Home</span></li>}

        {width < 440?<li onClick={explore} className='side'><NavLink to='/explore' style={{color:explorec}}><TagIcon/><span>Explore</span></NavLink></li>:<li className='side'><TagIcon/><span>Explore</span></li>}
        <li className='side'><NotificationsNoneOutlinedIcon/><span>Notifications</span></li>
        <li className='side'><EmailOutlinedIcon/><span>Messages</span></li>
        <li className='side'><BookmarkBorderOutlinedIcon/><span>Bookmarks</span></li>
        <li className='side'><ListAltOutlinedIcon/><span>Lists</span></li>
        <li className='side'><PersonOutlineOutlinedIcon/><span>Profile</span></li>
        <li className='side'><ListAllIcon/><span>Others</span></li>
        {width > 440?<li><button>Tweet</button></li>:<li><img src={tweep} alt='addtweet'/></li>}
    </ul>
  )
}

export default Sidebar

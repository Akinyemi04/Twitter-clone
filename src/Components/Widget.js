import {TwitterTweetEmbed,TwitterTimelineEmbed} from 'react-twitter-embed'
import SearchIcon from '@mui/icons-material/Search';
import Sidebar from './Sidebar';
const Widget = () => {
  const width = window.screen.width
  return (
    <div className={width< 440 && 'flex'}>

      { width < 441 &&<Sidebar/>}
      <div className='widget'>
          <header>
            <SearchIcon className='search'/>
            <input type='text' placeholder='Search Twitter'/>
          </header>
          <p className='ply'>What's Happening</p>
          <section className='sectionD'>
            <TwitterTweetEmbed tweetId={'1564984203250384898'}/>
            <TwitterTimelineEmbed sourceType='profile' screenName='milk' />
          </section>
      </div>
    </div>
  )
}

export default Widget
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Sidebar from './Sidebar'
import { login } from './store'
import { Avatar } from '@mui/material'
import PhotoSizeSelectActualOutlinedIcon from '@mui/icons-material/PhotoSizeSelectActualOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import PollOutlinedIcon from '@mui/icons-material/PollOutlined';
import FeedFlow from './FeedFlow'
import Widget from './Widget'
import { store } from './FbConfig'
import { feed } from './store'
import {collection,onSnapshot,addDoc } from 'firebase/firestore'


const Feed = () => {
    const dispatch = useDispatch()
    const width = window.screen.width
    const data = useSelector((val)=>{
        return(val.Feed.data)
    })
    const message = useSelector((val)=>{
        return(val.Feed.message)
    })
    console.log(data)
    const collect = collection(store,'posts')
    useDispatch(login.full())
    useEffect(()=>{
        
        onSnapshot(collect,(data)=>{
            dispatch(feed.pop((data.docs.map((item)=>{
                return item.data()
              }))))
          })
    },[dispatch,collect])
    function sendTweet(e){
        addDoc(collect,{
            text:message,
            Displayname:'Micheal',
            Username:'Light02',
            avatar:'https://pbs.twimg.com/profile_images/1553570218844250114/0CtUj0NC_400x400.jpg',
            verified: false,
            //image:'./images/meme.jpg',
          })
          .then(()=>{
            console.log('data added')
          })
          dispatch(feed.empty())
         const write= document.getElementById('texting')
         write.value = null
         
    }
  return (
    <div className='feed'>
        <Sidebar/>
        <main>
            <p className='pin'>Home <AutoAwesomeIcon/></p>
            <section className='tion'>
            <Avatar className='avatarx' src='https://pbs.twimg.com/profile_images/1553570218844250114/0CtUj0NC_400x400.jpg'/>
            <input onKeyDown={(e)=>{
                if (e.code === 'Enter'){
                    addDoc(collect,{
                        text:message,
                        Displayname:'Micheal',
                        Username:'Light02',
                        avatar:'https://pbs.twimg.com/profile_images/1553570218844250114/0CtUj0NC_400x400.jpg',
                        verified:`${true}`,
                        //image:{meme},
                      })
                      dispatch(feed.empty())
                      e.target.value= null
                }

            }} onChange={(e)=>{dispatch(feed.tweet(e.target.value))}} type="text" id='texting' placeholder='Whats Happening?' />
            </section>
            <footer className='ffoot'>
                <div>
                    <PhotoSizeSelectActualOutlinedIcon/>
                    <GifBoxOutlinedIcon/>
                    <PollOutlinedIcon/>
                    <SentimentSatisfiedOutlinedIcon/>
                </div>
                <button onClick={sendTweet} >Tweet</button>
            </footer>
            {data.map((val,index)=>{
                return(<FeedFlow key={index} Dname={val.Displayname} Uname={val.Username} image={val.image} content={val.text} verified={val.verified} avatar={val.avatar} />)
            })}
        </main>
        {width > 440 &&<Widget/>}
    </div>
  )
}

export default Feed
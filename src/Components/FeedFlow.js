import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import RepeatIcon from '@mui/icons-material/Repeat';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import UploadIcon from '@mui/icons-material/Upload';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';
import { Avatar } from '@mui/material';

const FeedFlow = (props) => {

  return (
    <div className='flow' >
        <header>
            <Avatar className='avatar' src={props.avatar}/>
            <span className='dname'>{props.Dname}</span>
            {props.verified=== true && <VerifiedUserIcon className='verify'/>}
            <span>@{props.Uname}</span>
        </header>
        <p className='pack'>{props.content}</p>
        {props.image &&<img src={props.image} alt="error" />}
        <footer>
            <ChatBubbleOutlineIcon className='chat'/>
            <RepeatIcon className='retweet'/>
            <FavoriteBorderIcon className='like'/>
            <UploadIcon className='share'/>
        </footer>
    </div>
  )
}

export default FeedFlow
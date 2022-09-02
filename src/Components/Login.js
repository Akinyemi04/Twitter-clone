import { login } from './store';
import { useDispatch,useSelector } from 'react-redux';
import  mobile from './images/mobile.png'
import tablet from './images/tablet.png'
import laptop from './images/laptop.png'
import TwitterIcon from '@mui/icons-material/Twitter';
import AppleIcon from '@mui/icons-material/Apple';
import google from './images/google.png'
import { getAuth, GoogleAuthProvider,signInWithPopup,OAuthProvider } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
import { useEffect } from 'react';
import SignUp from './SignUp';

const Login = () => {
    const dispatch= useDispatch()
    dispatch(login.fill())
    const navigate = useNavigate()
    const auth = getAuth()
    const googleprovider = new GoogleAuthProvider()
    const provider = new OAuthProvider('apple.com');
    useEffect(()=>{
        let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/')
        }
    },[])
    function create(){
        dispatch(login.Information('Create Your Account'))
        dispatch(login.display())
    }
    function  Signing(){
        dispatch(login.Information('Sign In'))
        dispatch(login.display())
    }
    function Googlei(){
        signInWithPopup(auth,googleprovider)
        .then((res)=>{
            navigate('/home')
            sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        })
        .catch((err)=>{
            dispatch(login.fixerror(err.message))
        })
    }
    function Apple(){
        signInWithPopup(auth,provider)
        .then((res)=>{
            navigate('/home')
            sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
        })
        .catch((err)=>{
            dispatch(login.fixerror(err.message))
        })
    }
  return (
    <>
        <div className='login'>
            <picture >
                <source srcSet={mobile} media='(max-width:440px)'></source>
                <source srcSet={tablet} media='(max-width:1016px)'></source>
                <img src={laptop} alt='' className='image'></img>
            </picture>
            <main>
                <span style={{color:'#50b7f5'}}><TwitterIcon/></span>
                <h1>Happening now</h1>
                <h3>Join Twitter Today .</h3>
                <button className='google' onClick={Googlei}><img src={google} alt ='google'/><span className='spanner'> Continue with Google </span></button>
                <button className='apple' onClick={Apple}><AppleIcon/><span className='spanner'> Continue With Apple</span></button>
                <div className='holder'>
                    <hr className='lhr'/>
                <span className='or'>or</span>
                <hr className='rhr'/>
                </div>
                
                <button className='create' onClick={create}>Create account with phone or email</button>
                <p>By signing up, you agree to the <em>Terms of Service</em> and<em> Privacy<br/> Policy,</em> including <em>Cookie Use.</em></p>
                <article className='cool'>
                    <p>Already have an account?</p>
                    <button className='signin' onClick={Signing}>Sign in</button>
                </article>
            </main>
        </div>
        <footer className='feet'>
            <span>About</span>
            <span>Help Center</span>
            <span>Terms of Service</span>
            <span>Privacy Policy</span>
            <span>Cookies Policy</span>
            <span>Accessibility</span>
            <span>Ads info</span>
            <span>Blog</span>
            <span>Status</span>
            <span>Careers</span>
            <span>Brand Resources</span>
            <span>Advertising</span>
            <span>Marketing</span>
            <span>Twitter for Business</span>
            <span>Developers</span>
            <span className='l'>Directory</span>
            <span className='setting'>settings</span>
            <span className='inc'>© 2022 Twitter, Inc.</span>
        </footer>
        <SignUp/>
    </>
  )
}

export default Login
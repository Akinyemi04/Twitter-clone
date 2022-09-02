import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import CloseIcon from '@mui/icons-material/Close';
import { login } from './store';
import { getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword, } from 'firebase/auth'
import {useNavigate} from 'react-router-dom'
const SignUp = () => {
    const   dispatch = useDispatch()

    const navigate = useNavigate()

    const  display= useSelector((val)=>{
        return(val.Login.signupDisplay)
    })
    const auth = getAuth()

    const email = useSelector((val)=>{
        return( val.Login.email)
    })
    const password = useSelector((val)=>{
        return( val.Login.password)
    })
    const error = useSelector((val)=>{
        return(val.Login.error)
    })

    const info = useSelector((val)=>{
        return(val.Login.info)
    })
    function Submit(e){
        e.preventDefault()
        if (info ==='Create Your Account'){
            createUserWithEmailAndPassword(auth,email,password)
            .then((res)=>{
                navigate('/home')
                sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
            })
            .catch((err)=>{
                if(err.code ==='auth/weak-password' ){
                    dispatch(login.fixerror('Weak Password:Password should be at least 6 characters '))
                }
                else if(error.code === 'auth/email-already-in-use'){
                    dispatch(login.fixerror('User Exists Please LogIN Instead'))
                }
            })
        
        }
        else{
            signInWithEmailAndPassword(auth,email,password)
            .then((res)=>{
                navigate('/home')
                sessionStorage.setItem('Auth Token', res._tokenResponse.refreshToken)
            })
            .catch((error)=>{
                 if(error.code === 'auth/wrong-password'){
                    dispatch(login.fixerror('Incorrect Password'))
                }
                else if (error.code === 'auth/user-not-found'){
                    dispatch(login.fixerror('Please Check Your Email/Password'))
                }
            })
        }
    }
  return (
    <div style={{display:display}} className='signup'>
        <section>
            <span onClick={()=>{
                dispatch(login.nodisplay())
            }}><CloseIcon/></span>
            <h1>{info}</h1>
            <form action="">
                <input type="text" placeholder='Email' onChange={(e)=>{
                    dispatch(login.auth(e.target.value))
                }} />
                <input type="password" placeholder='password'onChange={(e)=>{
                    dispatch(login.pass(e.target.value))
                }} />
                {error && <p>{error}</p>}
                <button type='submit' onClick={Submit}>Submit</button>
            </form>
        </section>
    </div>
  )
}

export default SignUp
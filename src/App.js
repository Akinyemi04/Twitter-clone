import './App.css';
import { BrowserRouter, Routes,Route } from 'react-router-dom';
// import { useDispatch,useSelector } from 'react-redux';
// import { login } from './Components/store';
import Feed from './Components/Feed';
import Login from './Components/Login';
import {app} from './Components/FbConfig';
import Widget from './Components/Widget';
import { useEffect } from 'react';
import {useNavigate} from 'react-router-dom'

function App() {
  // const data = useSelector((value)=>{
  //   return(value.Login.display)
  // })
  const navigate= useNavigate()
  //let authToken = sessionStorage.getItem('Auth Token')
  useEffect(()=>{
    let authToken = sessionStorage.getItem('Auth Token')
        if (authToken) {
            navigate('/home')
        }

        if (!authToken) {
            navigate('/')
        }
  },[])
  const width = window.screen.width
  return (
    <>
      <div className="App">
        {/* <Sidebar/> */}
      </div>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path ='/home' element={<Feed/>}></Route>
        {width < 440 && <Route path='/explore' element={<Widget/>}/>}
      </Routes>
    </>
  );
}

export default App;

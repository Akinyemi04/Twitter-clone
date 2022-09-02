import './App.css';
import {BrowserRouter,Routes,Route } from 'react-router-dom';
import Feed from './Components/Feed';
import Login from './Components/Login';
import {app} from './Components/FbConfig';
import Widget from './Components/Widget';

function App() {
  
  const width = window.screen.width
  return (
    <BrowserRouter>
      <div className="App">
      </div>
      <Routes>
        <Route exact path='/' element={<Login/>}></Route>
        <Route path ='/home' element={<Feed/>}></Route>
        {width < 440 && <Route path='/explore' element={<Widget/>}/>}
      </Routes>
    </BrowserRouter>
  );
}

export default App;

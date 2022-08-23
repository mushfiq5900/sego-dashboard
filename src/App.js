import { Routes, Route } from 'react-router-dom'
import Home from './pages/home/Home';
import Login from './pages/login/Login';
import List from './pages/list/List';
import Single from './pages/single/Single';
import New from './pages/new/New';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/'>
          <Route index element={<Home />} />
          <Route path='login' element={<Login />} />
          <Route path='users'>
            <Route index element={<List />} />
            <Route path=':userID' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
          <Route path='orders'>
            <Route index element={<List />} />
            <Route path=':orderID' element={<Single />} />
            <Route path='new' element={<New />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;

import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Login, User } from './pages';

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/user' element={<User />} />
      </Routes>
    </div>
  )
}

export default App

import './App.css'
import UserContextProvider from './context/UserContextProvider'
import Login from './components/Login'
import Profile from './components/Profile'

function App() {
 
  return (
    <UserContextProvider>
      <h1>Hello..!</h1>
      <Login></Login>
      <Profile />
    </UserContextProvider>
  )
}

export default App

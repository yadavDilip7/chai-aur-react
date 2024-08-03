import UserContextProvider from "./Context/UserContextProvider"
import Login from "./components/Login"
import Profile from "./components/Profile"
import './App.css'


function App() {
  return (
    <UserContextProvider>
      <h1>React with Chai & Keep Learning... </h1>
      <Login/>
      <Profile/>
    </UserContextProvider>
  )
}

export default App

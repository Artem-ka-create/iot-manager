import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header/Header.jsx";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import DevicesList from "./components/devices/DevicesList.jsx";

function App() {
  const [state, setState] = useState(false)

  return (
    <>
        {/*<Header/>*/}
        <DevicesList />
    </>
  )
}

export default App

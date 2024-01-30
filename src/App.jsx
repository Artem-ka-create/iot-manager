import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./Header/Header.jsx";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';

function App() {
  const [state, setState] = useState(false)

  return (
    <>
        <Header/>

        <h1>Hello Binash )</h1>

        <Dialog visible={state} onHide={() => setState(false)}>
           ewfwewefwef
        </Dialog>

        <Button label="Show" onClick={() => setState(true)} />
    </>
  )
}

export default App

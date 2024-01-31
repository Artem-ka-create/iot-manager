import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from "./header/Header/Header.jsx";
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import DevicesList from "./components/devices/DevicesList.jsx";
import {menu_items} from "./data/menu.js";
import Dashboard from "./dashboard/Dasboard/Dashboard.jsx";



function App() {
    const [state, setState] = useState(false)
    const [page, setPage] = useState(menu_items[0])

    const [payload, setPayload] = useState([])
    const [receivedData, setReceivedData] = useState([])

    function handleOnPageChange(page){
        setPage(page)
    }

    function handlePayload(payload){

    }

    function handleReceivedData(){
        setReceivedData([]); // subbscribe to broker
    }


  return (
    <>
        {/*<Header/>*/}
        <Header onPageChange={handleOnPageChange} page={page}/>
        <DevicesList />

        <Dashboard onPayload={handlePayload} data={receivedData}/>


    </>
  )
}

export default App

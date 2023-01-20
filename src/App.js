import './App.css';
import { useState } from 'react'
import Nav from './components/Nav'
import Form from './components/Form'
import RandoDisplay from './components/RandoDisplay'

// VDaJ4yaVbewr0XMMnChSGncckjXZT6Ds

function App() {
  const [ randoGiphy, setRandoGiphy ] = useState({})

  const getGiphy = async () => {
    const URL = 'https://api.giphy.com/v1/gifs/random?api_key=VDaJ4yaVbewr0XMMnChSGncckjXZT6Ds' 
    const res = await fetch(URL)
    const json = await res.json()
    setRandoGiphy(json)
  }

console.log(randoGiphy)

  return (
    <div className="App">
      <Nav />
      <Form getGiphy={getGiphy} />
      <RandoDisplay gif={randoGiphy} />
    </div>
  );
}

export default App;

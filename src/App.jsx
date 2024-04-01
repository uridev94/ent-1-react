import './App.css'
import arrayPhrases from './utils/arrayPhrases.json'
import getRandom from './services/getRandom';
import { useState } from 'react';
import ShowPhrase from './Components/ShowPhrase';
import ButtonPhrase from './Components/ButtonPhrase';
import arrayImages from './utils/arrayImages.json'

function App() {

const [phrase, setPhrase] = useState(getRandom(arrayPhrases));

const [image, setImage] = useState(getRandom(arrayImages));

const objStyles = {
  backgroundImage: `url(/img/fortuna-2/fondo${image}.png)`,
}

  return (
    <>
      <div className='app' style={objStyles}>
        <h1 className='app__title'>Galletas de la fortuna</h1>
        <ButtonPhrase
          setPhrase={setPhrase}
          setImage={setImage}
          />
        <p><ShowPhrase
        phrase={phrase}/>
        </p>

      </div>
    </>
  )
}

export default App

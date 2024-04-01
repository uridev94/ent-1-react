import React from 'react'
import arrayPhrases from '../utils/arrayPhrases.json';
import getRandom from '../services/getRandom';
import arrayImages from '../utils/arrayImages.json';

const ButtonPhrase = ({setPhrase, setImage}) => {

    const handlePhrase = () => {
        //
        setPhrase(getRandom(arrayPhrases));
        setImage(getRandom(arrayImages))
    }
  return (
    <button onClick={handlePhrase} className='btn'>
        Probar mi suerte
        </button>
  )
}

export default ButtonPhrase
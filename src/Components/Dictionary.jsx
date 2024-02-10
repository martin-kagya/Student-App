import React, { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

function Dictionary () {
    const [word, setWord] = useState('');
    const [definition, setDefinition] = useState("")
    async function getDefinition(e){
        try{
        e.preventDefault();
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
        let data = await response.json();
        const entry = data[0].meanings[0].definitions;
        entry.forEach((element) => {
            setDefinition((prevDefinition) => prevDefinition + element.definition +'\n')
        });
    }
    catch(error){
        console.error("Error parsing API response", error);
        setDefinition("Sorry, this word is not in the dictionary")
    }
}
    return(
        <>
            <form onSubmit={getDefinition}>
                <input type='text' className='word-input' placeholder='Enter a word' onChange={(e) => setWord(e.target.value)} />
             </form>
             {definition && <p className='definition'>{definition}</p>}
        </>
        
    )
}

export default Dictionary;
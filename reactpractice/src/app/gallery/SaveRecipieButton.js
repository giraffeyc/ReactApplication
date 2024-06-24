"use client"; 
import {useState} from "react";


const SaveRecipieButton = ({saveTheRecipie})=>{
    const [initialWord, updateWord] = useState('');

    const handleChange= (event)=>{
      updateWord(event.target.value);
    };
    
    const handleKeyPress = (event)=>{
        if (event.key == "Enter"){
            saveTheRecipie(initialWord);
        }
    };

    return (
        <>
        <input 
        style={{color :'black'}}
        type="text" 
        placeholder ="search recipe name to save "
        value= {initialWord}
        onChange= {handleChange}
        onKeyDown={handleKeyPress}
        >
        </input>
        </>
    )
}

export default SaveRecipieButton

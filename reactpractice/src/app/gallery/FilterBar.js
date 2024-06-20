"use client"; 
import {useState} from "react";
//second thing in use state is af unction uisually for updating the results
const FilterBar=({filterRecipe})=>{
    const [initialWord, updateWord] = useState('');


    const handleChange= (event)=>{
      
      updateWord(event.target.value);
      
      
    };
    
    const handleKeyPress = (event)=>{
        if (event.key == "Enter"){
            filterRecipe(initialWord);
        }
    };
    


    return(
        <input 
        style={{color :'black'}}
        type="text" 
        placeholder ="search recipe"
        value= {initialWord}
        onChange= {handleChange}
        onKeyDown={handleKeyPress}
        >
        </input>
    );

};

export default FilterBar




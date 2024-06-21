"use client"; 
import {useState} from "react";


const PageNumber= ({totalPages, updateDisplay}) => {
  const [currPage, updatePage] = useState(1);
  

  const goForward = ()=>{
    
    updatePage(currPage+1);
    
    updateDisplay(currPage + 1);

  };

  const goBackward = () => {
    updatePage(currPage-1);
    updateDisplay(currPage-1);
  };



    return(
        <>
            <p>Page {currPage} of {totalPages}</p>
            <button onClick={goBackward}>Previous Page</button>
            <br></br>
            <button onClick={goForward}>Next Page</button>
        </>
    );
  
}


export default PageNumber;
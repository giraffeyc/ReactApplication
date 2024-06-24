"use client"; 
import {useState} from "react";


const PageNumber= ({totalItems, updateDisplay}) => {
  const [currPage, updatePage] = useState(1);
  
  const itemsPerPage=2;
  
  
  const goForward = ()=>{
    if (currPage < totalItems/itemsPerPage){
      updatePage(currPage+1);
      updateDisplay(currPage + 1);
    
    
    }
    
    

  };

  const goBackward = () => {
    if (currPage >= 2){
      updatePage(currPage-1);
      updateDisplay(currPage-1);

    }
    
  };



    return(
        <>
            <p>Page {currPage} of {totalItems/itemsPerPage}</p>
            <button onClick={goBackward}>Previous Page</button>
            <br></br>
            <button onClick={goForward}>Next Page</button>
        </>
    );
  
}


export default PageNumber;
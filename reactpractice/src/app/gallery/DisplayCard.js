"use client"; 
import Link from 'next/link';

//To pass in more than one variable using hte link library follow syntax below
//Custom strings take `` inside
const DisplayCard = ({recipeName, cookTime, showPopUp})=>{
  const encodedParameter = encodeURIComponent(recipeName);

   
    
    return (
      <>
      
      {/* <Link href={`/items/${encodedParameter}/`}> */}
      <div onClick= { ( () => showPopUp(recipeName) ) }>
         
        
        <p >{recipeName}</p>
        <p >{cookTime}</p>
      </div>
        {/* </Link> */}
      </>
    );

}


export default DisplayCard;
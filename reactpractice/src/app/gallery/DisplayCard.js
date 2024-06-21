"use client"; 
import Link from 'next/link';

//To pass in more than one variable using hte link library follow syntax below
//Custom strings take `` inside
const DisplayCard = ({recipeName, cookTime})=>{
    
   
    
    return (
      <>
      
      <Link href={`/items/${recipeName}/`}>
      
         
        
        <p >{recipeName}</p>
        <p >{cookTime}</p>
        
        </Link>
      </>
    );

}


export default DisplayCard;
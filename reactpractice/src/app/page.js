"use client"; 
import {useState} from "react";
import {useEffect} from "react";

export default function Home() {
  const [count, updateCount] = useState(0);
  const products = [
    { title: 'Cabbage', id: 1 },
    { title: 'Garlic', id: 2 },
    { title: 'Apple', id: 3 },
  ];

  const add = () => {
    updateCount(count+1)
  }

  const subtract= ()=> {
    updateCount(count-1)
  }

  return (
    <>
    <AddButton startingCount={count} name = {'Add'} f={add}> </AddButton>
    <SubButton startingCount = {count} name = {'Sub'} f={subtract} ></SubButton>
    
    <PrintList a = {products}></PrintList>
    </>
  );
}


const PrintList = ({a}) => {

  const listItems = a.map(b =>
    <li key={b.id}>
      {b.title}
    </li>

  );
  
  return (
   <ul>
    {listItems}
   </ul>

  );

}

//If count is even display it , else don't


const AddButton = ({startingCount,name, f}) => {

  let content;
  if (startingCount % 2 == 0){
      content = startingCount;
  }

  
  return( 
    <>
    {content}    
  
    <button type= "button" onClick={f}> {name}</button>
    <br></br>

    </>
  )

}


const SubButton = ({startingCount,name, f})=>{
  
   return(
      <>
      {startingCount}
      <button type="button" onClick={f}> {name} </button>
      </>
   )
}


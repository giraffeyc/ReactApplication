"use client"; 
import {useState} from "react";
import DisplayCard from "./DisplayCard";
import FilterBar from "./FilterBar";
import PageNumber from "./PageNumber"


//Use cap locks for first letter component names Ex: ButtonTwo
//Other Files use lowercase ex: gallery
//Basic javascript do ex: galleryTwo
//Anytime a component or prop changes react will default rerender it

//Data Pattern:
// {
//   name: "",
//   nationality: "",  
//   ingredients: ""
//   cookTime: ""
// }

const data= [
  {
    name : "Chicken",
    nationality: "Chinese",
    ingredients: ["Chicken ", "Water ", "Soy Sauce"],
    cookTime: 40
  },

  {
  name : "Pizza",
  nationality: "Italian",
  ingredients: ["Bread", "Salt", "Cheese"],
  cookTime: 55
  },

  {
    name : "Maple Wood",
    nationality: "Canada",
    ingredients: ["Syrup", "Milk", "Eggs"],
    cookTime: 15
  },

    {
    name : "Nuts",
    nationality: "Canada",
    ingredients: ["Air", "Water", "Earth", "Fire"],
    cookTime: 20
    },

    {
        name : "Avatar",
        nationality: "Chinese",
        ingredients: ["A", "A", "N", "G"],
        cookTime: 69
      },

    {
      name: "Egg Fried Rice",
      nationality: "Chinese",
      ingredients: ["Rice","Egg"],
      cookTime: 25
    },

  
    {
      name: "Pork Dumpling",
      nationality: "Chinese",
      ingredients:["Dough","Pork"],
      cookTime :45
    },

    {
        name: "Pasta",
        nationality: "Brazillian",
        ingredients:["dumbells","airpods"],
        cookTime: 25
    },


    {
        name: "Hotdog",
        nationality: "American",
        ingredients:["Bread","Hotdog"],
        cookTime: 15
    },

    {
        name: "Ramen",
        nationality: "Japanese",
        ingredients:["Ramen Noodles"],
        cookTime: 10
    }
];

//Have to use useState because the state of our listRecipies is changing so we use recipies to map it so everytime it changes it updates
const Gallery = () => {
  const [recipies, updateRecipies] = useState(data);
  
  //State to help know which recipes to show off on each page
  const [startIndex, updateStartIndex]= useState(0);
  const [endIndex, updateEndIndex] = useState(1);
  
  //Display Card for all the Recipees//
  let listRecipes = recipies.map(d=> 
    <DisplayCard recipeName = {d.name} cookTime={d.cookTime}></DisplayCard> 
  );
  //---------------------------------//

  
  //Filtering the recipies by nationality//
  const filterByType= (type)=>{
      listRecipes= data.filter( data=> data.nationality ==type);
      updateRecipies(listRecipes);
  };
  //---------------------------------//

  //display currpage -1 and current
  const updateDisplay = (currPageNumber)=>{
    
      

      // 1 => 0,1
      // 2=> 2,3
      // 3=> 4,5
      // 4=> 6,7
      // 5=> 8,9
      
      //Formula = currPage*2-2 ,currPage * 2 -1 
      updateStartIndex((currPageNumber*2)-2);
      updateEndIndex((currPageNumber*2)-1);
    
  };
  

  return(
    <>
    
        {listRecipes[startIndex]}
        {listRecipes[endIndex]}
        
        <PageNumber totalPages={5} updateDisplay= {updateDisplay}></PageNumber>
        <br></br>
        <FilterBar filterRecipe={filterByType}></FilterBar>

    </>
  );

}




export default Gallery;

"use client"; 
import {useState} from "react";
import DisplayCard from "./DisplayCard";
import FilterBar from "./FilterBar";
import PageNumber from "./PageNumber";
import SavedRecipesGallery from "./SavedRecipesGallery";
import SaveRecipieButton from "./SaveRecipieButton";
import PopUpCard from "./PopUpCard";

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

  //State for saved recipies
  


  
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


  //Saving a recipe
  const[userSavedData,updateUserSavedData] = useState([]);
  const saveRecipie = (userSavedRecipie)=>{
    const rec = data.filter( data=> data.name ==userSavedRecipie); 
    updateUserSavedData([...userSavedData, rec[0]]);

  };
  
  //Pop up item
  const [popUpItem, updatePopUpItem] = useState(null);
  const showPopUp = (recipeName)=>{

  
      let recipe=data.filter(data=> data.name ==recipeName);
      console.log(recipe[0])
      updatePopUpItem(recipe[0]);
  }
  const closePopUp =()=>{
    console.log("close pop up running");
    updatePopUpItem(null);
  }


    //Display Card for all the Recipees//
    let listRecipes = recipies.map(d=> 
      <DisplayCard recipeName = {d.name} cookTime={d.cookTime} showPopUp={showPopUp}></DisplayCard> 
    );
    //---------------------------------//

  return(
    <>
    
        {listRecipes[startIndex]}
        {listRecipes[endIndex]}
        
        <br></br>
        <br></br>
        <PageNumber totalItems={recipies.length} updateDisplay= {updateDisplay}></PageNumber>
        
        <br></br>
        <br></br>
        {popUpItem && <PopUpCard recipe={popUpItem} onClose= {closePopUp}></PopUpCard>}
        

        <br></br>
        <br></br>
        <FilterBar filterRecipe={filterByType}></FilterBar>

        <br></br>
        <br></br>
        <h2>Saved Recipes</h2>
        <SavedRecipesGallery data={userSavedData}></SavedRecipesGallery>
        
        <br></br>
        <br></br>
        <SaveRecipieButton saveTheRecipie={saveRecipie}> </SaveRecipieButton>

    </>
  );

}




export default Gallery;

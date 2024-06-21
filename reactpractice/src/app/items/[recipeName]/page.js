"use client";
import { useRouter ,usePathname} from 'next/navigation';


//Route it any info gets stored
//when routing need to create seperate folder and put inside is how react works
//Pathname gets the path of our website and we are splititng it by the char '/' and we get the recipe name

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

const DisplayRecipeDetails = () => {

  const pathname = usePathname();
  const segments = pathname.split('/');
  const recipeName = segments[2]; // Assuming the path is /items/[recipeName]
    
  const recipie = data.find((item) =>item.name === recipeName);
    return (
        <>  
            
            <h1>{recipeName}</h1>
            <h1>{recipie.nationality}</h1>
            <p>{recipie.ingredients}</p>
            <h1>{recipie.cookTime}</h1>
        </>

    );

}

export default DisplayRecipeDetails
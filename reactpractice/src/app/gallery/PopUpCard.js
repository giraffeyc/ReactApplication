"use client"; 
const PopUpCard = ({recipe,onClose})=>{

  
  
    if (recipe==null){

      return;
    }

    return(
        <>
        <h1>{recipe.name} </h1>
        <br></br>
        <h1>{recipe.nationality}</h1>
        <br></br>
        <h1>{recipe.ingredients}</h1>
        <br></br>
        <h1>{recipe.cookTIme}</h1>
        <button onClick = { ( () => onClose(recipe) ) }> Close PopUp </button>
        </>
    )

}


export default PopUpCard
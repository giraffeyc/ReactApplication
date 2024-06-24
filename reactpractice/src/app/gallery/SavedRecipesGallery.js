
const SavedRecipesGallery = ({data, children})=>{
  
  const content = data.map((data) => 
   
    <p>{data.name}</p>
  );


  return (
    <>
    {content}
    </>
  );

}



export default SavedRecipesGallery;
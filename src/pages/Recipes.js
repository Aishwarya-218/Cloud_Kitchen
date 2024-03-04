import PreviousSearch from "../Components/PreviousSearch";
import RecipeCard from "../Components/RecipeCard";
export default function Recipes()
{
    const recipes=[
            {
                title:"Chiken Pan Pizza",
                image:"/img/gallery/img_1.jpg",
                autherImg:"/img/top_chiefs/img_2.jpg",
            },
            {
                title:"Spagheti and Meetballs",
                image:"/img/gallery/img_5.jpg",
                autherImg:"/img/top_chiefs/img_6.jpg",
            },
            {
                title:"American Cheese Burger",
                image:"/img/gallery/img_10.jpg",
                autherImg:"/img/top_chiefs/img_6.jpg",
            },
            {
                title:"Mutton Biriyani",
                image:"/img/gallery/img_6.jpg",
                autherImg:"/img/top_chiefs/img_5.jpg",
            },
            {
                title:"Chiken Pan Pizza",
                image:"/img/gallery/img_1.jpg",
                autherImg:"/img/top_chiefs/img_4.jpg",
            },
            {
                title:"American Cheese Burger",
                image:"/img/gallery/img_10.jpg",
                autherImg:"/img/top_chiefs/img_6.jpg",
            },

            

    ].sort(()=>Math.random() - 0.5)
    
    return(
        <div>
         <PreviousSearch /> 
         <div className="recipe-container">
            {/* <RecipeCard /> */}
            {recipes.map((recipe,index)=>(
                <RecipeCard key={index} recipe={recipe}/>
            )
            )
            }
            
         </div>
        </div>
    )
}

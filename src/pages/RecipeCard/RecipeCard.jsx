// import { useEffect, useState } from "react";
// import { IoIosTimer } from "react-icons/io";
// import { FaFire } from "react-icons/fa";
// import Swal from 'sweetalert2';
// import '../Banner/style.css';



// const RecipeCard = () => {
//     const [recipes, setRecipes] = useState([]);
//     const [wantToCook, setWantToCook] = useState([]);
//     const [currentlyCooking, setCurrentlyCooking] = useState([]);

//     console.log(recipes);

//     useEffect(() => {
//         fetch('blog.json')
//             .then(res => res.json())
//             .then(data => {
//                 setRecipes(data);
//             });
//     }, []);



//     const handleAddToCook = (recipe) => {
//         if (wantToCook.find((item) => item.recipe_id === recipe.recipe_id)) {
//             Swal.fire({
//                 icon: "error",
//                 title: "Oops...",
//                 text: "Recipe is already in 'Want to Cook' list!",
//             });
//         } else {
//             setWantToCook(prevState => [...prevState, recipe]);
//         }
//     };

//     const handlePrepare = (recipe) => {
//         setWantToCook(prevState => prevState.filter(item => item.recipe_id !== recipe.recipe_id));
//         setCurrentlyCooking(prevState => [...prevState, recipe]);
//     };



//     return (
//         <div className="container  lg:flex-row flex flex-col mx-auto gap-6 justify-center mt-16 p-5">
//             <div className="flex-1 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4">
//                 {recipes.map(recipe => (
//                     <div className="card  bg-base-100 shadow-xl" key={recipe.recipe_id}>
//                         <figure className="w-full lg:h-[300px] md:h-[250px] h-full"><img className="h-full w-full" src={recipe.recipe_image} alt="Shoes" /></figure>
//                         <div className="card-body">
//                             <h2 className="card-title">{recipe.recipe_name}</h2>
//                             <p>{recipe.short_description}</p>
//                             <p className="divider"></p>
//                             <ul>
//                                 <div className="mb-2">
//                                     <p className="font-bold">Ingredients: {recipe.ingredients.length}</p>
//                                 </div>
//                                 <div>
//                                     {recipe.ingredients.map((ingredient, index) => (
//                                         <li key={index}>{ingredient}</li>
//                                     ))}
//                                 </div>
//                             </ul>
//                             <div className="flex mt-4">
//                                 <p className="flex items-center"><IoIosTimer />{recipe.preparing_time}</p>
//                                 <p className="flex items-center"><FaFire />{recipe.calories}</p>
//                             </div>
//                             <div className="card-actions">
//                                 <button
//                                     className="btn mt-2 btn-btn"
//                                     onClick={() => handleAddToCook(recipe)}
//                                 >
//                                     Want to cook
//                                 </button>

//                             </div>
//                         </div>
//                     </div>
//                 ))}
//             </div>

//             <div className="lg:w-[40%]  shadow-2xl  p-4 border">
//                 <h1 className="text-xl pt-2 text-center">Want to Cook: {wantToCook.length}</h1>
//                 <p className="divider w-32 mx-auto"></p>
//                 <div className="overflow-x-auto ">
//                     <table className="table">
//                         {/* head */}
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 <th>Name</th>
//                                 <th>Time</th>
//                                 <th>Calories</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* row 1 */}
//                             {wantToCook.map((recipe, index) => (
//                                   <tr key={recipe.recipe_id}>

//                                   <th>{index + 1}</th>
//                                   <td>{recipe.recipe_name}</td>
//                                   <td>{recipe.preparing_time}</td>
//                                   <td>{recipe.calories}</td>
//                                   <td><button onClick={()=> handlePrepare(recipe)} className="btn-btn p-2 rounded-full">preparing</button></td>
//                               </tr>


//                                 ))}

//                         </tbody>
//                     </table>

//                 </div>


//                 <h1 className="text-xl mt-12 text-center">Currently Cooking: {currentlyCooking.length}</h1>
//                 <p className="divider w-32 mx-auto"></p>
//                 <div className="overflow-x-auto">
//                     <table className="table">
//                         {/* head */}
//                         <thead>
//                             <tr>
//                                 <th></th>
//                                 <th>Name</th>
//                                 <th>Time</th>
//                                 <th>Calories</th>
//                             </tr>
//                         </thead>
//                         <tbody>
//                             {/* row 1 */}
//                             {currentlyCooking.map((recipe,  index)=> (
//                                   <tr key={recipe.recipe_id}>

//                                   <th>{index+1}</th>
//                                   <td>{recipe.recipe_name}</td>
//                                   <td>{recipe.preparing_time}</td>
//                                   <td>{recipe.calories}</td>

//                               </tr>


//                                 ))}

//                         </tbody>

//                     </table>

//                 </div>

//             </div>
//         </div>
//     );
// };

// export default RecipeCard;





import { useState } from "react";
import { useEffect } from "react";
import RecipeCards from "./RecipeCards";

const RecipeCard = () => {
   const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
            });
    }, []);

    console.log(recipes);


    const addToCookList = (recipe) => {
        if (wantToCook.find(item => item.recipe_id === recipe.recipe_id)) {
            // Recipe already in the list
            console.log("Recipe is already in 'Want to Cook' list!");
        } else {
            setWantToCook(prevState => [...prevState, recipe]);
        }
    };
    

    return (
        <div className="lg:flex justify-center gap-6 mt-12">
            <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2">
                {
                    recipes.map(recipe => <RecipeCards key={recipe.recipe_id} recipe={recipe} addToCookList={addToCookList}></RecipeCards>)
                }
            </div>
            <div className="shadow-2xl p-4">
                <p className="text-center">Want To Cook:</p>
                <div className="overflow-x-auto">
                    <table className="table">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Name</th>
                                <th>Time</th>
                                <th>Calories</th>
                            </tr>
                        </thead>
                        <tbody>
                            {/* row 1 */}
                            <tr>
                                <th>1</th>
                                <td>{recipes.recipe_name}</td>
                                <td>{recipes.recipe_time}</td>
                                <td>{recipes.recipe_calories}</td>
                            </tr>
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;

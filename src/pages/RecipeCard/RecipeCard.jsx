// import { useEffect, useState } from "react";
// import { IoIosTimer } from "react-icons/io";
// import { FaFire } from "react-icons/fa6";
// import  '../Banner/style.css'

// const RecipeCard = () => {

//     const [recipes, setRecipes] = useState([])

//     const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipes || {}


//     console.log(recipes);

//     useEffect(() => {
//         fetch('blog.json')
//             .then(res => res.json())
//             .then(data => {
//                 setRecipes(data)
//             })
//     }, [])

//     return (
//         <div className="flex mx-auto gap-6 justify-center mt-16">
//             <div className="card w-96 bg-base-100 shadow-xl">
//                 {
//                     recipes.map(recipe => <div key={recipe.recipe_id}>
//                         <figure><img src={recipe.recipe_image} alt="Shoes" /></figure>
//                         <div className="card-body">
//                             <h2 className="card-title">{recipe.recipe_name}</h2>
//                             <p>{recipe.short_description}</p>
//                             <p className="divider"></p>
//                             <ul>
//                                 <div className="mb-2">
//                                     <p> Ingredients:</p>
//                                 </div>
//                                 <div>
//                                     {recipe.ingredients.map((ingredient, index) => (
//                                         <li key={index}>{ }. {ingredient}</li>
//                                     ))}
//                                 </div>

//                             </ul>
//                             <div className="flex mt-4">
//                                 <p className="flex items-center"><IoIosTimer />{recipe.preparing_time}</p>
//                                 <p className="flex items-center"><FaFire />{recipe.calories}</p>
//                             </div>
//                             <div className="card-actions">
//                                 <button className="btn mt-2 btn-btn">Want to cook</button>
//                             </div>
//                         </div>
//                     </div>)
//                 }
//             </div>

//             <div className="shadow-2xl px-32 border">
//                 <h1 className="text-xl pt-2">Want to Cook:</h1>
//                 <p className="divider w-32"></p>
//                 <div className="flex gap-28">
//                     <h3 className="">Name</h3>
//                     <h3>Time</h3>
//                     <h3>Calories</h3>
//                 </div>
//             </div>

//         </div>
//     );
// };

// export default RecipeCard;



import { useEffect, useState } from "react";
import { IoIosTimer } from "react-icons/io";
import { FaFire } from "react-icons/fa";
import Swal from 'sweetalert2';
import '../Banner/style.css';

const RecipeCard = () => {
    const [recipes, setRecipes] = useState([]);
    const [wantToCook, setWantToCook] = useState([]);
  
    console.log(recipes);

    useEffect(() => {
        fetch('blog.json')
            .then(res => res.json())
            .then(data => {
                setRecipes(data);
            });
    }, []);

    const handleAddToCook = (recipe) => {
        if (wantToCook.find((item) => item.recipe_id === recipe.recipe_id)) {
            showDuplicateAlert();
        } else {
            setWantToCook(prevState => [...prevState, recipe]);
        }
    };

    const showDuplicateAlert = () => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Recipe is already in 'Want to Cook' list!",
            footer: '<a href="#">Why do I have this issue?</a>'
        });
    };

    return (
        <div className="flex mx-auto gap-6 justify-center mt-16">
            <div className="card w-96 bg-base-100 shadow-xl">
                {recipes.map(recipe => (
                    <div key={recipe.recipe_id}>
                        <figure><img src={recipe.recipe_image} alt="Shoes" /></figure>
                        <div className="card-body">
                            <h2 className="card-title">{recipe.recipe_name}</h2>
                            <p>{recipe.short_description}</p>
                            <p className="divider"></p>
                            <ul>
                                <div className="mb-2">
                                    <p>Ingredients: {recipe.ingredients.length}</p>
                                </div>
                                <div>
                                    {recipe.ingredients.map((ingredient, index) => (
                                        <li key={index}>{ingredient}</li>
                                    ))}
                                </div>
                            </ul>
                            <div className="flex mt-4">
                                <p className="flex items-center"><IoIosTimer />{recipe.preparing_time}</p>
                                <p className="flex items-center"><FaFire />{recipe.calories}</p>
                            </div>
                            <div className="card-actions">
                                <button
                                    className="btn mt-2 btn-btn"
                                    onClick={() => handleAddToCook(recipe)}
                                >
                                    Want to cook
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            <div className="shadow-2xl px-32 border">
                <h1 className="text-xl pt-2">Want to Cook: {wantToCook.length}</h1>
                <p className="divider w-32"></p>
                <div className="flex gap-48">
                    <h3>Name</h3>
                    <h3>Time</h3>
                    <h3>Calories</h3>
                </div>
                <div>
                    {wantToCook.map(recipe => (
                        <div key={recipe.recipe_id} className="flex gap-28">
                            <p>{recipe.recipe_name}</p>
                            <p>{recipe.preparing_time}</p>
                            <p>{recipe.calories}</p>
                            <p className="btn-btn btn rounded-full p-2">preparing</p>
                        </div>
                        
                    ))}
                </div>
                <h1 className="text-xl  mt-12">Currently Cooking:</h1>
                <p className="divider w-32"></p>
                <div className="flex gap-48">
                    <h3>Name</h3>
                    <h3>Time</h3>
                    <h3>Calories</h3>
                </div>
                <div>
                    
                </div>
            </div>
        </div>
    );
};

export default RecipeCard;




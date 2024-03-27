/* eslint-disable react/prop-types */

import { useState } from "react";
import { FaFire } from "react-icons/fa";
import { IoIosTimer } from "react-icons/io";
import Swal from "sweetalert2";


const RecipeCards = ({ recipe, addToCookList }) => {
    const [wantToCook, setWantToCook] = useState([]);
    
    // console.log(recipe);

    const { recipe_id, recipe_image, recipe_name, short_description, ingredients } = recipe || {}

    const handleAddToCook = () => {
        if (wantToCook.find(item => item.recipe_id === recipe.recipe_id)) {
            Swal.fire({
                icon: "error",
                title: "Oops...",
                text: "Recipe is already in 'Want to Cook' list!",
            });
        } else {
            addToCookList(recipe); // Call the function from props
        }
    };

    return (
        <div className="flex">
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="w-full lg:h-[300px] md:h-[250px] h-full"><img className="w-full h-full" src={recipe_image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>
                    <p className="divider"></p>
                    <p>Ingredients: {ingredients.length} </p>
                    <p>{
                        ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))
                    }</p>
                    <div className="flex mt-4">
                        <p className="flex items-center"><IoIosTimer />{recipe.preparing_time}</p>
                        <p className="flex items-center"><FaFire />{recipe.calories}</p>
                    </div>
                    <div className="card-actions">
                        <button onClick={handleAddToCook} className="btn btn-btn">wantToCook</button>
                    </div>
                </div>
            </div>
           
        </div>
    );
};

export default RecipeCards;


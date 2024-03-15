import { useState } from "react";

export function SelectedRecipeList({recipeList}) {



    return (
        <div>
            {recipeList.map((recipe, index) => (
                <p key={index}>{recipe.name}</p>
            )) }
        </div>
    )
}
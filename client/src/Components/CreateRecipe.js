import { useState } from 'react'

export default function CreateRecipe() {
    const [ingredients, setIngredients] = useState({})
    const [instructions, setInstructions] = useState({})

function handleAddIngredient() {
    setIngredients()
}

function handleAddInstruction() {
    setInstructions()
}

function handleSave() {

}

    return(
        <div>
            <h1>Create your Recipe</h1>
            <div className="ingredients">
                <ul>
                    {ingredients.map((item) => {
                        <li>Test</li>
                    })}
                </ul>
                <button onClick={handleAddIngredient}>add Ingredient</button>
            </div>
            <div className="instructions">
                <ul>
                    {instructions.map((item) => {
                        <li>Test</li>
                    })}
                </ul>
                <button onClick={handleAddInstruction}>add Instruction</button>
            </div>
            <button onClick={handleSave}>Save</button>
        </div>
    )
}
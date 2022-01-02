import { useState } from 'react'

export default function CreateRecipe() {
    const [ingredientLength, setIngredientLength] = useState(1)
    const [instructionLength, setInstructionLength] = useState(1)

// needs two list items:
// 1) ingredients -
//  on one line:
//  amount, unit of measurement, ingredient
// 2) instructions
//  one line text
// starts with one line each
// both have plus button to add more lines

function handleAddIngredient() {
    setIngredientLength(ingredientLength + 1)
}

function handleAddInstruction() {
    setInstructionLength(instructionLength + 1)
}
    return(
        <div>
            <h1>Create your Recipe</h1>
            <ul>
                {ingredientLength.map((item) => {
                    <li>Test</li>
                })}
            </ul>
            <button onClick={handleAddIngredient}>add Ingredient</button>
            <ul>
                {instructionLength.map((item) => {
                    <li>Test</li>
                })}
            </ul>
            <button onClick={handleAddInstruction}>add Instruction</button>
        </div>
    )
}
import React, { useContext } from "react"
import { AnimalSearch } from "./AnimalSearch.js"
import { AnimalList } from "./AnimalList.js"
import "./Animals.css"

export const Animals = () => {
    return (
        <main className="animalContainer">
            <h1>Animals</h1>

            <AnimalSearch />
            <AnimalList />
        </main>
    )
}
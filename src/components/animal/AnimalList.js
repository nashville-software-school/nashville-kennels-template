import React, { useState, useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider"
import { RoutingContext } from "../Routed"
import Animal from "./Animal"
import "./Animals.css"

export const AnimalList = () => {
    const { getAnimals, animals, searchTerms } = useContext(AnimalContext)
    const { history } = useContext(RoutingContext)

    const [filteredAnimals, setFiltered] = useState([])

    // Initialization effect hook -> Go get animal data
    useEffect(() => {
        getAnimals()
    }, [])

    useEffect(() => {
        const matchingAnimals = animals.filter(animal => animal.name.toLowerCase().includes(searchTerms.toLowerCase()))
        setFiltered(matchingAnimals)
    }, [searchTerms])


    useEffect(() => {
        setFiltered(animals)
    }, [animals])

    return (
        <div style={{ marginTop: "2rem"}}>
            <button onClick={() => history.push("/animals/create")}>
                Make Reservation
            </button>
            <div className="animals">
                {
                    filteredAnimals.map(animal => <Animal key={animal.id} animal={animal} />)
                }
            </div>
        </div>
    )
}
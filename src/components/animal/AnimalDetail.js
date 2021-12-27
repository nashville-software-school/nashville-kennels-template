import React, { useContext, useEffect, useState } from "react"
import { RoutingContext } from "../Routed.js"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"

export const AnimalDetails = () => {
    const { releaseAnimal, getAnimalById } = useContext(AnimalContext)
    const { history, match } = useContext(RoutingContext)

    const [animal, setAnimal] = useState({ location: {}, customer: {} })

    useEffect(() => {
        const animalId = parseInt(match.params.animalId)
        getAnimalById(animalId)
            .then(setAnimal)
    }, [])

    return (
        <section className="animal">
            <h3 className="animal__name">{animal.name}</h3>
            <div className="animal__breed">{animal.breed}</div>
            <div className="animal__location">Location: {animal.location.name}</div>
            <div className="animal__owner">Customer: {animal.customer.name}</div>
            <div className="animal__status">Status: {animal.status}</div>

            <button onClick={() => releaseAnimal(animal.id).then(() => history.push("/animals"))}>
                Release Animal
            </button>

            <button onClick={() => {
                history.push(`/animals/edit/${animal.id}`)
            }}>Edit</button>
        </section>
    )
}
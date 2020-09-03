import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";


export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)

    useEffect(() => {
        console.log(" **** Animals before state pulled from API  ****")
        getAnimals()
    }, [])

    /*
        eventHub.addeventListener("AnimalStateChanged", event => {
            console.log(" **** Animals after state pulled from API  ****")
        })
    */
    useEffect(() => {
        console.log(" **** Animals after state pulled from API  ****")
    }, [animals])


    return (
        <article className="animals">
            {
                animals.map(animal => {
                    return <section key={animal.id} className="animal">
                        <div><h3>{animal.name}</h3></div>
                        <div>{animal.breed}</div>
                        <div>Owner: {animal.customerId}</div>
                        <div>Location: {animal.locationId}</div>
                    </section>
                })
            }
        </article>
    )

}
import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import { CustomerContext } from "../customer/CustomerProvider";
import { LocationContext } from "../location/LocationProvider";
import { Animal } from "./Animal.js";
import "./Animals.css"

export const AnimalList = (burrito) => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        getAnimals().then(getCustomers).then(getLocations)
    }, [])

    return (
        <>
            <button onClick={() => burrito.history.push("/animals/create")}>
                Admit New Animal
            </button>
            <article className="animals">
                {
                    animals.map(animal => {
                        const owner = customers.find(customer => customer.id === animal.customerId) || {}
                        const location = locations.find(loc => loc.id === animal.locationId) || {}

                        /*
                            {
                                animalKey: {id: 1....}
                                ownerKey: {id: 1....},
                                locationKey: {id: 1....}
                            }
                        */
                        return <Animal key={animal.id} animal={animal} owner={owner} location={location} />
                    })
                }
            </article>
        </>
    )

}
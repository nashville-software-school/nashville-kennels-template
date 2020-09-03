import React, { useContext, useEffect } from "react"
import { AnimalContext } from "./AnimalProvider";
import "./Animal.css"
import { CustomerContext } from "../customer/CustomerProvider.js";

export const AnimalList = () => {
    const { animals, getAnimals } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)

    useEffect(() => {
        getAnimals().then(getCustomers)
    }, [])

    return (
        <article className="animals">
            {
                animals.map(animal => {
                    const owner = customers.find(customer => customer.id === animal.customerId) || {}
                    return <section key={animal.id} className="animal">
                        <div><h3>{animal.name}</h3></div>
                        <div>{animal.breed}</div>
                        <div>Owner: {owner.name}</div>
                        <div>Location: {animal.locationId}</div>
                    </section>
                })
            }
        </article>
    )

}
import React from "react"
import "./Animal.css"


/*
    {
        animal: {id: 1....}
        owner: {id: 1....},
        location: {id: 1....}
    }
*/
export const Animal = ({ animal, owner, location }) => (
    <section key={animal.id} className="animal">
        <div><h3>{animal.name}</h3></div>
        <div>{animal.breed}</div>
        <div>Owner: {owner.name}</div>
        <div>Location: {location.name}</div>
    </section>
)

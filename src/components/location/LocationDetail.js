import React, { useContext } from "react"
import { RoutingContext } from "../Routed.js"
import "./Locations.css"

export const LocationDetail = () => {
    const { location } = useContext(RoutingContext)

    return (
        <section className="location">
            <h2 className="location__name">{location.state.chosenLocation.name}</h2>
            <address className="location__address">{location.state.chosenLocation.address}</address>
            <div>
                <h4>Employees</h4>
                { location.state.chosenLocation.employees.map(e => e.name).join(", ") }
            </div>
            <div>
                <h4>Current Residents</h4>
                {
                    location.state.chosenLocation.animals.map(a => a.name).join(", ")
                }
            </div>
        </section>
    )
}
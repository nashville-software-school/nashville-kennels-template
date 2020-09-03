import React, { useContext, useEffect } from "react"
import { LocationContext } from "./LocationProvider";
import "./Location.css"

export const LocationList = () => {
    const {locations, getLocations} = useContext(LocationContext)

    useEffect(() => {
            console.log(" **** Locations before state pulled from API  ****")
            getLocations()
        }, [])

    /*
        eventHub.addeventListener("locationStateChanged", event => {
            console.log(" **** Locations after state pulled from API  ****")
        })
    */
    useEffect(() => {
       console.log(" **** Locations after state pulled from API  ****")
    }, [locations])


    return (
        <article className="locations">
            {
                locations.map(location => {
                    return <section key={location.id} className="location">
                        <div><h3>{location.name}</h3></div>
                        <div>{location.address}</div>
                    </section>
                })
            }
        </article>
    )

}
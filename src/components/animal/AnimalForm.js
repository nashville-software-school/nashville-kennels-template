import React, { useContext, useRef, useEffect } from "react"
import { CustomerContext } from "../customer/CustomerProvider.js"
import { LocationContext } from "../location/LocationProvider.js"
import { AnimalContext } from "./AnimalProvider"
import "./Animals.css"

export const AnimalForm = (burrito) => {
    const { addAnimal } = useContext(AnimalContext)
    const { customers, getCustomers } = useContext(CustomerContext)
    const { locations, getLocations } = useContext(LocationContext)

    const name = useRef(null)
    const customer = useRef(null)
    const location = useRef(null)
    const breed = useRef(null)

    useEffect(() => {
        getLocations()
        getCustomers()
    }, [])


    const admitAnimal = () => {
        const newAnimal = {
            name: name.current.value,
            breed: breed.current.value,
            locationId: parseInt(location.current.value),
            treatment: "",
            customerId: parseInt(customer.current.value)
        }

        addAnimal(newAnimal).then(() => {
            burrito.history.push("/animals")
        })
    }


    return (
        <form>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="animalName">Animal name: </label>
                    <input type="text" id="animalName" ref={name} required autoFocus className="form-control" placeholder="Animal name" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="breed">Breed: </label>
                    <input type="text" id="breed" ref={breed} required autoFocus className="form-control" placeholder="Breed of animal" />
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="location">Assign to location: </label>
                    <select defaultValue="" name="location" ref={location} id="animalLocation" className="form-control" >
                        <option value="0">Select a location</option>
                        {locations.map(e => (
                            <option key={e.id} value={e.id}>
                                {e.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <fieldset>
                <div className="form-group">
                    <label htmlFor="customer">Brought in by: </label>
                    <select defaultValue="" name="customer" ref={customer} className="form-control" >
                        <option value="0">Select a customer</option>
                        {customers.map(customer => (
                            <option key={customer.id} value={customer.id}>
                                {customer.name}
                            </option>
                        ))}
                    </select>
                </div>
            </fieldset>
            <button type="submit"
                onClick={evt => {
                    evt.preventDefault()
                    admitAnimal()
                }}
                className="btn btn-primary">
                Admit Animal
            </button>
        </form>
    )
}
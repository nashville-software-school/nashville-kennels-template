import React from "react"
import { Animal } from "./animal/Animal"
import { AnimalList } from "./animal/AnimalList.js"
import { AnimalProvider } from "./animal/AnimalProvider.js"
import { Customer } from "./customer/Customer.js"
import { CustomerList } from "./customer/CustomerList.js"
import { CustomerProvider } from "./customer/CustomerProvider.js"
import { Employee } from "./employee/Employee.js"
import { EmployeeList } from "./employee/EmployeeList.js"
import { EmployeeProvider } from "./employee/EmployeeProvider.js"
import "./Kennel.css"
import { LocationList } from "./location/LocationList"
import { LocationProvider } from "./location/LocationProvider.js"

export const Kennel = () => {
    return <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>
        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>

        <h2>Animals</h2>
        <AnimalProvider>
            <AnimalList />
        </AnimalProvider>

        <h2>Locations</h2>
        <LocationProvider>
            <LocationList />
        </LocationProvider>

        <h2>Customers</h2>
        <CustomerProvider>
            <CustomerList />
        </CustomerProvider>

        <h2>Employees</h2>
        <EmployeeProvider>
            <EmployeeList />
        </EmployeeProvider>
    </>

}
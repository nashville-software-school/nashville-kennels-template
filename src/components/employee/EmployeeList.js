import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"
import { LocationContext } from "../location/LocationProvider.js";

export const EmployeeList = (burrito) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
        console.log(" **** Employees before state pulled from API  ****")
        getEmployees().then(getLocations)
    }, [])


    return (
        <>
            <button onClick={() => burrito.history.push("/employees/create")}>
                Add Employee
            </button>
            <article className="employees">
                {
                    employees.map(employee => {
                        const employeeLocation = locations.find(loc => loc.id === employee.locationId) || {}
                        return <section key={employee.id} className="employee">
                            <div><h3>{employee.name}</h3></div>
                            <div>{employeeLocation.name}</div>
                        </section>
                    })
                }
            </article>
        </>
    )

}
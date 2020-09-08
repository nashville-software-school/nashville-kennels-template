import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import { LocationContext } from "../location/LocationProvider.js";
import "./Employee.css"

export const EmployeeList = (burrito) => {
    const { employees, getEmployees } = useContext(EmployeeContext)
    const { locations, getLocations } = useContext(LocationContext)

    useEffect(() => {
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
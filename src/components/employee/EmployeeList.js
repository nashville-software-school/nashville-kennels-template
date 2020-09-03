import React, { useContext, useEffect } from "react"
import { EmployeeContext } from "./EmployeeProvider";
import "./Employee.css"

export const EmployeeList = () => {
    const {employees, getEmployees} = useContext(EmployeeContext)

    useEffect(() => {
            console.log(" **** Employees before state pulled from API  ****")
            getEmployees()
        }, [])

    /*
        eventHub.addeventListener("EmployeeStateChanged", event => {
            console.log(" **** Employees after state pulled from API  ****")
        })
    */
    useEffect(() => {
       console.log(" **** Employees after state pulled from API  ****")
    }, [employees])


    return (
        <article className="employees">
            {
                employees.map(employee => {
                    return <section key={employee.id} className="employee">
                        <div><h3>{employee.name}</h3></div>
                        <div>{employee.locationId}</div>
                    </section>
                })
            }
        </article>
    )

}
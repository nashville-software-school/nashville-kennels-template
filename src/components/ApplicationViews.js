import React from "react"
import { Route } from "react-router-dom"
import { LocationList } from "./location/LocationList"
import { AnimalList } from "./animal/AnimalList"
import { CustomerList } from "./customer/CustomerList.js"
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm.js"
import { AnimalForm } from "./animal/AnimalForm.js"
import { EmployeeDetail } from "./employee/EmployeeDetail.js"
import { LocationDetail } from "./location/LocationDetail.js"
import { AnimalDetails } from "./animal/AnimalDetail.js"

export const ApplicationViews = () => {
    return (
        <>
            <Route exact path="/">
                <LocationList />
            </Route>

            <Route path="/locations/:locationId(\d+)" render={
                props => <LocationDetail {...props} />
            } />

            <Route exact path="/animals" render={() => {
                return <>
                    <main className="animalContainer">
                        <h1>Animals</h1>

                        <AnimalList />
                    </main>
                </>
            }} />

            <Route exact path="/animals/create" render={(props) => {
                return <AnimalForm {...props} />
            }} />

            <Route path="/animals/:animalId(\d+)" render={
                props => <AnimalDetails {...props} />
            } />

            <Route path="/animals/edit/:animalId(\d+)" render={
                props => <AnimalForm {...props} />
            } />

            <Route path="/customers">
                <CustomerList />
            </Route>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kennel_customer")
                    props.history.push("/login")
                }
            } />

            <Route path="/employees/create" render={(props) => {
                return <EmployeeForm {...props} />
            }} />

            <Route path="/employees/:employeeId(\d+)" render={
                props => <EmployeeDetail {...props} />
            } />

            <Route exact path="/employees" render={(props) => {
                return <EmployeeList {...props} />
            }} />
        </>
    )
}

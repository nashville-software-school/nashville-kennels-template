import React from "react"
import { Route } from "react-router-dom"
import { Routed as WithRoutingProps } from "./Routed"

import { CustomerProvider } from "./customer/CustomerProvider"
import { CustomerList } from "./customer/CustomerList"

import { EmployeeProviders } from "./employee/EmployeeProviders.js"
import { EmployeeList } from "./employee/EmployeeList";
import { EmployeeForm } from "./employee/EmployeeForm"
import { EmployeeDetail } from "./employee/EmployeeDetail"

import { LocationProviders } from "./location/LocationProviders"
import { LocationList } from "./location/LocationList"
import { LocationDetail } from "./location/LocationDetail"

import { AnimalProviders } from "./animal/AnimalProviders"
import { AnimalProvider } from "./animal/AnimalProvider"
import { AnimalDetails } from "./animal/AnimalDetail"
import { AnimalForm } from "./animal/AnimalForm"
import { Animals } from "./animal/Animals"

export const ApplicationViews = () => {
    return (
        <>
            <LocationProviders>
                <Route exact path="/">
                    <LocationList />
                </Route>

                <WithRoutingProps path="/locations/:locationId(\d+)">
                    <LocationDetail />
                </WithRoutingProps>
            </LocationProviders>

            <AnimalProviders>
                <WithRoutingProps path="/animals">
                    <Animals />
                </WithRoutingProps>

                <WithRoutingProps path="/animals/create">
                    <AnimalForm />
                </WithRoutingProps>

                <WithRoutingProps path="/animals/:animalId(\d+)">
                    <AnimalDetails />
                </WithRoutingProps>

                <WithRoutingProps path="/animals/edit/:animalId(\d+)">
                    <AnimalForm />
                </WithRoutingProps>
            </AnimalProviders>

            <CustomerProvider>
                <AnimalProvider>
                    <Route path="/customers">
                        <CustomerList />
                    </Route>
                </AnimalProvider>
            </CustomerProvider>

            <EmployeeProviders>
                <WithRoutingProps path="/employees">
                    <EmployeeList />
                </WithRoutingProps>

                <WithRoutingProps path="/employees/create">
                    <EmployeeForm />
                </WithRoutingProps>

                <WithRoutingProps path="/employees/:employeeId(\d+)">
                    <EmployeeDetail />
                </WithRoutingProps>
            </EmployeeProviders>

            <Route path="/logout" render={
                (props) => {
                    localStorage.removeItem("kennel_customer")
                    props.history.push("/login")
                }
            } />
        </>
    )
}
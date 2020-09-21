import React from 'react'
import { AnimalProvider } from '../animal/AnimalProvider.js'
import { EmployeeProvider } from './EmployeeProvider.js'
import { LocationProvider } from '../location/LocationProvider.js'

export const EmployeeProviders = (props) => {
    return <LocationProvider>
        <EmployeeProvider>
            <AnimalProvider>
                {props.children}
            </AnimalProvider>
        </EmployeeProvider>
    </LocationProvider>



}
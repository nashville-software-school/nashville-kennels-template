import React from 'react'
import { CustomerProvider } from '../customer/CustomerProvider.js'
import { LocationProvider } from '../location/LocationProvider.js'
import { AnimalProvider } from './AnimalProvider.js'

export const AnimalProviders = (props) => {
    return <AnimalProvider>
        <CustomerProvider>
            <LocationProvider>
                { props.children }
            </LocationProvider>
        </CustomerProvider>
    </AnimalProvider>

}
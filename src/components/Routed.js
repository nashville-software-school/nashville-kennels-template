import React from "react"
import { Route } from "react-router-dom"

export const RoutingContext = React.createContext()

export const Routed = ({ path, children }) => {
    return <Route exact path={path} render={(p) => {
        return <RoutingContext.Provider value={{
            history: p.history,
            match: p.match,
            location: p.location
        }}>
            {children}
        </RoutingContext.Provider>
    }}>
    </Route>
}
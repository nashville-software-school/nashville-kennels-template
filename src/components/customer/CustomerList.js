import React, { useContext, useEffect } from "react"
import { CustomerContext } from "./CustomerProvider";
import "./Customer.css"

export const CustomerList = () => {
    const {customers, getCustomers} = useContext(CustomerContext)

    useEffect(() => {
            console.log(" **** Customers before state pulled from API  ****")
            getCustomers()
        }, [])

    /*
        eventHub.addeventListener("CustomerStateChanged", event => {
            console.log(" **** Customers after state pulled from API  ****")
        })
    */
    useEffect(() => {
       console.log(" **** Customers after state pulled from API  ****")
    }, [customers])


    return (
        <article className="customers">
            {
                customers.map(customer => {
                    return <section key={customer.id} className="customer">
                        <div><h3>{customer.name}</h3></div>
                        <div>{customer.address}</div>
                    </section>
                })
            }
        </article>
    )

}
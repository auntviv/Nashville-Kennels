import React from "react"
import { Route } from "react-router-dom"
import { Home } from "./Home"
import { AnimalCard } from "./animal/AnimalCard"
import { Employee } from "./employee/Employee"
import { Customer } from "./customer/Customer"
import { Location } from "./Location/Location"


export const ApplicationViews = () => {
    return (
        <>
            {/* Render the location list when http://localhost:3000/ */}
            <Route exact path="/">
                <Home />
            </Route>

            {/* Render the animal list when http://localhost:3000/animals */}
            <Route path="/animals">
                <AnimalCard />
            </Route>

             {/* Render the customer list when http://localhost:3000/animals */}
             <Route path="/customers">
                <Customer />
            </Route>

             {/* Render the employee list when http://localhost:3000/animals */}
             <Route path="/employees">
                <Employee />
            </Route>

             {/* Render the location list when http://localhost:3000/animals */}
            <Route path="/locations">
                <Location />
            </Route>
        </>
    )
}

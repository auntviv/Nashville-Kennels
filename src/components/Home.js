import React from "react";
import { PropsAndState } from './PropsAndState'
import { AnimalCard } from "./animal/AnimalCard"
import "./animal/Animal.css"
import { Customer } from "./customer/Customer"
import "./customer/Customer.css"
import { Employee } from "./employee/Employee"
import "./employee/Employee.css"
import { Location } from "./Location/Location"
import "./Location/Location.css"

//Look carefully at the <article> tag. In React, we add classes to a component with `className` instead of `class`.


export const Home = () => (
    <>
        <h2>Nashville Kennels</h2>
        <small>Loving care when you're not there.</small>

        <address>
            <div>Visit Us at the Nashville North Location</div>
            <div>500 Puppy Way</div>
        </address>
        <PropsAndState yourName={"Aviva"} />

         <h2>Animals</h2>
         <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>


        <h2>Animals</h2>
        <article className="animals">
            <AnimalCard />
            <AnimalCard />
            <AnimalCard />
        </article>

        <h2>Customer</h2>
        <article className="customers">
            <Customer />
            <Customer />
            <Customer />
            <Customer />
        </article>

        <h2>Employee</h2>
        <article className="employees">
            <Employee />
            <Employee />
            <Employee />
        </article>

        <h2>Location</h2>
        <article className="Locations">
            <Location />
            <Location />
        </article>
    
    
         
        


    </>
)

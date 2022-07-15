import React from "react"
import Navbar from "./components/Navbar.js"
import Hero from "./components/Hero.js"
import Card from "./components/Card.js"
import Data from "./data.js"

/*
Challenge:

- import the array of data from data.js
- map over the array to create <Card /> components
- display the array of card components under the navbar
  (in place of the current <Card /> component)

Note: We haven't styled the group of components yet, so they'll
still be block elements, stacked vertically. We'll add styling later.
*/

export default function App() {
    const CardData = Data.map(dataElement => {
        return (
            <Card 
                key={dataElement.id}
                img={dataElement.coverImg}
                rating={dataElement.stats.rating}
                reviewCount={dataElement.stats.reviewCount}
                country={dataElement.location}
                title={dataElement.title}
                price={dataElement.price}
                openSpots={dataElement.openSpots}
                // item={dataElement} you can pass in the entire dataElement item if you want to make this easier!
                // {...dataElement} takes properties of data and creates seperate prop for each of them individually
            />
        )
    })
    return (
        <div className="container">
            <Navbar />
            <Hero />
            <section className="cards-list">
                {CardData}
            </section>
        </div>
    )
}
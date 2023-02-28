import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import Card from '../components/Card'
import './Home.css'
export default function Home() {
  return (
    <div>
      <div className="nav">
        <Navbar />
      </div>
      <div className="cards">
        <div className="container">
          <h1>My Card Collection</h1>
          <div className="card-container">
            <Card
              title="Card Title"
              imageSrc="https://via.placeholder.com/300x200.png"
              description="This is a description of the card."
            />
            <Card
              title="Another Card Title"
              imageSrc="https://via.placeholder.com/300x200.png"
              description="This is another description of the card."
            />
            <Card
              title="Another Card Title"
              imageSrc="https://via.placeholder.com/300x200.png"
              description="This is another description of the card."
            />
          </div>
        </div>
      </div>
      <div className="foo">
        <Footer />
      </div>
    </div>
  )
}

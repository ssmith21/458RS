import React from 'react'
import Button from '../components/Button'
import { Link } from "react-router-dom";


function HomePage() {
    return (
    <div className="home">
      <div class="container">
        <div class="row align-items-center my-5">
          <div class="col-lg-7">
          </div>
          <div class="col-lg-5">
            <h1 class="font-weight-light">Reservation System</h1>
            <p>
              Hello world
            </p>
            <Link to="/login">
              <Button 
                    text='Admin Login'  
                    color='grey'
                    />
            </Link>
          </div>
        </div>
      </div>
    </div>
    );
}

export default HomePage;
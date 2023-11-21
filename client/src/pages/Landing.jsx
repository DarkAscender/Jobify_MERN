import { Link } from "react-router-dom";
import styled from "styled-components";
import Wrapper from '../assets/wrappers/LandingPage';
import main from '../assets/images/main.svg';
import { Logo } from "../components";

const Landing = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>job<span>tracking</span> app
          </h1>
          <p>
          Welcome to JobTracker, your personalized solution for mastering the job search process. We understand the challenges that come with navigating the job market, and that's why we've created a platform that streamlines the entire journey. With JobTracker, you can effortlessly manage and track your job applications, stay organized with customizable job lists, and receive timely reminders for application deadlines.
          </p>
          <Link to="/register" className='btn register-link'>
            Register
          </Link>
          <Link to="/login" className='btn'>
            Login / Demo User
          </Link>

          
        </div>
        <img src={main} alt="job hunt" className='img main-img'/>
      </div>
    </Wrapper>
  )
}


export default Landing
import React from 'react';
import myPicture from '../../img/jake.png';
import Navbar from '../Navbar';

const Home = () => {
  return (
    <main className="home">
      <Navbar />
      <div className="home__layout">
        <div className="home__left">
          <img className="home__img" src={myPicture} alt="Jake" />
        </div>
        <div className="home__right">
          <div className="home__right-content">
            <div className="line"></div>
            <h1 className="home__right-title">I'm Jake a Web Developer</h1>
            <p className="home__right-paragraph">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Enim
              nesciunt modi provident animi ipsa
            </p>
            <button className="btn">About</button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;

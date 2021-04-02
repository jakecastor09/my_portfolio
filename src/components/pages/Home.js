import React from 'react';
import myPicture from '../../img/jake.png';

const Home = () => {
  return (
    <main className="home">
      <div className="home__layout">
        <div className="home__left">
          <div className="home__img-container">
            <img className="home__img" src={myPicture} alt="Jake" />
          </div>
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

import React from 'react';
import myPicture from '../../img/jake.png';
import backgroundPic from '../../img/grunge.png';
import reactjsPic from '../../img/reactjs.png';
import jsPic from '../../img/js.png';
import htmlPic from '../../img/html5.png';
import sassPic from '../../img/sass.png';
import cssPic from '../../img/css.png';

const About = () => {
  return (
    <div id="about">
      <div className="container about">
        <h1 className="page-title">About</h1>
        <div className="about__content">
          <div className="about__img-container">
            <img className="about__img" src={myPicture} alt="jake" />
            <img className="about__bg-img" src={backgroundPic} alt="blue" />
          </div>
          <div className="about__about-me">
            <div className="about__title">About Me</div>
            <p className="about__paragraph">
              in nisl nisi scelerisque eu ultrices vitae auctor eu augue ut
              lectus arcu bibendum at varius vel pharetra vel turpis nunc eget
              lorem dolor sed viverra ipsum nunc aliquet bibendum enim facilisis
              gravida neque convallis a cras semper auctor neque vitae tempus
              quam pellentesque nec nam aliquam sem et tortor
            </p>
          </div>
        </div>
        <div className="about__skill">
          <h1 className="about__skill-title">My Skills</h1>
          <div className="about__skill-language">
            <div className="about__skill-item">
              <div className="about__skill-circle">
                <div className="about__skill-overlay">
                  <span className="about__skill-percentage">80%</span>
                </div>
                <img
                  className="about__skill-img-1 about__skill-img"
                  src={htmlPic}
                  alt="html"
                />
              </div>
              <h3 className="about__skill-name">Html</h3>
            </div>
            <div className="about__skill-item">
              <div className="about__skill-circle">
                <div className="about__skill-overlay">
                  <span className="about__skill-percentage">70%</span>
                </div>
                <img
                  className="about__skill-img-2 about__skill-img"
                  src={cssPic}
                  alt="css"
                />
              </div>
              <h3 className="about__skill-name">Css</h3>
            </div>

            <div className="about__skill-item">
              <div className="about__skill-circle">
                <div className="about__skill-overlay">
                  <span className="about__skill-percentage">80%</span>
                </div>
                <img
                  className="about__skill-img-3 about__skill-img"
                  src={sassPic}
                  alt="sass"
                />
              </div>
              <h3 className="about__skill-name">Sass</h3>
            </div>

            <div className="about__skill-item">
              <div className="about__skill-circle">
                <div className="about__skill-overlay">
                  <span className="about__skill-percentage">60%</span>
                </div>
                <img
                  className="about__skill-img-4 about__skill-img"
                  src={jsPic}
                  alt="javascript"
                />
              </div>
              <h3 className="about__skill-name">Javascript</h3>
            </div>

            <div className="about__skill-item">
              <div className="about__skill-circle">
                <div className="about__skill-overlay">
                  <span className="about__skill-percentage">50%</span>
                </div>
                <img
                  className="about__skill-img-5 about__skill-img"
                  src={reactjsPic}
                  alt="react js"
                />
              </div>
              <h3 className="about__skill-name">React JS</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;

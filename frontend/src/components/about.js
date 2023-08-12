import React from "react";
import { Link } from "react-router-dom";
import Images from './images/riya.jpg';
const About = () => {
  return (
    <div className="container1">
      <div className="box1">
        <div className="head">
          <span>ABOUT</span>
          <h1>About Me</h1>
        </div>
        <div className="image">
          <img
            alt="riya"
            className="pic2"
            src={Images}
          ></img>
        </div>
        <div className="para">
          <h2>Riya Gupta</h2>
          <h4>Web Developer</h4>
          <br />
          <hr />
          <p>
            Hello! I'm Riya Gupta, a passionate and dedicated web developer with a strong foundation in web development. As a recent graduate in B.Tech, I'm excited to bring my fresh perspective and enthusiasm to the world of web development.
            <br />
            <br />
            One of my specialties is taking an idea from scratch and creating a
            full-fledged platform. I go beyond to produce sites with a unique,
            outstanding, contemporary look-and-feel. With extensive knowledge of
            MERN Stack,  I'm able to create dynamic and interactive web applications that deliver seamless user experiences and robust functionality.
          </p>
        </div>
        <div className="personaldetail">
          <div className="left1">
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Birthday:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>11 December 2001</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Age:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>21</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Address:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>New Delhi, India</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Email:</b>
                </p>
              </div>
              <div className="inner2text">
                <Link to="#">riyagupta111201@gmail.com</Link>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Phone:</b>
                </p>
              </div>
              <div className="inner2text">
                <Link to="#">9654384176</Link>
              </div>
            </div>
          </div>
          <div className="right1">
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Nationality:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Indian</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Study:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Bachelor of Technology</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Degree:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Engineering</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Branch:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Computer Science</p>
              </div>
            </div>
            <div className="outer">
              <div className="innertext">
                <p>
                  <b>Interest:</b>
                </p>
              </div>
              <div className="inner2text">
                <p>Playing Badminton</p>
              </div>
            </div>
          </div>
        </div>
        <br />
        <hr />
        <button className="btn"> <Link to="https://drive.google.com/file/d/1RXhvY2YEAPBjldq2uc021vODtOtzOebX/view?usp=drivesdk" target="blank">Download CV</Link></button>



        <div className="box2">
          <div className="knowledge">
            <h3>KNOWLEDGE</h3>
            <ul>
              <li>HTML, CSS, JS</li>
              <li>BootStrap, JSON</li>
              <li>Node.js, Express.js</li>
              <li>MongoDB, API</li>
              <li>React.js</li>
            </ul>
          </div>
          <div className="interest">
            <h3>INTEREST</h3>

            <ul>
              <li>Making Websites</li>
              <li>Maintaining website</li>
              <li>Site Optimization</li>
              <li>Custom Website</li>
              <li>Learn E-Commerce</li>
            </ul>
          </div>
        </div>
        <br />
        <br />
        <br />
        <br />

        <hr />


        <div className=" box3">
          <div className="skills skills-left">
            <h3>Programming Skills</h3>
            <div className="bars">
              <div className="info">
                <span>HTML</span>
                <span className="percent">90%</span>
              </div>
              <div className="line html" />
            </div>
            <div className="bars">
              <div className="info">
                <span>CSS</span>
                <span className="percent">70%</span>
              </div>
              <div className="line css" />
            </div>
            <div className="bars">
              <div className="info">
                <span>JavaScript</span>
                <span className="percent">60%</span>
              </div>
              <div className="line js" />
            </div>
            <div className="bars">
              <div className="info">
                <span>BootStrap</span>
                <span className="percent">60%</span>
              </div>
              <div className="line bootstrap" />
            </div>
            <div className="bars">
              <div className="info">
                <span>Node.js</span>
                <span className="percent">70%</span>
              </div>
              <div className="line nodejs" />
            </div>
          </div>
          <div className="skills skills-right">
            <div className="bars">
              <div className="info">
                <span>Express.js</span>
                <span className="percent">70%</span>
              </div>
              <div className="line expressjs" />
            </div>
            <div className="bars">
              <div className="info">
                <span>MongoDB</span>
                <span className="percent">70%</span>
              </div>
              <div className="line mongodb" />
            </div>
            <div className="bars">
              <div className="info">
                <span>React.js</span>
                <span className="percent">50%</span>
              </div>
              <div className="line reactjs" />
            </div>
            <div className="bars">
              <div className="info">
                <span>API</span>
                <span className="percent">60%</span>
              </div>
              <div className="line api" />
            </div>
            <div className="bars">
              <div className="info">
                <span>C++</span>
                <span className="percent">80%</span>
              </div>
              <div className="line c" />
            </div>
          </div>
        </div>





      </div>

    </div>
  );
};
export default About;

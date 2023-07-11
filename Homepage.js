import React from "react";
import './Homepage.css';
function Homepage(){
    return(
<>
  <div className="menu-btn">
    <i className="fas fa-bars fa-2x" />
  </div>
  <div className="container">
    {/* Nav */}
    <nav className="main-nav">
      <img
        src="https://tse2.mm.bing.net/th?id=OIP.JBfdU3sdOBTXUIzz5hr18AHaF7&pid=Api&P=0&h=180"
        alt="LMS"
        className="logo"
      />
      <ul className="main-menu">
        {/* <li>
          <a href="#">Courses</a>
        </li> */}
        <select>
              <option>Courses</option>
              <option>Medicine</option>
              <option>Engineering</option>
              <option>Arts</option>
              

            </select>
        <li>
          <a href="#">Certification</a>
        </li>
        <li>
          <a href="#">Contact</a>
        </li>
        <li>
          <a href="#">Reviews</a>
        </li>
        <li>
          <a href="#">Help</a>
        </li>
        {/* <li>
          <a href="#">Support</a>
        </li> */}
      </ul>
      <ul className="right-menu">
        <li>
          <a href="#">
            <i className="fas fa-search" />
          </a>
        </li>
        <li>
          <a href="#">
            <i className="fas fa-shopping-cart" />
          </a>
        </li>
      </ul>
    </nav>
    {/* Showcase */}
    <header className="showcase">
      <h2>Best deals</h2>
      <p>A Broad selection of Courses</p>
      <a href="#" className="btn">
        Login <i className="fas fa-chevron-right" />
      </a>
    </header>
    {/* Home cards 1 */}
    <section className="home-cards">
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.TqepA3GdLnqY-LenzLP4jAHaEc&pid=Api&P=0&h=180" alt="" />
        <h3>Python for Data Analysis</h3>
        <p>
          Complete Data Science Training: Mathematics, Statistics, Python,Advanced Statistics
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/KjGFHVJ/card2.png" alt="" />
        <h3>Modern Artificial Intelligence</h3>
        <p>
          Harness the power of AI to solve practical and real world business problems.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://tse2.mm.bing.net/th?id=OIP.brjYKZ2j0YMWYv1DvTA7FAHaES&pid=Api&P=0&h=180" alt="" />
        <h3>Deep Learning</h3>
        <p>
          The most in-depth course on recommedation systems with Deep Learning.
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://tse3.mm.bing.net/th?id=OIP.r9w95AXyCGlkP8geYmPyJwHaEK&pid=Api&P=0&h=180" alt="" />
        <h3>Fundamentals of Deep Learning</h3>
        <p>
          This course will start your career in Data Science
        </p>
        <a href="#">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Xbox */}
    <section className="xbox">
      <div className="content">
        <h2>A Brief History of Animation</h2>
        <p>
          Covering every aspect of Animation, this course is a visual history encompassing a vast range of Animation and Animators.
          Design memorable character with a strong personality and learn how to prepare them for Animation.
        </p>
        <a href="#" className="btn">
          Join Now <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Home cards 2 */}
    <section className="home-cards">
      <div>
        <img src="https://i.ibb.co/zVqhWn2/card5.png" alt="" />
        <h3>Microsoft Teams</h3>
        <p>Unleash the power of your team.</p>
        <a href="#">
          Shop Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/mGZcxcn/card6.jpg" alt="" />
        <h3>Unlock the power of learning</h3>
        <p>
          Get students future-ready with Windows 10 devices. Starting at $219.
        </p>
        <a href="#">
          Shop Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/NpPvVHj/card7.png" alt="" />
        <h3>Windows 10 Enterprise</h3>
        <p>Download the free 90-day evaluation for IT professionals.</p>
        <a href="#">
          Download Now <i className="fas fa-chevron-right" />
        </a>
      </div>
      <div>
        <img src="https://i.ibb.co/LkP4L5T/card8.png" alt="" />
        <h3>Explore Kubernetes</h3>
        <p>
          Learn how Kubernetes works and get started with cloud native app
          development today.
        </p>
        <a href="#">
          Get Started <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Carbon */}
    <section className="carbon dark">
      <div className="content">
        <h2>Commiting To Carbon Negative</h2>
        <p>
          Microsoft will be carbon negative by 2030 and by 2050 we will remove
          all carbon the company has emitted since it was founded in 1975
        </p>
        <a href="#" className="btn">
          Learn More <i className="fas fa-chevron-right" />
        </a>
      </div>
    </section>
    {/* Follow */}
    <section className="follow">
      <p>Follow Microsoft</p>
      <a href="https://facebook.com">
        <img src="https://i.ibb.co/LrVMXNR/social-fb.png" alt="Facebook" />
      </a>
      <a href="https://twitter.com">
        <img src="https://i.ibb.co/vJvbLwm/social-twitter.png" alt="Twitter" />
      </a>
      <a href="https://linkedin.com">
        <img
          src="https://i.ibb.co/b30HMhR/social-linkedin.png"
          alt="Linkedin"
        />
      </a>
    </section>
  </div>
  {/* Links */}
  <section className="links">
    <div className="links-inner">
      <ul>
        <li>
          <h3>IT & Software</h3>
        </li>
        <li>
          <a href="#">Network</a>
        </li>
        <li>
          <a href="#">Security</a>
        </li>
        <li>
          <a href="#">Hardware</a>
        </li>
        <li>
          <a href="#">OS and Servers</a>
        </li>
        <li>
          <a href="#">Data Science</a>
        </li>
        <li>
          <a href="#">Machine Learning</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Microsoft Store</h3>
        </li>
        <li>
          <a href="#">Account Profile</a>
        </li>
        <li>
          <a href="#">Download Center</a>
        </li>
        <li>
          <a href="#">Microsoft Store support</a>
        </li>
        <li>
          <a href="#">Returns</a>
        </li>
        <li>
          <a href="#">Older tracking</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Education</h3>
        </li>
        <li>
          <a href="#">Microsfot in education</a>
        </li>
        <li>
          <a href="#">Office for students</a>
        </li>
        <li>
          <a href="#">Office 365 for schools</a>
        </li>
        <li>
          <a href="#">Deals for studentss</a>
        </li>
        <li>
          <a href="#">Microsfot Azure</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Enterprise</h3>
        </li>
        <li>
          <a href="#">Azure</a>
        </li>
        <li>
          <a href="#">AppSource</a>
        </li>
        <li>
          <a href="#">Automotive</a>
        </li>
        <li>
          <a href="#">Government</a>
        </li>
        <li>
          <a href="#">Healthcare</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Developer</h3>
        </li>
        <li>
          <a href="#">Visual Studio</a>
        </li>
        <li>
          <a href="#">Windowszs Dev Center</a>
        </li>
        <li>
          <a href="#">Developer Network</a>
        </li>
        <li>
          <a href="#">TechNet</a>
        </li>
        <li>
          <a href="#">Microsoft Developer</a>
        </li>
      </ul>
      <ul>
        <li>
          <h3>Company</h3>
        </li>
        <li>
          <a href="#">Careers</a>
        </li>
        <li>
          <a href="#">About Microsoft</a>
        </li>
        <li>
          <a href="#">Company news</a>
        </li>
        <li>
          <a href="#">Privacy at Microsoft</a>
        </li>
        <li>
          <a href="#">Inverstors</a>
        </li>
      </ul>
    </div>
  </section>
  {/* Footer */}
  <footer className="footer">
    <div className="footer-inner">
      <div>
        <i className="fas fa-globe fa-2x" /> English (United States)
      </div>
      <ul>
        <li>
          <a href="#">Sitemap</a>
        </li>
        <li>
          <a href="#">Contact LMS</a>
        </li>
        <li>
          <a href="#">Privacy &amp; cookies</a>
        </li>
        <li>
          <a href="#">Terms of use</a>
        </li>
        <li>
          <a href="#">Trademarks</a>
        </li>
        <li>
          <a href="#">Safety &amp; eco</a>
        </li>
        <li>
          <a href="#">About our ads</a>
        </li>
        <li>
          <a href="#">© LMS 2023</a>
        </li>
      </ul>
    </div>
  </footer>
</>
    );
}
export default Homepage;
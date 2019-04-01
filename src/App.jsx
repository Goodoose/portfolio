import React, { Component } from 'react';
import './App.css';

class App extends Component {  
  render() {
    const navItems = ['Home', 'About Me', 'Portfolio', 'Contact'];
    const nameProjects = [
      {name : 'fifteen-puzzle', path: 'fifteen-puzzle/dist/'},
      {name : 'tic-tac-toe-with-react', path: 'tic-tac-toe-with-react/dist/'},
      {name : 'todos-react', path: 'todos-react/dist/'},
      {name : 'calendar-react', path: 'calendar-react/'}
    ];
    return (
      <div className="App">
        <Navbar navItems={navItems}/>
        <Home />
        <AboutMe />
        <Portfolio nameProjects={nameProjects}/>
        <Contact />
      </div>
    );
  }
}

export default App;

const Navbar = ({navItems}) => {
  const itemsNavigation = navItems.map((item, index) => (
    <li className="nav-item" key={index}>
      <a className="nav-link" href={'#' + item}>{item}</a>
    </li>
  ));
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light shadow fixed-top container__opacity">
      <div className="container">
        <a className="navbar-brand" href="#nav"> </a>
        <button 
          className="navbar-toggler"
          type="button" 
          data-toggle="collapse" 
          data-target="#navbarResponsive" 
          aria-controls="navbarResponsive" 
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarResponsive">
          <ul className="navbar-nav ml-auto">
            {itemsNavigation}
          </ul>
        </div>
      </div>
    </nav>
  )
}

const Home = () => (
  <header className="masthead">
    <span id="Home"></span>
    <div className="container h-100">
      <div className="row h-100 align-items-center">
        <div className="col-12 text-center">
          <h1 className="font-weight-light font-image">Front-end Developer </h1>
          <p className="lead font-image-p">Welcome to my page!</p>
        </div>
      </div>
    </div>
</header>
)

const AboutMe = () => (
  <section className="py-5">
    <span id="About Me"></span>
    <div className="container">
      <h2 className="font-weight-light font-body">Some information about me</h2>
      <h4>Hi, all!</h4>
      <p>My name is Kostya. I am a Front-End Developer.</p>
      <p>I am good familiar with JavaScript, React, HTML, CSS. 
        I have good problem solving skills, analytical mind and as a self directed and self managed person I am always pushing myself to deliver ongoing process improvements in anything I do.
        I have an intermediate command of English.
      </p>
    </div>
  </section>
)

const Portfolio = ({nameProjects}) => {
  const projects = nameProjects.map((item, index) => (
    <a href={`https://goodoose.github.io/${item.path}`}>
      <img alt="img_github" className="portfolio__image" src={`../images/${item.name}.png`} />
    </a>
  ));
  return(
    <div>
      <span id="Portfolio"></span>
      <h2 className="font-weight-light font-body">Portfolio</h2>  
      {projects}
    </div>
  )
} 

const Contact = () => (
  <div className="contact">
    <span id="Contact"></span>
    <h2 className="font-weight-light font-body">Contact</h2>
    <div>
      <img alt="img" className="footer__icon" src="../images/mail.svg" />
      ko.chernyshenko@gmail.com
    </div>
    <div>
      <img alt="img" className="footer__icon" src="../images/phone-receiver.svg" />
      +380663120673
    </div>
    <a href="https://github.com/Goodoose">
      <img alt="img_github" className="footer__icon--link" src="../images/github-logo.svg" />
    </a>
    <a href="skype:constantine_chernyshenko">
      <img alt="img_skype" className="footer__icon--link" src="../images/skype.svg" />
    </a>
    <a href="https://www.linkedin.com/in/konstantin-chernyshenko-a72127145/">
      <img alt="img_linkedin" className="footer__icon--link"src="../images/linkedin.svg" />
    </a>
    <a href="https://www.facebook.com/profile.php?id=100012912665702">
      <img alt="img_facebook" className="footer__icon--link"src="../images/facebook.svg" />
    </a>
    <p className="copyright">Copyright ©2019 Portfolio by Konstantin Chernyshenko</p>
  </div>
) 
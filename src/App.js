import React from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav'
import NavbarBrand from 'react-bootstrap/NavbarBrand';
import Footer from './Components/Footer';
import './App.css';
import ContactPage from './Pages/ContactPage';
import AboutPage from './Pages/AboutPage';
import HomePage from './Pages/HomePage';

class App extends React.Component {

  constructor(props){
    super(props)
    this.state = {
      title: 'Alberto Sales',
      headerLinks: [
        {title: 'Home', path: '/' },
        {title: 'About', path: '/about' },
        {title: 'Contact', path: '/contact' }
      ],
      
      home: {
        title: 'Stay Ambitious My friend',
        subTitle: 'Projects for a better tomorrow',
        text: 'Let us get in contact, checkout my information'
      },

      about: { 
        title: 'About Me',
      },

      contact: {
        title: 'Let\'s Get to Know Each Other'
      }
    }
 }

  render() {
    return (
      <Router>
        <Container className = "p-0" fluid = {true}>

          <Navbar className = "border-bottom" bg = "transparent" expand = "lg">
            <Navbar.Brand> Alberto Sales </Navbar.Brand>

            <Navbar.Toggle className = "border-0" aria-controls = "navbar-toggle" />
              <Navbar.Collapse id = "navbar - toggle">
                <Nav className = "ml-auto">
                  <Link className = "nav-link" to = "/">Home</Link>
                  <Link className = "nav-link" to = "/about">About</Link>
                  <Link className = "nav-link" to = "/contact">Contact</Link>  
                </Nav>
              </Navbar.Collapse>
          </Navbar>

          <Route path = "/" exact render = {() => <HomePage title = {this.state.home.title} subTitle = {this.state.home.subTitle} text = {this.state.home.text} />} />
          <Route path = "/about" exact render = {() => <AboutPage title = {this.state.about.title} />} />
          <Route path = "/contact" exact render = {() => <ContactPage title = {this.state.contact.title} />}/>

          <Footer />

        </Container>
      </Router>
    );
  }
}
export default App;

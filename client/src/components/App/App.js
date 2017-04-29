// src/components/App/index.js
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import logo from './logo.svg';
// import { Grid, Navbar, Jumbotron, Button } from 'react-bootstrap';
import AppNavBar from '../AppNavBar/AppNavBar';
import Dashboard from '../Dashboard/Dashboard';
import SubmitTx from '../SubmitTx/SubmitTx';
import './App.css';
// import 'bootstrap/dist/css/bootstrap.css';
// import 'bootstrap/dist/css/bootstrap-theme.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <AppNavBar />
            <br />
            <Route exact path="/" component={Dashboard} />
            <Route path="/submittx" component={SubmitTx} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

// <BasicExample />
// <Dashboard />
// const BasicExample = () => (
//   <Router>
//     <div>
//       <ul>
//         <li><Link to="/">Home</Link></li>
//         <li><Link to="/about">About</Link></li>
//       </ul>

//       <hr/>
//     </div>
//   </Router>
// )

// const Home = () => (
//   <div>
//     <h2>Home</h2>
//   </div>
// )

// const About = () => (
//   <div>
//     <h2>About</h2>
//   </div>
// )

//  <div className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h2>Welcome to React</h2>
//         </div>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//           Added a new line here
//         </p>


// const items = [
//   { key: 'editorials', active: true, name: 'Editorials' },
//   { key: 'Dashboard', name: 'Dashboard' },
//   { key: 'New Transaction', name: 'New Transaction' },
// ]

// const MenuExampleProps = () => (
//   <Menu items={items} />
// )

// <div>
      //   <Navbar inverse fixedTop>
      //     <Grid>
      //       <Navbar.Header>
      //         <Navbar.Brand>
      //           <a href="/">K2 Bank</a>
      //         </Navbar.Brand>
      //         <Navbar.Toggle />
      //       </Navbar.Header>
      //     </Grid>
      //   </Navbar>
      //   <Jumbotron>
      //     <Grid>
      //       <h2>K2 Bank Foreign Remittance System</h2>
      //       <p>
      //         <Button
      //           bsStyle="success"
      //           bsSize="large"
      //           href="http://react-bootstrap.github.io/components.html"
      //           target="_blank">
      //           View React Bootstrap Docs
      //         </Button>
      //       </p>
      //     </Grid>
      //   </Jumbotron>
      // </div>

import React, { Component } from 'react';
import { Menu, Segment } from 'semantic-ui-react'
import { Link } from 'react-router-dom'

export default class AppNavBar extends Component {
  state = {}

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { activeItem } = this.state

    return (
      <Menu size='huge'>
        <Menu.Item header>ACME BANK FOREIGN PAYMENTS SYSTEM</Menu.Item>
        <Menu.Item
          name='Dashboard'
          active={activeItem === 'Dashboard'}
          onClick={this.handleItemClick}
        >
          <Link to="/">Dashboard</Link>
        </Menu.Item>
        <Menu.Item
          name='Submit Transaction'
          active={activeItem === 'Submit Transaction'}
          onClick={this.handleItemClick}
        >
          <Link to="/submittx">Submit Transaction</Link>
        </Menu.Item>
      </Menu>
    )
  }
}

      // <Router>
      //   <div>
      //     <Menu size='huge'>
      //       <Menu.Item header>K2 Bank</Menu.Item>
      //       <Menu.Item
      //         name='Dashboard'
      //         active={activeItem === 'Dashboard'}
      //         onClick={this.handleItemClick}
      //       >
      //         <Link to="/">Dashboard</Link>
      //       </Menu.Item>

      //       <Menu.Item
      //         name='Submit Transaction'
      //         active={activeItem === 'Submit Transaction'}
      //         onClick={this.handleItemClick}
      //       >
      //         <Link to="/submittx">Submit Transaction</Link>
      //       </Menu.Item>
      //     </Menu>
      //     <br />
      //     <Route exact path="/" component={Dashboard} />
      //     <Route path="/submittx" component={SubmitTx} />
      //   </div>
      // </Router>

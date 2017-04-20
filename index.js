import React, { Component } from 'react';
import {NavItem} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

class WrappedNavItem extends Component {
  constructor (props) {
    super (props);
    this.handler = this.handler.bind (this);
    this.state = {redirect: false};
  }
  handler (e) {
    e.preventDefault ();
    this.setState ({redirect: true});
  }
  render () {
    if (this.state.redirect) {
      this.state = {redirect: false};
      return (<Redirect to={this.props.href} />);
    }
    return (
      <NavItem onClick={this.handler}>{this.props.children}</NavItem>
    );
  }
}

export default WrappedNavItem;
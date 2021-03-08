/* eslint no-undef: 0 */ // --> OFF
import React from 'react';
import logo from './logo.svg';
import Nav from './components/Nav';
import Body from './components/Body';
import BackToTop from './components/BackToTop';
import './App.css';

const tabs = [{
  id: 0,
  title: 'Text Page',
  caption: 'Random form!'
},
{
  id: 1,
  title: 'Images Page',
  caption: 'These are some of my favorite Japanese shows!'
},
{
  id: 2,
  title: 'Videos Page',
  caption: 'Some random videos!'
},
{
  id: 3,
  title: 'Table Page',
  caption: 'My Projects!'
},
{
  id: 4,
  title: 'Email Page',
  caption: 'Email Validation form!'
},
{
  id: 5,
  title: 'Zoom Meeting Manager',
  caption: 'Zoom Meeting Manager!'
}];


class App extends React.Component {
  constructor() {
    super();
    this.state = {
      activeId: 0,
    };
  }

  changeTab = (id) => {
    this.setState({
      activeId: id
    });
  }

  render() {
    
    return (
      <div className="App">
        <Nav tabs = {tabs} active = {this.state.activeId} changeTab = {this.changeTab}/>
        <BackToTop />
        <Body tabs = {tabs} active = {this.state.activeId}/>
      </div>
    );
  }
}

export default App;
